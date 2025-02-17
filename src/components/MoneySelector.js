import React from "react";

const MoneySelector = ({ money, setMoney, selectedNumbers }) => {
  const moneyOptions = [1, 5, 10, 20];

  const addMoney = (amount) => {
    if (selectedNumbers.length < 5) {
      alert("You must select 5 numbers first!");
      return;
    }
    setMoney(money + amount);
  };

  return (
    <div className="money-selector">
      <h2>Assign Money</h2>
      {moneyOptions.map((amount) => (
        <button key={amount} onClick={() => addMoney(amount)}>
          +${amount}
        </button>
      ))}
      <h3>Total Money: ${money}</h3>
    </div>
  );
};

export default MoneySelector;
