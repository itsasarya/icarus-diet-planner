import { Buffs } from "@/data/buffs";
import { Switch } from "@/components/ui/switch";
import React from "react";
import type { BuffId, EffectId } from "@/types/buff";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "./ui/separator";

type Props = {
  activeFilter: Set<BuffId | EffectId>;
  onFilterChange: React.Dispatch<React.SetStateAction<Set<BuffId | EffectId>>>;
};

export default function BuffFilter({ activeFilter, onFilterChange }: Props) {
  return (
    <div>
      Buff Filters
      <Separator />
      <ScrollArea className="h-dvh">
        {Object.values(Buffs).map((buff) => (
          <div key={buff.id} className="flex items-center justify-between m-2">
            <FieldGroup>
              <Field orientation="horizontal">
                <Switch
                  name={buff.id}
                  checked={activeFilter.has(buff.id)}
                  onCheckedChange={(checked) => {
                    onFilterChange((prev) => {
                      const next = new Set(prev);
                      checked ? next.add(buff.id) : next.delete(buff.id);
                      return next;
                    });
                  }}
                />
                <FieldLabel htmlFor={buff.id}>{buff.name}</FieldLabel>
              </Field>
            </FieldGroup>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
