const vulnerabilities = [
  ["SQL Injection", "example.com", "Critical", "Open", "Sep 11, 2026"],
  ["Cross-Site Scripting (XSS)", "example.com", "High", "Open", "Sep 11, 2026"],
  ["Open Port (22)", "192.168.1.1", "Medium", "Open", "Sep 10, 2026"],
  ["Insecure Headers", "demo.com", "Medium", "Resolved", "Sep 10, 2026"],
  ["Directory Listing", "vulnweb.com", "Low", "Open", "Sep 09, 2026"],
  ["Outdated Software", "sampleapp.com", "High", "Open", "Sep 09, 2026"],
];

function Vulnerabilities() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>Vulnerabilities</h2>
          <p>View and analyze all detected vulnerabilities.</p>
        </div>
      </div>

      <div className="vulnerability-stats">
        <div>Critical <strong>3</strong></div>
        <div>High <strong>5</strong></div>
        <div>Medium <strong>7</strong></div>
        <div>Low <strong>3</strong></div>
      </div>

      <div className="panel">
        <div className="toolbar">
          <input
            className="search-input"
            placeholder="Search vulnerabilities..."
          />

          <button className="filter-btn">All Severities ▾</button>
          <button className="filter-btn">All Status ▾</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Vulnerability</th>
              <th>Target</th>
              <th>Severity</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {vulnerabilities.map((vuln, index) => (
              <tr key={index}>
                <td>{vuln[0]}</td>
                <td>{vuln[1]}</td>

                <td>
                  <span className={`severity ${vuln[2].toLowerCase()}`}>
                    {vuln[2]}
                  </span>
                </td>

                <td>
                  <span className={`status ${vuln[3].toLowerCase()}`}>
                    {vuln[3]}
                  </span>
                </td>

                <td>{vuln[4]}</td>
                <td>👁️</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Vulnerabilities;