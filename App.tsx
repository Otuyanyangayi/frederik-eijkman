
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Work from './pages/Work.tsx';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="max-w-3xl mx-auto px-6 pt-12 pb-24 md:pt-16 md:pb-32 flex justify-between items-baseline">
      <Link to="/" className="text-xl font-bold tracking-tight">Frederik Eijkman</Link>
      <div className="space-x-8 text-sm uppercase tracking-widest font-medium">
        <Link 
          to="/" 
          className={location.pathname === '/' ? 'text-black underline underline-offset-4' : 'text-muted hover:text-black'}
        >
          Home
        </Link>
        <Link 
          to="/work" 
          className={location.pathname === '/work' ? 'text-black underline underline-offset-4' : 'text-muted hover:text-black'}
        >
          Work
        </Link>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="max-w-3xl mx-auto px-6 py-24 mt-24 border-t border-gray-100">
      <div className="text-sm text-muted space-y-1">
        <p className="font-semibold text-black">Frederik Eijkman</p>
        <p>Senior Operator, Advisor & Board Member</p>
        <p>Mobile Money, Bank Agent & Cash-in / Cash-out Networks</p>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen selection:bg-blue-100">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
