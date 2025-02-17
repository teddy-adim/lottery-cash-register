import React from "react";

const NumberSelector = ({ selectedNumbers, setSelectedNumbers }) => {
  const handleNumberClick = (number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((num) => num !== number));
    } else if (selectedNumbers.length < 5) {
      setSelectedNumbers([...selectedNumbers, number]);
    } else {
      alert("You can only select 5 numbers.");
    }
  };

  return (
    <div className="number-selector">
      <h2>Select 5 Numbers</h2>
      <div className="numbers-grid">
        {[...Array(20).keys()].map((num) => {
          const number = num + 1;
          return (
            <button
              key={number}
              className={selectedNumbers.includes(number) ? "selected" : ""}
              onClick={() => handleNumberClick(number)}
            >
              {number}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default NumberSelector;
