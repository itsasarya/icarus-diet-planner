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

type Props = {
  activeFilter: Set<BuffId | EffectId>;
  onFilterChange: (id: BuffId | EffectId) => void;
};

export default function BuffFilter({ activeFilter, onFilterChange }: Props) {

  return (
    <FieldGroup>
      <FieldSet>
        <FieldLegend>Buff Filter</FieldLegend>
        <FieldDescription>
          Toggle buffs to filter available food items
        </FieldDescription>

        <ScrollArea className="h-[40vh] sm:h-[70vh] pr-2">
          {Object.values(Buffs).map((buff) => {
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
