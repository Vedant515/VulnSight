import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import NewScan from "./pages/NewScan";
import Scans from "./pages/Scans";
import Vulnerabilities from "./pages/Vulnerabilities";
import AIAnalysis from "./pages/AIAnalysis";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Sidebar />

        <div className="main-area">

          <Navbar />

          <main className="page-content">

            <Routes>

              <Route path="/" element={<Dashboard />} />

              <Route path="/new-scan" element={<NewScan />} />

              <Route path="/scans" element={<Scans />} />

              <Route
                path="/vulnerabilities"
                element={<Vulnerabilities />}
              />

              <Route
                path="/ai-analysis"
                element={<AIAnalysis />}
              />

              <Route path="/reports" element={<Reports />} />

              <Route path="/settings" element={<Settings />} />

            </Routes>

          </main>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;