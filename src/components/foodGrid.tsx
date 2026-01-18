import foods from "@/data/foods";
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
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
