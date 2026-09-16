function Settings() {
  return (
    <div className="page">

      <div className="page-header">
        <div>
          <h2>Settings</h2>
          <p>Manage your VulnSight preferences and settings.</p>
        </div>
      </div>

      <div className="settings-tabs">
        <button className="tab active">General</button>
        <button className="tab">Scan Settings</button>
        <button className="tab">Report Settings</button>
        <button className="tab">Appearance</button>
      </div>

      <div className="settings-grid">

        <div className="panel">
          <h3>Profile</h3>

          <div className="profile-big">
            <div className="big-avatar">VP</div>

            <div>
              <strong>Vedant Patil</strong>
              <p>Security Enthusiast</p>
            </div>
          </div>

          <label>Name</label>
          <input
            className="setting-input"
            value="Vedant Patil"
            readOnly
          />

          <label>Email</label>
          <input
            className="setting-input"
            value="vedant@example.com"
            readOnly
          />

          <label>Role</label>
          <input
            className="setting-input"
            value="Security Enthusiast"
            readOnly
          />

          <button className="primary-btn">
            Update Profile
          </button>
        </div>

        <div className="panel">
          <h3>Application Settings</h3>

          <div className="setting-row">
            <div>
              <strong>Default Scan Type</strong>
              <p>Choose your default scan configuration.</p>
            </div>

            <select>
              <option>Basic Scan</option>
              <option>Full Scan</option>
              <option>Custom Scan</option>
            </select>
          </div>

          <div className="setting-row">
            <div>
              <strong>Save Reports Automatically</strong>
              <p>Automatically save scan reports.</p>
            </div>

            <input type="checkbox" defaultChecked />
          </div>

          <div className="setting-row">
            <div>
              <strong>Email Notifications</strong>
              <p>Receive notifications about completed scans.</p>
            </div>

            <input type="checkbox" />
          </div>

          <div className="setting-row">
            <div>
              <strong>Dark Mode</strong>
              <p>Use the dark cybersecurity interface.</p>
            </div>

            <input type="checkbox" defaultChecked />
          </div>

          <button className="primary-btn">
            Save Changes
          </button>
        </div>

      </div>

    </div>
  );
}

export default Settings;