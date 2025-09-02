import { OrderStatus } from "./status";

export type Order = {
  id: string;
  orderNo: string;
  account: string;
  operation: "Buy" | "Sell";
  symbol: string;
  description: string;
  qty: number;
  filledQty: number;
  price: number;
  status: OrderStatus;
  date: string;
  expiration?: string;
  noRef?: string;
  extRef?: string;
  bank?: string;
  netAmount?: number;
  referenceNumber?: string;
  exchangeRate?: number;
  osLimit?: number;
  telephone?: string;
  userId?: string;
  tradePrice?: number;
  warnings?: string[];
};
