"use client";

import React from "react";
import { Loader2 } from "lucide-react";

export interface DashboardTableColumn<T> {
  header: string;
  accessorKey?: keyof T;
  render?: (row: T, index: number) => React.ReactNode;
  align?: "left" | "center" | "right";
  width?: string;
  className?: string;
}

export interface DashboardTableProps<T> {
  columns: DashboardTableColumn<T>[];
  data: T[];
  keyField?: keyof T;
  isLoading?: boolean;
  emptyMessage?: string;
  onRowClick?: (row: T) => void;
  className?: string;
}

export default function DashboardTable<T extends Record<string, any>>({
  columns,
  data,
  keyField = "id",
  isLoading = false,
  emptyMessage = "No records found.",
  onRowClick,
  className = "",
}: DashboardTableProps<T>) {
  return (
    <div
      className={`w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs ${className}`}
    >
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
              {columns.map((col, cIdx) => {
                const alignClass =
                  col.align === "right"
                    ? "text-right"
                    : col.align === "center"
                    ? "text-center"
                    : "text-left";

                return (
                  <th
                    key={cIdx}
                    scope="col"
                    style={{ width: col.width }}
                    className={`px-5 py-3.5 ${alignClass} ${col.className || ""}`}
                  >
                    {col.header}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
            {isLoading ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="py-12 text-center text-slate-500"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin text-[#C69234]" />
                    <span>Loading data...</span>
                  </div>
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="py-12 text-center text-slate-400 text-xs font-normal"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row, rIdx) => {
                const key =
                  keyField && row[keyField] !== undefined
                    ? String(row[keyField])
                    : rIdx;

                return (
                  <tr
                    key={key}
                    onClick={() => onRowClick && onRowClick(row)}
                    className={`transition-colors ${
                      onRowClick
                        ? "cursor-pointer hover:bg-amber-50/30"
                        : "hover:bg-slate-50/60"
                    }`}
                  >
                    {columns.map((col, cIdx) => {
                      const alignClass =
                        col.align === "right"
                          ? "text-right"
                          : col.align === "center"
                          ? "text-center"
                          : "text-left";

                      return (
                        <td
                          key={cIdx}
                          className={`px-5 py-4 ${alignClass} ${col.className || ""}`}
                        >
                          {col.render
                            ? col.render(row, rIdx)
                            : col.accessorKey
                            ? String(row[col.accessorKey] ?? "")
                            : null}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
