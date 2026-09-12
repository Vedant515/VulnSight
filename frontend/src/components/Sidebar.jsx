import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  PlaySquare,
  ScanLine,
  ShieldAlert,
  Sparkles,
  FileText,
  Settings,
  ShieldCheck,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "New Scan", path: "/new-scan", icon: PlaySquare },
  { name: "Scans", path: "/scans", icon: ScanLine },
  { name: "Vulnerabilities", path: "/vulnerabilities", icon: ShieldAlert },
  { name: "AI Analysis", path: "/ai-analysis", icon: Sparkles },
  { name: "Reports", path: "/reports", icon: FileText },
  { name: "Settings", path: "/settings", icon: Settings },
];

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="brand">
        <div className="brand-logo">
          <ShieldCheck size={30} />
        </div>

        <div>
          <h1>
            Vuln<span>Sight</span>
          </h1>
          <p>Scan · Detect · Secure</p>
        </div>
      </div>

      <nav className="sidebar-nav">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}

      </nav>

      <div className="sidebar-bottom">

        <div className="security-card">
          <ShieldCheck size={34} />

          <h4>Scan · Detect · Secure</h4>

          <p>
            Find vulnerabilities before attackers do.
          </p>

          <div className="security-line"></div>
        </div>

        <div className="version">
          <span>VulnSight v1.0.0</span>
          <small>Built for a Safer Tomorrow.</small>
        </div>

      </div>

    </aside>
  );
}

export default Sidebar;