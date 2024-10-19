import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Events from './pages/Events';
import Apply from './pages/Apply';
import ApplyDomains from './pages/ApplyDomains';
import DomainSelection from './pages/domain-selection';
import ApplyNow from './components/ApplyNow';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/domain-selection" element={<DomainSelection />} />
        <Route
          path="*"
          element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/apply" element={<Apply />} />
                  <Route path="/apply-domains" element={<ApplyDomains />} />
                </Routes>
              </main>
              <Footer />
              <ApplyNow />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
