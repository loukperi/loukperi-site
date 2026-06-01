import Link from "next/link";

const tabs = [
  { label: "Overview", href: "/loukperi-core" },
  { label: "Reports", href: "/loukperi-core/reports" },
  { label: "Bridge", href: "/loukperi-core/bridge" },
  { label: "Operations", href: "/loukperi-core/operations" },
];

export default function CoreTabs({ currentPath }: { currentPath: string }) {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {tabs.map((tab) => {
        const active = currentPath === tab.href;

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={[
              "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition",
              active
                ? "bg-[#3A8DFF] text-white shadow-[0_12px_30px_rgba(58,141,255,0.28)]"
                : "border border-white/12 bg-white/[0.03] text-slate-300 hover:bg-white/[0.06] hover:text-white",
            ].join(" ")}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}