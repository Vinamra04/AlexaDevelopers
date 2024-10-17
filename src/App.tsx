import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Events from './pages/Events';
import ApplyNow from './components/ApplyNow';
import ApplyDomains from './pages/ApplyDomains';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/events" element={<Events />} />
            <Route path="/apply/domains" element={<ApplyDomains />} />
          </Routes>
        </main>
        <Footer />
        <ApplyNow />
      </div>
    </Router>
  );
}

export default App;