import { Buffs } from "@/data/buffs";
import { Switch } from "@/components/ui/switch";
import React from "react";
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
  onFilterChange: React.Dispatch<React.SetStateAction<Set<BuffId | EffectId>>>;
};

export default function BuffFilter({ activeFilter, onFilterChange }: Props) {
  return (
    <FieldGroup>
      <FieldSet>
        <FieldLegend>Buff Filter</FieldLegend>
        <FieldDescription>
          Toggle buffs to filter available food items
        </FieldDescription>

        <ScrollArea className="h-[70vh] pr-2">
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
                  onCheckedChange={(checked) => {
                    onFilterChange((prev) => {
                      const next = new Set(prev);
                      checked ? next.add(buff.id) : next.delete(buff.id);
                      return next;
                    });
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
