import {
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-search">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search targets, scans or vulnerabilities..."
        />

        <kbd>Ctrl K</kbd>
      </div>

      <div className="navbar-right">

        <button className="notification-btn">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        <div className="profile">

          <div className="avatar">
            VP
          </div>

          <div className="profile-info">
            <strong>Vedant Patil</strong>
            <small>Security Enthusiast</small>
          </div>

          <ChevronDown size={17} />

        </div>

      </div>

    </header>
  );
}

export default Navbar;