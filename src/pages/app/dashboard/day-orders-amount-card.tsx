import { Utensils } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDayOrdersAmount } from "@/api/get-day-orders-amount";
import { useQuery } from "@tanstack/react-query";

export function DayOrdersAmountCard() {
  const { data } = useQuery({
    queryKey: ["metrics", "day-orders-amount"],
    queryFn: getDayOrdersAmount,
  });

  if (!data) {
    return null;
  }

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">
          {data?.amount.toLocaleString("pt-BR")}
        </span>
        {data.diffFromYesterday > 0 ? (
          <p className="text-xs text-muted-foreground">
            <span className="text-emerald-500 dark:text-emerald-400">
              +{data?.diffFromYesterday}%
            </span>{" "}
            em relação a ontem
          </p>
        ) : (
          <p className="text-xs text-muted-foreground">
            <span className="text-rose-500 dark:text-rose-400">
              {data.diffFromYesterday}%
            </span>{" "}
            em relação a ontem
          </p>
        )}
      </CardContent>
    </Card>
  );
}
