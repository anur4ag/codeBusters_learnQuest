import React, { useState } from "react";
import './App.css'

import ConnectWallet from './components/ConnectWallet'
import Dashboard from './components/Dashboard'
import GameHome1 from "./components/GameHome1";
import GameHome2 from "./components/GameHome2";
import GameHome3 from "./components/GameHome3";
import GameHome4 from "./components/GameHome4";
import GameHome5 from "./components/GameHome5";
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
          <Route path="/dashboard/game1" element={<GameHome1 />} />
          <Route path="/dashboard/game2" element={<GameHome2 />} />
          <Route path="/dashboard/game3" element={<GameHome3 />} />
          <Route path="/dashboard/game4" element={<GameHome4 />} />
          <Route path="/dashboard/game5" element={<GameHome5 />} />
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
