import foods from "@/data/foods";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function FoodGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {foods.map((food) => (
        <Card key={food.name} className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>{food.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={food.image} />
            <ul>
              {food.instantEffects?.map((effect) => {
                return (
                  <li key={effect.id}>
                    {effect.id}:{effect.value}
                  </li>
                );
              })}
            </ul>

            <ul>
              {food.buffs?.map((buff) => {
                return (
                  <li key={buff.id}>
                    {buff.id}:{buff.value}
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
