import { DollarSign } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getMonthCanceledOrdersAmount } from "@/api/get-month-canceled-orders-amount";

export function MonthCanceledOrdersAmountCard() {
  const { data } = useQuery({
    queryKey: ["metrics", "month-canceled-orders-amount"],
    queryFn: getMonthCanceledOrdersAmount,
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">
          {data?.amount.toLocaleString("pt-BR")}
        </span>
        {data?.diffFromLastMonth && data?.diffFromLastMonth < 0 ? (
          <p className="text-xs text-muted-foreground">
            <span className="text-emerald-500 dark:text-emerald-400">
              +{data?.diffFromLastMonth}%
            </span>{" "}
            em relação ao mês passado
          </p>
        ) : (
          <p className="text-xs text-muted-foreground">
            <span className="text-rose-500 dark:text-rose-400">
              {data?.diffFromLastMonth}%
            </span>{" "}
            em relação ao mês passado
          </p>
        )}
      </CardContent>
    </Card>
  );
}
