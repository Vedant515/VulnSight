const scans = [
  ["example.com", "Completed", "5", "Sep 11, 2026"],
  ["testsite.com", "Running", "2", "Sep 11, 2026"],
  ["192.168.1.1", "Completed", "12", "Sep 10, 2026"],
  ["demo.com", "Failed", "—", "Sep 10, 2026"],
  ["vulnweb.com", "Completed", "3", "Sep 09, 2026"],
];

function Scans() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>All Scans</h2>
          <p>View and manage your security scans.</p>
        </div>

        <button className="primary-btn">+ New Scan</button>
      </div>

      <div className="panel">
        <div className="toolbar">
          <input
            className="search-input"
            placeholder="Search scans..."
          />

          <button className="filter-btn">Filter ▾</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Target</th>
              <th>Status</th>
              <th>Vulnerabilities</th>
              <th>Started At</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {scans.map((scan, index) => (
              <tr key={index}>
                <td>{scan[0]}</td>

                <td>
                  <span className={`status ${scan[1].toLowerCase()}`}>
                    {scan[1]}
                  </span>
                </td>

                <td>{scan[2]}</td>
                <td>{scan[3]}</td>

                <td className="actions">
                  👁️ &nbsp; ↓ &nbsp; ⋮
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Scans;