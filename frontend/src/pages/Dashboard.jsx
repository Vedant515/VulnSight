function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div>
          <h2>Good to see you, Vedant! 👋</h2>
          <p>Keep scanning. Keep securing.</p>
        </div>

        <button className="primary-btn">+ New Scan</button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span>Total Scans</span>
          <h3>24</h3>
          <small>↑ 20% from last month</small>
        </div>

        <div className="stat-card">
          <span>Total Vulnerabilities</span>
          <h3>18</h3>
          <small>↑ 12% from last month</small>
        </div>

        <div className="stat-card critical">
          <span>Critical</span>
          <h3>3</h3>
          <small>↑ 50%</small>
        </div>

        <div className="stat-card high">
          <span>High</span>
          <h3>5</h3>
          <small>↑ 25%</small>
        </div>

        <div className="stat-card resolved">
          <span>Resolved</span>
          <h3>10</h3>
          <small>↑ 40%</small>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="panel">
          <div className="panel-header">
            <h3>Vulnerability Distribution</h3>
          </div>

          <div className="distribution">
            <div className="donut">
              <strong>18</strong>
              <span>Total</span>
            </div>

            <div className="legend">
              <p>🔴 Critical <b>3</b></p>
              <p>🟠 High <b>5</b></p>
              <p>🟡 Medium <b>7</b></p>
              <p>🔵 Low <b>3</b></p>
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h3>Recent Scans</h3>
            <span>View All →</span>
          </div>

          <div className="scan-list">
            <div>
              <span>example.com</span>
              <b className="status completed">Completed</b>
              <small>5 vulnerabilities</small>
            </div>

            <div>
              <span>testsite.com</span>
              <b className="status running">Running</b>
              <small>2 vulnerabilities</small>
            </div>

            <div>
              <span>192.168.1.1</span>
              <b className="status completed">Completed</b>
              <small>12 vulnerabilities</small>
            </div>

            <div>
              <span>demo.com</span>
              <b className="status failed">Failed</b>
              <small>—</small>
            </div>
          </div>
        </div>
      </div>

      <div className="ai-banner">
        <div>
          <h3>🤖 AI Security Analysis</h3>
          <p>
            Let VulnSight AI analyze your latest scan and explain the
            security risks in simple language.
          </p>
        </div>

        <button className="primary-btn">Analyze Latest Scan →</button>
      </div>
    </div>
  );
}

export default Dashboard;