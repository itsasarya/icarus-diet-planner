import { Buffs } from "@/data/buffs";
import { Switch } from "@/components/ui/switch";
import type { BuffId, EffectId } from "@/types/buff";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSearch } from "@/context/search-context";
import { useMemo } from "react";

type Props = {
  activeFilter: Set<BuffId | EffectId>;
  onFilterChange: (id: BuffId | EffectId) => void;
};

export default function BuffFilter({ activeFilter, onFilterChange }: Props) {
  const { query } = useSearch();

  const filteredBuffs = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    if (!normalized) return Object.values(Buffs);

    return Object.values(Buffs).filter((buff) =>
      buff.name.toLowerCase().includes(query),
    );
  }, [query]);

  return (
    <FieldGroup>
      <FieldSet>
        <FieldLegend>Buff Filter</FieldLegend>
        <FieldDescription>
          Toggle buffs to filter available food items
        </FieldDescription>

        <ScrollArea className="h-[40vh] sm:h-[70vh] pr-2">
          {filteredBuffs.map((buff) => {
            const isChecked = activeFilter.has(buff.id);

            return (
              <Field
                key={buff.id}
                orientation="horizontal"
                className="flex items-center justify-between px-2 py-1"
              >
                <FieldLabel htmlFor={buff.id} className="cursor-pointer">
                  {buff.name}
                </FieldLabel>

                <Switch
                  id={buff.id}
                  checked={isChecked}
                  onCheckedChange={() => {
                    onFilterChange(buff.id);
                  }}
                />
              </Field>
            );
          })}
        </ScrollArea>
      </FieldSet>
    </FieldGroup>
  );
}
