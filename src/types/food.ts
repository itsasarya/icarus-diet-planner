import type { Buff } from "@/types/buff";
import type { InstantEffect } from "@/types/buff";
import type { station } from "@/types/station";

export interface Food {
  id: string;
  name: string;
  stomachCost: 1 | 0;
  durationSec?: number;
  buffs?: Buff[];
  instantEffects?: InstantEffect[];
  image: string;
  craftedAt?: station[];
  ingredients?: string[]
}
