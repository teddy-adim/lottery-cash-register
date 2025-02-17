import React from "react";

const Controls = ({ setSelectedNumbers, setMoney, selectedNumbers, money, setCashOut }) => {
  const handleClear = () => {
    setSelectedNumbers([]);
    setMoney(0);
    setCashOut(null);
  };

  const handleRandom = () => {
    const randomNumbers = [];
    while (randomNumbers.length < 5) {
      let num = Math.floor(Math.random() * 20) + 1;
      if (!randomNumbers.includes(num)) randomNumbers.push(num);
    }
    setSelectedNumbers(randomNumbers);
  };

  const handleCash = () => {
    if (selectedNumbers.length < 5) {
      setCashOut("You must select 5 numbers before cashing!");
      return;
    }
    setCashOut(`Ticket Purchased!\nNumbers: ${selectedNumbers.join(", ")}\nTotal: $${money}`);
  };

  
  return (
    <div className="controls">
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleRandom}>Random</button>
      <button onClick={handleCash}>Cash</button>
    </div>
  );
};

export default Controls;
