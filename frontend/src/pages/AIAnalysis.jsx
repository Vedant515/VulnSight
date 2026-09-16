function AIAnalysis() {
  return (
    <div className="page ai-page">

      <div className="page-header">
        <div>
          <h2>🤖 AI Security Analysis</h2>
          <p>
            AI-powered security insights for your scanned target.
          </p>
        </div>

        <div className="analysis-controls">
          <select>
            <option>example.com</option>
            <option>testsite.com</option>
            <option>192.168.1.1</option>
          </select>

          <button className="primary-btn">
            Analyze Again
          </button>
        </div>
      </div>

      <div className="target-card">
        <div>
          <span>Analyzing Target</span>
          <h2>example.com</h2>
          <p>Last Scan: Sep 11, 2026 · Scan #24</p>
        </div>

        <div className="security-score">
          <span>Security Score</span>
          <strong>62</strong>
          <small>/ 100</small>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span>Total Vulnerabilities</span>
          <h3>18</h3>
        </div>

        <div className="stat-card critical">
          <span>Critical</span>
          <h3>3</h3>
        </div>

        <div className="stat-card high">
          <span>High</span>
          <h3>5</h3>
        </div>

        <div className="stat-card">
          <span>Medium</span>
          <h3>7</h3>
        </div>

        <div className="stat-card">
          <span>Low</span>
          <h3>3</h3>
        </div>
      </div>

      <div className="ai-grid">

        <div className="panel ai-summary">
          <h3>✨ AI Executive Summary</h3>

          <p>
            The target has several security vulnerabilities that should
            be addressed. The most serious issues are related to SQL
            Injection and authentication weaknesses.
          </p>

          <div className="key-takeaway">
            <strong>💡 Key Takeaway</strong>

            <p>
              Fix the critical vulnerabilities first. Improving input
              validation, authentication and security headers will
              significantly improve the security posture.
            </p>
          </div>
        </div>

        <div className="panel">
          <h3>⚠️ Top Security Issues</h3>

          <div className="issue">
            <strong>1. SQL Injection</strong>
            <span className="severity critical">Critical</span>
            <p>Potential database access and data manipulation.</p>
          </div>

          <div className="issue">
            <strong>2. Broken Authentication</strong>
            <span className="severity critical">Critical</span>
            <p>Weak authentication mechanisms detected.</p>
          </div>

          <div className="issue">
            <strong>3. Cross-Site Scripting</strong>
            <span className="severity high">High</span>
            <p>User input may not be properly sanitized.</p>
          </div>
        </div>

      </div>

      <div className="panel">
        <h3>🔍 What Did We Find?</h3>

        <p>
          Our scan identified vulnerabilities, open ports,
          configuration issues and missing security controls.
          The AI analyzed these findings and identified the
          highest-priority risks for this target.
        </p>
      </div>

      <div className="panel recommendations">
        <h3>🛠️ AI Recommendations</h3>

        <div className="recommendation">
          <strong>Priority 1 — Critical</strong>
          <p>
            Fix SQL Injection using parameterized queries and
            proper input validation.
          </p>
        </div>

        <div className="recommendation">
          <strong>Priority 2 — High</strong>
          <p>
            Improve authentication controls and enforce secure
            session management.
          </p>
        </div>

        <div className="recommendation">
          <strong>Priority 3 — Medium</strong>
          <p>
            Configure missing security headers such as CSP and HSTS.
          </p>
        </div>
      </div>

    </div>
  );
}

export default AIAnalysis;