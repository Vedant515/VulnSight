function Navbar() {
  return (
    <header className="navbar">

      <div className="search-box">
        <span>⌕</span>
        <input
          type="text"
          placeholder="Search targets, scans or vulnerabilities..."
        />
        <kbd>Ctrl K</kbd>
      </div>

      <div className="navbar-right">

        <button className="notification">
          ♧
          <span></span>
        </button>

        <div className="profile">
          <div className="avatar">VP</div>

          <div>
            <strong>Vedant Patil</strong>
            <small>Security Enthusiast</small>
          </div>

          <span>⌄</span>
        </div>

      </div>

    </header>
  );
}

export default Navbar;