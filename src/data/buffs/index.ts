import type { BuffId, BuffDefinition, EffectId } from "@/types/buff";

export const Buffs: Record<BuffId | EffectId, BuffDefinition> = {
  bacterial_afflictions_duration: {
    id: "bacterial_afflictions_duration",
    name: "Bacterial afflictions duration",
    buffUnit: "flat",
  },
  c_to_temperature: {
    id: "c_to_temperature",
    name: "C to temperature",
    buffUnit: "flat",
  },
  chance_to_find_additional_stone: {
    id: "chance_to_find_additional_stone",
    name: "Chance to find additional stone while mining",
    buffUnit: "percent"
  },
  chance_to_resist_cave_sickness: {
    id: "chance_to_resist_cave_sickness",
    name: "Chance to resist cave sickness",
    buffUnit: 'percent',
  },
  charge_speed: {
    id: "charge_speed",
    name: "Charge speed",
    buffUnit: "percent",
  },
  crafting_speed: {
    id: "crafting_speed",
    name: "Crafting Speed",
    buffUnit: 'percent',
  },
  critical_damage: {
    id: "critical_damage",
    name: "Critical damage",
    buffUnit:"percent",
  },
  experience_gained: {
    id: "experience_gained",
    name: "Experience gained",
    buffUnit:"percent",
  },
  exposure_resistance: {
    id: "exposure_resistance",
    name: "Exposure resistance",
    buffUnit: "percent",
  },
  falling_resistance: {
    id: "falling_resistance",
    name: "Falling resitstance",
    buffUnit: "percent",
  },
  food_consumption: {
    id: "food_consumption",
    name: "Food consumption",
    buffUnit: "percent",
  },
  food_effects_duration: {
    id: "food_effects_duration",
    name: "Food effects duration",
    buffUnit: "percent",
  },
  health_regeneration: {
    id: "health_regeneration",
    name: "Health regeneration",
    buffUnit: "percent",
  },
  health_when_consumed: {
    id: "health_when_consumed",
    name: "Health when consumed",
    buffUnit: "flat",
  },
  maximum_health: {
    id: "maximum_health",
    name: " Maximum health",
    buffUnit: "flat",
  },
  maximum_stamina: {
    id: "maximum_stamina",
    name: " Maximum stamina",
    buffUnit: "flat",
  },
  melee_attack_speed: {
    id: "melee_attack_speed",
    name: "Melee attack speed",
    buffUnit: "percent",
  },
  melee_damage: {
    id: "melee_damage",
    name: "Melee damage",
    buffUnit: "percent",
  },
  movement_speed: {
    id: "movement_speed",
    name: "Movement speed",
    buffUnit: "percent",
  },
  over_encumbrance_penalty: {
    id: "over_encumbrance_penalty",
    name: "Over-encumbrance penalty",
    buffUnit: "percent",
  },
  oxygen_consumption: {
    id: "oxygen_consumption",
    name: "Oxygen Consumption",
    buffUnit: "percent",
  },
  oxygen_when_consumed: {
    id: "oxygen_when_consumed",
    name: "Oxygen when consumed",
    buffUnit: "flat"
  },
  parasitic_afflictions_duration: {
    id: "parasitic_afflictions_duration",
    name: "Parasitic afflictions duration",
    buffUnit: "percent",
  },
  projectile_damage: {
    id: "projectile_damage",
    name: "Projectile damage",
    buffUnit: "percent",
  },
  reload_speed: {
    id: "reload_speed",
    name: "Reload speed",
    buffUnit: "percent",
  },
  shared_experience_gained: {
    id: "shared_experience_gained",
    name: "Shared experience gained",
    buffUnit: "percent",
  },
  stamina_consumed_by_actions: {
    id: "stamina_consumed_by_actions",
    name: "Stamina consumed by actions",
    buffUnit: "percent",
  },
  stamina_consumed_by_tool_actions: {
    id: "stamina_consumed_by_tool_actions",
    name: "Stamina consumed by tool actions",
    buffUnit: "percent",
  },
  stamina_when_consumed: {
    id: "stamina_when_consumed",
    name: "Stamina when consumed",
    buffUnit: "percent",
  },
  water_consumption: {
    id: "water_consumption",
    name: "Water consumption",
    buffUnit: "percent",
  },
  yield_from_butchering_animals: {
    id: "yield_from_butchering_animals",
    name: "Yield from butchering animals",
    buffUnit: "percent",
  },
  water_when_consumed: {
    id: "water_when_consumed",
    name: "Water when consumed",
    buffUnit: "flat",
  },
  food_when_consumed: {
    id: "food_when_consumed",
    name: "Food when consumed",
    buffUnit:"flat"
  },
  stamina_regeneration: {
    id: "stamina_regeneration",
    name: "Stamina regeneration",
    buffUnit: "percent",
  },
  water_effects_duration: {
    id: "water_effects_duration",
    name: "Water effects duration",
    buffUnit: "percent",
  },
};
