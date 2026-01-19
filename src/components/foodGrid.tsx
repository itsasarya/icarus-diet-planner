import foods from "@/data/foods";
import { Buffs } from "@/data/buffs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "./ui/separator";

export default function FoodGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {foods.map((food) => (
        <Card key={food.name} className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>{food.name}</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent>
            <img src={food.image} />
            Stomach Cost: {food.stomachCost}
            <br />
            Duration: {food.durationSec}
            <Separator />
            <br />
            <ul>
              {food.instantEffects?.map((effect) => {
                return (
                  <li key={effect.id}>
                    {effect.value > 0 ? `+${effect.value}` : `${effect.value}`}{" "}
                    {Buffs[effect.id].name}
                  </li>
                );
              })}
            </ul>
            <br />
            <ul>
              {food.buffs?.map((buff) => {
                return (
                  <li key={buff.id}>
                    {buff.value > 0 ? `+${buff.value}` : `${buff.value}`}
                    {Buffs[buff.id].name}
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
