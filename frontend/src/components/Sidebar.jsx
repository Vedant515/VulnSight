import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "New Scan", path: "/new-scan" },
    { name: "Scans", path: "/scans" },
    { name: "Vulnerabilities", path: "/vulnerabilities" },
    { name: "AI Analysis", path: "/ai-analysis" },
    { name: "Reports", path: "/reports" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">🛡️</div>

        <div>
          <h1>
            Vuln<span>Sight</span>
          </h1>
          <p>Scan · Detect · Secure</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <span>{getIcon(item.name)}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="shield">🛡️</div>
        <p>Find Vulnerabilities<br />Before Attackers Do.</p>

        <small>VulnSight v1.0.0</small>
        <small>Built for a Safer Tomorrow.</small>
      </div>
    </aside>
  );
}

function getIcon(name) {
  const icons = {
    Dashboard: "⌂",
    "New Scan": "▷",
    Scans: "☷",
    Vulnerabilities: "♢",
    "AI Analysis": "✦",
    Reports: "▤",
    Settings: "⚙",
  };

  return icons[name];
}

export default Sidebar;