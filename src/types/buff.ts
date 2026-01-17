export type BuffId =
| "bacterial_affliction_duration"
| "c_to_temperature"
| "chance_to_find_additional_stone"
| "chance_to_resist_cave_sickness"
| "charge_speed"
| "crafting_speed"
| "critical_damage"
| "experience_gained"
| "exposure_resistance"
| "falling_resistance"
| "food_consuption"
| "food_effects_duration"
| "health_regenration"
| "health_when_consumed"
| "maximum_health"
| "maximum_stamina"
| "melee_attack_speed"
| "melee_damage"
| "movement_speed"
| "over_encomberance_penality"
| "oxygen_consumption"
| "oxygen_when_consumed"
| "parasitic_afflictions_duration"
| "projectile_damage"
| "reload_speed"
| "shared_experience_gained"
| "stamina_consumed_by_actions"
| "stamina_consumed_by_tool_actions"
| "stamina_when_consumed"
| "water_consumption"
| "yield_from_butchering_animals"


export interface Buff{
    id: BuffId
    value: number
}

export interface instantEffect{
    id: BuffId
    value: number
}