import { Buffs } from "@/data/buffs";
import { Switch } from "@/components/ui/switch";
import React, { useMemo, useState } from "react";
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
import { trackEvent } from "@/lib/analytics";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";

type Props = {
  activeFilter: Set<BuffId | EffectId>;
  onFilterChange: React.Dispatch<React.SetStateAction<Set<BuffId | EffectId>>>;
};

export default function BuffFilter({ activeFilter, onFilterChange }: Props) {
  const [search, setSearch] = useState("")

  const filteredBuffs = useMemo(() => {
  const q = search.toLowerCase().trim();

  if (!q) return Object.values(Buffs);

  return Object.values(Buffs).filter((buff) =>
    buff.name.toLowerCase().includes(q)
  );
}, [search]);

  return (
    <FieldGroup>
      <FieldSet>
        <FieldLegend>Buff Filter</FieldLegend>
        <FieldDescription>
          Toggle buffs to filter available food items
        </FieldDescription>
        <ButtonGroup>
          <Input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search buffs..." />
          <Button variant="outline" onClick={()=>setSearch("")}>Clear</Button>
        </ButtonGroup>

        <ScrollArea className="h-[40vh] sm:h-[70vh] pr-2">
          {Object.values(filteredBuffs).map((buff) => {
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
                    trackEvent(
                      `toggle-buff:${buff.id}:${checked ? "on" : "off"}`,
                    );
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
