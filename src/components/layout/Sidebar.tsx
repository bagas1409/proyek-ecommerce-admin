import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Store,
  ShoppingCart,
  AlertTriangle,
  FileText,
  ShieldCheck,
  Layers,
  Wallet,
} from "lucide-react";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/users", label: "Users", icon: Users },
  { to: "/categories", label: "Categories", icon: Layers },
  { to: "/umkm/verification", label: "UMKM Verification", icon: Store },
  { to: "/orders", label: "Orders", icon: ShoppingCart },
  { to: "/withdrawals", label: "Withdrawals", icon: Wallet },
  { to: "/disputes", label: "Disputes", icon: AlertTriangle },
  { to: "/audit-logs", label: "Audit Log", icon: FileText },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[var(--card-bg)] border-r border-[var(--border)] shadow-sm flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-[var(--border)]">
        <ShieldCheck className="w-8 h-8 text-[var(--primary)]" />
        <span className="ml-3 text-xl font-bold text-[var(--text)]">
          E-Mit Pekon <span className="text-[var(--primary)]">Admin</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 overflow-y-auto">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive
                    ? "bg-[var(--primary)] text-white"
                    : "text-[var(--text-muted)] hover:bg-[var(--background)] hover:text-[var(--text)]"
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[var(--border)]">
        <p className="text-xs text-[var(--text-muted)] text-center">
          E-Mit Pekon Admin v1.0
        </p>
      </div>
    </aside>
  );
}
