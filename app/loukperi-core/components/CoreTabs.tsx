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
                ? "bg-[#0B1F3A] text-white shadow-[0_12px_30px_rgba(11,31,58,0.18)]"
                : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900",
            ].join(" ")}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}