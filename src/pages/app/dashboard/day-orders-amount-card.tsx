import { Utensils } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDayOrdersAmount } from "@/api/get-day-orders-amount";
import { useQuery } from "@tanstack/react-query";
import { MetricCardSkeleton } from "./metric-card-skeleton";

export function DayOrdersAmountCard() {
  const { data } = useQuery({
    queryKey: ["metrics", "day-orders-amount"],
    queryFn: getDayOrdersAmount,
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {data ? (
          <>
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
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  );
}
