import { DollarSign } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getMonthRevenue } from "@/api/get-month-revenue";
import { useQuery } from "@tanstack/react-query";

export function MonthRevenueCard() {
  const { data } = useQuery({
    queryKey: ["metrics", "month-revenue"],
    queryFn: getMonthRevenue,
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">
          {data?.diffFromLastMonth &&
            (data?.receipt / 1000).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
        </span>
        {data?.diffFromLastMonth && data?.diffFromLastMonth >= 0 ? (
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
