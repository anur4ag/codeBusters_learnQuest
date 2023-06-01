import React, { useState } from "react";
import './App.css'

import ConnectWallet from './components/ConnectWallet'
import Dashboard from './components/Dashboard'
import AboutSection from './components/AboutSection'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [account, setAccount] = useState({name:null});

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<ConnectWallet account={account} setAccount={setAccount} />} /> */}
          <Route path="/" element={<CombinedSection account={account} setAccount={setAccount}/>} />
          <Route path="/dashboard" element={<Dashboard account={account} />} />
        </Routes>
      </Router>
    </>
  );
}

// CombinedSection component to include both AboutSection and ConnectWallet
function CombinedSection({ account, setAccount }) {
  return (
    <>
      <ConnectWallet account={account} setAccount={setAccount} />
     
    </>
  );
}

export default App;
