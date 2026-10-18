import foods from "@/data/foods";
import { Buffs } from "@/data/buffs";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Food } from "@/types/food";
import { BadgeCheck, Utensils } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useMemo } from "react";
import { useSearch } from "@/context/search-context";

type Props = {
  selectedFoods: Food[];
  maxSlots: number;
  onAddFood: (food: Food) => void;
};

export default function FoodGrid({
  maxSlots,
  selectedFoods,
  onAddFood,
}: Props) {
  const { query } = useSearch();

  const filteredFoods = useMemo(() => {
    const normalized = query
      .toLocaleLowerCase()
      .replace(/[_-]/g, " ")
      .trim();
    const terms = normalized.split(/\s+/).filter(Boolean);

    const normalizeText = (text: string) =>
      text.toLocaleLowerCase().replace(/[_-]/g, " ");
    const matchesTerms = (text: string) => {
      const searchable = normalizeText(text);
      return terms.length > 0 && terms.every((term) => searchable.includes(term));
    };

    return foods
      .map((food) => {
        const matchingEffectValues = [
          ...(food.buffs ?? []).map((buff) => {
            const definition = Buffs[buff.id];
            const text = [definition?.name, definition?.tag, buff.id].filter(Boolean).join(" ");
            return matchesTerms(text) ? buff.value : null;
          }),
          ...(food.instantEffects ?? []).map((effect) => {
            const definition = Buffs[effect.id];
            const text = [definition?.name, effect.id].filter(Boolean).join(" ");
            return matchesTerms(text) ? effect.value : null;
          }),
          ...(food.wikiEffects ?? []).map((effect) => {
            const text = [effect.name, effect.id].join(" ");
            return matchesTerms(text) ? effect.value : null;
          }),
        ].filter((value): value is number => value !== null);
        const searchableText = [
          food.name,
          ...(food.ingredients ?? []),
          ...(food.buffs ?? []).flatMap((buff) => {
            const definition = Buffs[buff.id];
            return [definition?.name ?? buff.id, definition?.tag ?? "", buff.id, String(buff.value)];
          }),
          ...(food.instantEffects ?? []).flatMap((effect) => {
            const definition = Buffs[effect.id];
            return [definition?.name ?? effect.id, effect.id, String(effect.value)];
          }),
          ...(food.wikiEffects ?? []).flatMap((effect) => [effect.name, effect.id, String(effect.value ?? "")]),
        ].join(" ");
        const nameMatch = matchesTerms(food.name);
        const matches = terms.length === 0 || matchesTerms(searchableText);
        const matchingValue = matchingEffectValues.length > 0
          ? Math.max(...matchingEffectValues)
          : Number.NEGATIVE_INFINITY;
        return { food, matches, nameMatch, matchingValue };
      })
      .filter((result) => result.matches)
      .sort((left, right) =>
        Number(right.nameMatch) - Number(left.nameMatch) ||
        right.matchingValue - left.matchingValue ||
        left.food.name.localeCompare(right.food.name),
      )
      .map((result) => result.food);
  }, [query]);

  const isLimitReached = selectedFoods.length >= maxSlots;
  const isAlreadySelected = (id: string) =>
    selectedFoods.some((f) => f.id === id);

  return (
    <FieldGroup className="h-full min-h-0">
      <FieldSet className="h-full min-h-0">
        <div className="flex items-end justify-between gap-3 px-2">
          <div>
            <FieldLegend>{query.trim() ? "Search results" : "Foods"}</FieldLegend>
            <FieldDescription>Search food names, ingredients, or effects</FieldDescription>
          </div>
          <span className="shrink-0 pb-1 text-xs tabular-nums text-muted-foreground" aria-live="polite">
            {filteredFoods.length} {filteredFoods.length === 1 ? "food" : "foods"}
          </span>
        </div>

        <ScrollArea className="h-[calc(100svh-11rem)] min-h-80 p-2 sm:h-[calc(100svh-10rem)] lg:h-auto lg:min-h-0 lg:flex-1">
          {filteredFoods.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4">
              {filteredFoods.map((food) => {
                const alreadyAdded = isAlreadySelected(food.id);

                return (
                  <Field
                    key={food.id}
                    className="flex min-w-0 flex-col items-center gap-2"
                  >
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="relative h-auto aspect-square w-full overflow-hidden bg-muted p-2"
                          aria-label={`View buffs for ${food.name}`}
                        >
                          {food.image ? (
                            <img
                              src={food.image}
                              alt={food.name}
                              className="h-full w-full object-contain"
                            />
                          ) : (
                            <span className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
                              <Utensils aria-hidden="true" />
                            </span>
                          )}
                          {alreadyAdded && (
                            <Badge
                              variant="secondary"
                              className="absolute right-2 top-2"
                            >
                              <BadgeCheck className="h-4 w-4" />
                            </Badge>
                          )}
                        </Button>
                      </PopoverTrigger>

                      <PopoverContent className="w-full sm:w-56 md:w-64">
                        <h4 className="font-medium text-sm sm:text-base">
                          {food.name}
                        </h4>
                        <Separator className="my-2" />
                        <div className="mt-2 space-y-1 text-sm">
                          {food.buffs?.map((buff) => {
                            const buffMeta = Buffs[buff.id];
                            return (
                              <div
                                key={buff.id}
                                className="flex items-center justify-between"
                              >
                                <span>
                                  {buff.value > 0 ? "+" : ""}
                                  {buff.value}
                                  {buffMeta.buffUnit === "percent" && "%"}{" "}
                                  {buffMeta.name}
                                </span>

                              </div>
                            );
                          })}
                          {food.wikiEffects?.map((effect) => (
                            <div key={effect.id} className="flex items-center justify-between">
                              <span>
                                {effect.value !== null && effect.value > 0 ? "+" : ""}
                                {effect.value ?? ""}
                                {effect.unit === "percent" ? "% " : effect.value !== null ? " " : ""}
                                {effect.name}
                              </span>
                            </div>
                          ))}
                        </div>

                        <Button
                          variant="default"
                          disabled={alreadyAdded || isLimitReached}
                          onClick={() => {
                            onAddFood(food);
                          }}
                          className="mt-3 w-full"
                        >
                          {alreadyAdded
                            ? "Added"
                            : isLimitReached
                              ? "Slots Full"
                              : "Add to diet"}
                        </Button>
                      </PopoverContent>
                    </Popover>

                    <FieldLabel className="w-full wrap-break-word text-center text-xs leading-snug sm:text-sm">
                      {food.name}
                    </FieldLabel>
                  </Field>
                );
              })}
            </div>
          ) : (
            <div className="flex min-h-56 flex-col items-center justify-center gap-3 px-6 text-center">
              <div className="flex size-11 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <Utensils aria-hidden="true" />
              </div>
              <div>
                <p className="font-medium">No foods found</p>
                <p className="mt-1 text-sm text-muted-foreground">Try another food, ingredient, or buff.</p>
              </div>
            </div>
          )}
        </ScrollArea>
      </FieldSet>
    </FieldGroup>
  );
}
