import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ServicePage from './pages/ServicePage';

import WorkforceOperations from './pages/WorkforceOperations';
import TalentNetwork from './pages/TalentNetwork';
import WorkforceIntelligence from './pages/WorkforceIntelligence';
import Company from './pages/Company';
import Careers from './pages/Careers';
import Apply from './pages/Apply';
import ResourceRequest from './pages/ResourceRequest';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Compliance from './pages/Compliance';

import { useEffect } from 'react';
import { useLocation } from 'react-router';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions/:id" element={<ServicePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/workforce-operations" element={<WorkforceOperations />} />
          <Route path="/talent-network" element={<TalentNetwork />} />
          <Route path="/intelligence" element={<WorkforceIntelligence />} />
          <Route path="/company" element={<Company />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/resources/request" element={<ResourceRequest />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/compliance" element={<Compliance />} />
        </Routes>
      </Layout>
    </Router>
  );
}