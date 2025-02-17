import React from "react";


const SelectedNumbers = ({ selectedNumbers,money }) => {

    const displayNumber = () =>{
        return selectedNumbers.length > 0 ? selectedNumbers.join(", ") : "None"
    }

  return (
    <div className="selected-numbers">
      <h2>Selected Numbers</h2>
          <ul>
            {selectedNumbers.length > 0 ? (
              selectedNumbers.map((num, index) => <li key={index}>Mark:{num}</li>)) : (
              <li>No numbers selected</li>
            )}
          </ul>
          <h2>Total Money: ${money}</h2>
    </div>
  );
};

export default SelectedNumbers;
