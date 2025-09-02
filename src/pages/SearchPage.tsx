import SearchHeaderBar from "@/components/SearchHeaderBar";
import OrdersTable from "@/components/OrdersTable";
import useOrdersSearch from "@/hooks/useOrdersSearch";

export default function SearchPage() {
  const {
    from,
    to,
    status,
    setFrom,
    setTo,
    setStatus,
    orders,
    loading,
    search,
  } = useOrdersSearch();

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="mx-auto max-w-7xl space-y-4">

        <SearchHeaderBar
          from={from}
          to={to}
          status={status}
          setFrom={setFrom}
          setTo={setTo}
          setStatus={setStatus}
          onSearch={search}
        />

        {loading ? (
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-center text-sm text-slate-500">
            Loading…
          </div>
        ) : (
          <OrdersTable orders={orders} />
        )}
      </div>
    </div>
  );
}
