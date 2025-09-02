import { Search } from "lucide-react";
import { ORDER_STATUSES, OrderStatus } from "@/types/status";

type Props = {
  title?: string;
  from: string;
  to: string;
  status: OrderStatus;
  setFrom: (v: string) => void;
  setTo: (v: string) => void;
  setStatus: (s: OrderStatus) => void;
  onSearch: () => void;
};

export default function SearchHeaderBar({
  title = "Search",
  from,
  to,
  status,
  setFrom,
  setTo,
  setStatus,
  onSearch,
}: Props) {
  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left: Page title */}
        <h1 className="text-base font-semibold text-slate-800">{title}</h1>

        {/* Right: Filters + Search */}
        <div className="flex flex-wrap items-end gap-3">
          {/* Period (fixed) */}
          <div className="flex flex-col">
            <label className="text-[11px] leading-3 text-slate-500">Period</label>
            <select className="mt-1 w-40 rounded-md border px-3 py-2 text-sm" disabled>
              <option>Transmission</option>
            </select>
          </div>

          {/* Status */}
          <div className="flex flex-col">
            <label className="text-[11px] leading-3 text-slate-500">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as OrderStatus)}
              className="mt-1 w-40 rounded-md border px-3 py-2 text-sm"
            >
              {ORDER_STATUSES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* From / To */}
          <div className="flex flex-col">
            <label className="text-[11px] leading-3 text-slate-500">From</label>
            <input
              type="date"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="mt-1 w-44 rounded-md border px-3 py-2 text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[11px] leading-3 text-slate-500">To</label>
            <input
              type="date"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="mt-1 w-44 rounded-md border px-3 py-2 text-sm"
            />
          </div>

          {/* Search button */}
          <button
            onClick={onSearch}
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700"
          >
            <Search className="h-4 w-4" /> Search
          </button>
        </div>
      </div>
    </div>
  );
}
