import Link from "next/link";

interface DashboardCardProps {
  title: string;
  actionText?: string;
  actionHref?: string;
  onActionClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function DashboardCard({
  title,
  actionText,
  actionHref,
  onActionClick,
  children,
  className = "",
}: DashboardCardProps) {
  return (
    <div
      className={`w-full bg-white rounded-2xl border border-slate-200/80 p-6 shadow-2xs ${className}`}
    >
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <h2 className="text-base font-bold text-slate-900">{title}</h2>
        {actionText && (
          actionHref ? (
            <Link
              href={actionHref}
              className="text-xs font-bold text-[#C58B24] hover:text-[#A77218] transition cursor-pointer"
            >
              {actionText}
            </Link>
          ) : (
            <button
              type="button"
              onClick={onActionClick}
              className="text-xs font-bold text-[#C58B24] hover:text-[#A77218] transition cursor-pointer"
            >
              {actionText}
            </button>
          )
        )}
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
}
