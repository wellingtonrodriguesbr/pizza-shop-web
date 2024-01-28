import { Helmet } from "react-helmet-async";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OrderTableRow } from "./order-table-row";
import { OrderTableFilters } from "./order-table-filters";
import { Pagination } from "@/components/pagination";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "@/api/get-orders";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

export function Orders() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get("page") ?? "1");

  const { data } = useQuery({
    queryKey: ["orders", pageIndex],
    queryFn: () => getOrders({ pageIndex }),
  });

  function handlePaginate(pageIndex: number) {
    setSearchParams((state) => {
      state.set("page", (pageIndex + 1).toString());

      return state;
    });
  }

  return (
    <>
      <Helmet title="Pedidos" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

        <div className="space-y-2.5">
          <OrderTableFilters />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead className="w-[180px]">Realizado há</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-[140px]">Total do pedido</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.orders
                  ? data.orders.map((item) => (
                      <OrderTableRow key={item.orderId} order={item} />
                    ))
                  : null}
              </TableBody>
            </Table>
          </div>

          {data ? (
            <Pagination
              onChangePage={handlePaginate}
              pageIndex={pageIndex}
              totalCount={data?.meta.totalCount}
              perPage={data?.meta.perPage}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
