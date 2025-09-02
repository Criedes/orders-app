import { useCallback, useEffect, useState } from 'react';
import { Order } from '@/types/order';
import { searchOrders } from '@/services/ordersService';
import { OrderStatus, ORDER_STATUSES } from '@/types/status';

export default function useOrdersSearch() {
  const [from, setFrom] = useState("2024-01-01");
  const [to, setTo] = useState("2025-01-31");
  const [status, setStatus] = useState<OrderStatus>(ORDER_STATUSES[0]);

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);

  const search = useCallback(async () => {
    setLoading(true);
    const res = await searchOrders({ from, to, period: "Transmission", status });
    setOrders(res);
    setLoading(false);
  }, [from, to, status]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await searchOrders({ from, to, period: "Transmission", status });
      setOrders(res);
      setLoading(false);
    })();
  }, []);

  return { from, to, status, setFrom, setTo, setStatus, orders, loading, search };
}
