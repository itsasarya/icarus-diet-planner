export type BuffId =
  | "bacterial_afflictions_duration"
  | "c_to_temperature"
  | "chance_to_find_additional_stone"
  | "chance_to_resist_cave_sickness"
  | "charge_speed"
  | "crafting_speed"
  | "critical_damage"
  | "experience_gained"
  | "exposure_resistance"
  | "falling_resistance"
  | "food_consumption"
  | "food_effects_duration"
  | "health_regeneration"
  | "maximum_health"
  | "maximum_stamina"
  | "melee_attack_speed"
  | "melee_damage"
  | "movement_speed"
  | "over_encumbrance_penalty"
  | "oxygen_consumption"
  | "parasitic_afflictions_duration"
  | "projectile_damage"
  | "reload_speed"
  | "shared_experience_gained"
  | "stamina_consumed_by_actions"
  | "stamina_consumed_by_tool_actions"
  | "water_consumption"
  | "yield_from_butchering_animals"
  | "stamina_regeneration"
  | "water_effects_duration";

export type EffectId =
  | "food_when_consumed"
  | "health_when_consumed"
  | "stamina_when_consumed"
  | "water_when_consumed"
  | "oxygen_when_consumed"

export interface Buff {
  id: BuffId;
  value: number;
}

export interface InstantEffect {
  id: EffectId;
  value: number;
}

export type BuffUnit = "percent" | "flat";

export interface BuffDefinition {
  id: BuffId | EffectId;
  name: string;
  buffUnit: BuffUnit
}
