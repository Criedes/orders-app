import { Check, Info, Phone, X } from "lucide-react";
import { Order } from "@/types/order";
import { fmtDateTime, fmtNumber } from "@/utils/format";
import Pill from "./Pill";

export default function RowDetail({ order }: { order: Order }) {
    const warnings =
        order.warnings ?? [
            "To trade this security in this account, a currency conversion will be made at the current rate.",
            "A similar order has already been submitted.",
            "Your transaction will be processed the following business day.",
            "It is not possible to calculate the buying power of this order.",
            "A cancellation will not be possible during business hours on market orders. You can call a representative for more information.",
            "For the above-mentioned reason(s), your order will be processed by one of our representatives.",
        ];

    return (
        <div className="rounded-b-xl border-x border-b border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-wrap items-center gap-3 pb-3">
                <Pill>
                    FIRST-NAME LAST-NAME (<span className="font-semibold">10103ZA - US Margin</span>)
                </Pill>
                <Pill>
                    <span className="text-slate-500">Price:</span>{" "}
                    <span className="font-semibold">{fmtNumber.format(order.tradePrice ?? order.price)}</span>
                </Pill>
                <span className="ml-auto text-xs text-slate-500">Date / Time:</span>
                <span className="text-sm font-medium">{fmtDateTime(order.date)}</span>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
                <div className="rounded-lg border border-slate-200 bg-white p-3 text-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-slate-500">Net Amount</span>
                        <span className="font-semibold">{fmtNumber.format(order.netAmount ?? 0)}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                        <span className="text-slate-500">Reference Number</span>
                        <span className="font-mono">{order.referenceNumber ?? "-"}</span>
                    </div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-3 text-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-slate-500">Exchange Rate</span>
                        <span className="font-semibold">{order.exchangeRate?.toFixed(4) ?? "-"}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                        <span className="text-slate-500">O/S Limit</span>
                        <span className="font-semibold">{order.osLimit ?? "-"}</span>
                    </div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-3 text-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-slate-500">Telephone</span>
                        <span className="flex items-center gap-1 font-mono"><Phone className="h-3 w-3" /> {order.telephone ?? "-"}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                        <span className="text-slate-500">User ID</span>
                        <span className="font-mono">{order.userId ?? "-"}</span>
                    </div>
                </div>
                <div className="flex items-end justify-end gap-2">
                    {order.status === 'Waiting' && (
                        <>
                            <button className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-700">
                                <Check className="h-4 w-4" /> ACCEPT
                            </button>
                            <button className="inline-flex items-center gap-1 rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-red-700">
                                <X className="h-4 w-4" /> Reject
                            </button>
                        </>
                    )}
                </div>
            </div>

            <div className="mt-4 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm">
                <div className="mb-1 flex items-center gap-2 font-semibold text-amber-800">
                    <Info className="h-4 w-4" /> Warnings
                </div>
                <ul className="list-disc space-y-1 pl-6 text-amber-900">
                    {warnings.map((w, i) => (
                        <li key={i}>{w}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}