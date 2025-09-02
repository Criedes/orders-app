import { Order } from "@/types/order";
import { MOCK_ORDERS } from "@/data/mockOrders";
import { OrderStatus } from "@/types/status";

export type SearchParams = {
  from?: string;
  to?: string;
  period?: "Transmission";
  status?: OrderStatus;
};

export async function searchOrders(params: SearchParams): Promise<Order[]> {
  const { from, to, status } = params;

  const start = from ? new Date(from + "T00:00:00Z").getTime() : -Infinity;
  const end = to ? new Date(to + "T23:59:59Z").getTime() : Infinity;

  await new Promise((r) => setTimeout(r, 150));

  return MOCK_ORDERS.filter((o) => {
    const t = new Date(o.date).getTime();
    const inRange = t >= start && t <= end;
    const matchesStatus = status ? o.status === status : true;
    return inRange && matchesStatus;
  });
}
