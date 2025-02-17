import React, { useState } from "react";
import NumberSelector from "./components/NumberSelector";
import MoneySelector from "./components/MoneySelector";
import SelectedNumbers from "./components/SelectedNumbers";
import Controls from "./components/Controls";

import "./App.css";

function App() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [money, setMoney] = useState(0);
  const [cashOut, setCashOut] = useState(null);

  return (
    <div className="app">
      <div className="main-content">
        <h1>Lottery Cash Register</h1>
        <NumberSelector selectedNumbers={selectedNumbers} setSelectedNumbers={setSelectedNumbers} />
        <MoneySelector money={money} setMoney={setMoney} selectedNumbers={selectedNumbers} />
        <Controls 
          setSelectedNumbers={setSelectedNumbers} 
          setMoney={setMoney} 
          selectedNumbers={selectedNumbers} 
          money={money} 
          setCashOut={setCashOut} 
        />
      </div>
      <SelectedNumbers selectedNumbers={selectedNumbers} money={money} />
      {cashOut && <div className="cash-output">{cashOut}</div>}
    </div>
  );
}
  
export default App;
