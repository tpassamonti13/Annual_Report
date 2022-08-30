import React from 'react';
import Menu from './components/Menu';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import LetterShareholders from './components/pages/LetterShareholders';
import FinancialHighlights from './components/pages/FinancialHighlights';
import Achieving from './components/pages/Achieving';
import ExpertiseTechnology from './components/pages/ExpertiseTechnology';
import NationalSecurity from './components/pages/NationalSecurity';
import UK from './components/pages/UK';
import BoardOfDirectors from './components/pages/BoardOfDirectors';
import AdditionalInformation from './components/pages/AdditionalInformation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

AOS.init();

function App() {
  return (
    <>
    <Router>
      <Menu />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path="letterToOurShareholders" element={<LetterShareholders />} />
          <Route path="financialHighlights" element={<FinancialHighlights />} />
          <Route path="investingAndInnovatingForTheFuture" element={<Achieving />} />
          <Route path="expertiseTechnology" element={<ExpertiseTechnology />} />
          <Route path="positioningForTheFuture" element={<NationalSecurity />} />
          <Route path="ukSummary" element={<UK />} />
          <Route path="boardOfDirectors" element={<BoardOfDirectors />} />
          <Route path="additionalInformation" element={<AdditionalInformation />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
