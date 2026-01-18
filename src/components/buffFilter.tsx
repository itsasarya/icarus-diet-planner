import { Buffs } from "@/data/buffs";
import { Switch } from "./ui/switch";
import { useState } from "react";
import type { BuffId } from "@/types/buff";


const [activeBuffs, setActiveBuffs] = useState<Set<BuffId>>(new Set());

{
    Object.values(Buffs).map((buff) => (
        <div key={buff.id} className="flex items-center justify-between">
            <span>{buff.name}</span>
            <Switch
                checked={activeBuffs.has(buff.id)}
                onCheckedChange={(checked) => {
                    setActiveBuffs((prev) => {
                        const next = new Set(prev);
                        checked ? next.add(buff.id) : next.delete(buff.id);
                        return next;
                    });
                }}
            />
        </div>
    ))
}
