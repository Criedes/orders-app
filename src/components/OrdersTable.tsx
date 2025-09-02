import React, { useState } from 'react';
import { ChevronDown, ChevronRight, FileSearch, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Order } from '@/types/order';
import { fmtDateTime, fmtNumber } from '@/utils/format';
import RowDetail from './RowDetail';

export default function OrdersTable({ orders }: { orders: Order[] }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 text-sm text-slate-600">
        <div>
          <span className="font-semibold">Search results:</span> {orders.length}
        </div>
      </div>

      {/* Table wrapper with scroll */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-3 py-2 w-10"></th>
              <th className="px-3 py-2">Account</th>
              <th className="px-3 py-2">Operation</th>
              <th className="px-3 py-2">Symbol</th>
              <th className="px-3 py-2 hidden md:table-cell">Description</th>
              <th className="px-3 py-2 hidden md:table-cell">Qty.</th>
              <th className="px-3 py-2 hidden md:table-cell">Filled Qty</th>
              <th className="px-3 py-2 hidden md:table-cell">Price</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2 hidden md:table-cell">Date</th>
              <th className="px-3 py-2 hidden md:table-cell">Expiration</th>
              <th className="px-3 py-2 hidden md:table-cell">No. Ref.</th>
              <th className="px-3 py-2 hidden md:table-cell">Ext. Ref.</th>
              <th className="px-3 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 text-sm">
            {orders.length === 0 ? (
              <tr>
                <td colSpan={14} className="h-[200px] text-center align-middle">
                  <div className="flex h-full flex-col items-center justify-center gap-3 text-slate-500">
                    <FileSearch className="h-12 w-12 text-slate-400" />
                    <span className="text-lg font-semibold">No orders found</span>
                    <span className="text-sm text-slate-400">
                      Try adjusting your filter criteria
                    </span>
                  </div>
                </td>
              </tr>
            ) : (
              orders.map((o) => {
                const isOpen = expanded === o.id;
                return (
                  <React.Fragment key={o.id}>
                    <tr className="hover:bg-slate-50">
                      <td className="px-3 py-2">
                        <button
                          className="rounded-full border border-slate-300 p-1"
                          onClick={() => setExpanded(isOpen ? null : o.id)}
                          aria-label={isOpen ? 'Collapse' : 'Expand'}
                        >
                          {isOpen ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </button>
                      </td>
                      <td className="px-3 py-2 font-medium whitespace-nowrap">{o.account}</td>
                      <td className="px-3 py-2 whitespace-nowrap">{o.operation}</td>
                      <td className="px-3 py-2 whitespace-nowrap">{o.symbol}</td>
                      <td className="px-3 py-2 hidden md:table-cell">{o.description}</td>
                      <td className="px-3 py-2 hidden md:table-cell">{fmtNumber.format(o.qty)}</td>
                      <td className="px-3 py-2 hidden md:table-cell">{fmtNumber.format(o.filledQty)}</td>
                      <td className="px-3 py-2 hidden md:table-cell">{fmtNumber.format(o.price)}</td>
                      <td className="px-3 py-2">
                        <span
                          className={
                            'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ' +
                            (o.status === 'Completed'
                              ? 'bg-emerald-100 text-emerald-800'
                              : o.status === 'Rejected'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-blue-100 text-blue-800') // Waiting default
                          }
                        >
                          {o.status === 'Completed' && <CheckCircle className="h-4 w-4" />}
                          {o.status === 'Rejected' && <XCircle className="h-4 w-4" />}
                          {o.status === 'Waiting' && <Clock className="h-4 w-4" />}
                          <span>{o.status}</span>
                        </span>
                      </td>
                      <td className="px-3 py-2 hidden md:table-cell">{fmtDateTime(o.date)}</td>
                      <td className="px-3 py-2 hidden md:table-cell">{fmtDateTime(o.expiration)}</td>
                      <td className="px-3 py-2 hidden md:table-cell">{o.noRef}</td>
                      <td className="px-3 py-2 hidden md:table-cell">{o.extRef}</td>
                      <td className="px-3 py-2 text-right">
                        <button className="rounded-full border border-slate-300 px-2 py-1 text-xs">
                          •••
                        </button>
                      </td>
                    </tr>
                    {isOpen && (
                      <tr>
                        <td colSpan={14} className="p-0">
                          <RowDetail order={o} />
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
