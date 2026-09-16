const reports = [
  ["example.com_scan_report", "example.com", "Sep 11, 2026", "PDF"],
  ["testsite.com_scan_report", "testsite.com", "Sep 11, 2026", "PDF"],
  ["192.168.1.1_scan_report", "192.168.1.1", "Sep 10, 2026", "PDF"],
  ["demo.com_scan_report", "demo.com", "Sep 10, 2026", "PDF"],
];

function Reports() {
  return (
    <div className="page">

      <div className="page-header">
        <div>
          <h2>Reports</h2>
          <p>View and download your security reports.</p>
        </div>

        <button className="primary-btn">
          Generate Report
        </button>
      </div>

      <div className="panel">

        <div className="toolbar">
          <input
            className="search-input"
            placeholder="Search reports..."
          />

          <select className="filter-btn">
            <option>All Scans</option>
            <option>example.com</option>
            <option>testsite.com</option>
          </select>
        </div>

        <table>
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Target</th>
              <th>Generated At</th>
              <th>Format</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((report, index) => (
              <tr key={index}>
                <td>📄 {report[0]}</td>
                <td>{report[1]}</td>
                <td>{report[2]}</td>
                <td>
                  <span className="pdf-badge">{report[3]}</span>
                </td>
                <td>↓ Download</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      <div className="report-banner">
        <div>
          <h3>Generate Professional Reports</h3>
          <p>
            Download detailed PDF reports containing scan results,
            vulnerabilities, AI analysis and remediation steps.
          </p>
        </div>

        <button className="primary-btn">
          Generate Report
        </button>
      </div>

    </div>
  );
}

export default Reports;