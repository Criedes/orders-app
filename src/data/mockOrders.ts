import { Order } from "@/types/order";
import { ORDER_STATUSES } from "@/types/status";

function randomChoice<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export const MOCK_ORDERS: Order[] = Array.from({ length: 20 }, (_, i) => {
  const date = new Date(2024, 0, 1 + i * 5, 9); // start Jan 2024, every 5 days
  const expiration = new Date(date);
  expiration.setDate(expiration.getDate() + 1);

  return {
    id: String(i + 1),
    orderNo: `${i + 1}`.padStart(10, "0"),
    account: `100000${i.toString().padStart(2, "0")}`,
    operation: Math.random() > 0.5 ? "Buy" : "Sell",
    symbol: ["AAPL", "TSLA", "GOOGL", "MSFT", "AMZN"][i % 5],
    description: ["Apple Inc.", "Tesla Inc.", "Alphabet Inc.", "Microsoft", "Amazon"][i % 5],
    qty: Math.floor(Math.random() * 200) + 1,
    filledQty: Math.floor(Math.random() * 50),
    price: Math.round(Math.random() * 3000) / 100,
    status: randomChoice([...ORDER_STATUSES]), // 👈 pick from full status list
    date: date.toISOString(),
    expiration: expiration.toISOString(),
    noRef: String(10000000 + i),
    extRef: `2-XXXXXXX-${i}-0`,
  };
});
