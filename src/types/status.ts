export const ORDER_STATUSES = [
  "Waiting",
  "Completed",
  "Rejected"
] as const;

export type OrderStatus = (typeof ORDER_STATUSES)[number];
