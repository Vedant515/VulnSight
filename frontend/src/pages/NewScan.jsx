import { useState } from "react";

function NewScan() {
  const [target, setTarget] = useState("");
  const [scanType, setScanType] = useState("basic");

  const handleScan = (e) => {
    e.preventDefault();

    if (!target) {
      alert("Please enter a target");
      return;
    }

    alert(`Scan started for ${target}`);
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>Start a New Scan</h2>
          <p>Enter a target and configure your scan options.</p>
        </div>
      </div>

      <form className="scan-form" onSubmit={handleScan}>
        <div className="panel">
          <h3>Target</h3>

          <input
            className="large-input"
            type="text"
            placeholder="Enter domain, IP or URL..."
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />

          <h3>Scan Type</h3>

          <div className="scan-types">
            <button
              type="button"
              className={scanType === "basic" ? "scan-type selected" : "scan-type"}
              onClick={() => setScanType("basic")}
            >
              <strong>Basic Scan</strong>
              <span>Quick scan for common vulnerabilities</span>
            </button>

            <button
              type="button"
              className={scanType === "full" ? "scan-type selected" : "scan-type"}
              onClick={() => setScanType("full")}
            >
              <strong>Full Scan</strong>
              <span>Deep security assessment</span>
            </button>

            <button
              type="button"
              className={scanType === "custom" ? "scan-type selected" : "scan-type"}
              onClick={() => setScanType("custom")}
            >
              <strong>Custom Scan</strong>
              <span>Choose specific tests</span>
            </button>
          </div>

          <h3>Scan Options</h3>

          <div className="checkbox-grid">
            <label><input type="checkbox" /> Port Scanning</label>
            <label><input type="checkbox" /> Service Detection</label>
            <label><input type="checkbox" /> Vulnerability Scan</label>
            <label><input type="checkbox" /> OS Detection</label>
            <label><input type="checkbox" /> Web Application Tests</label>
            <label><input type="checkbox" defaultChecked /> Save Report Automatically</label>
          </div>

          <button className="primary-btn start-btn">
            Start Scan →
          </button>
        </div>

        <div className="panel scan-info">
          <h3>What will be scanned?</h3>

          <p>✓ Open ports and services</p>
          <p>✓ Known vulnerabilities</p>
          <p>✓ Web application security</p>
          <p>✓ Misconfigurations</p>
          <p>✓ Security headers</p>

          <div className="info-box">
            ⚠️ Only scan systems you own or have permission to test.
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewScan;