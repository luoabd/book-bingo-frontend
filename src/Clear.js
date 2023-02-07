import React from "react";

function Clear({ stateChanger, defaultBoard }) {
  const handleButton = () => {
    localStorage.clear();
    stateChanger(defaultBoard);
    // window.location.reload()
  };

  return (
    <button
      className="bg-coolor-2 text-black font-bold py-2 px-4 rounded mx-4"
      onClick={handleButton}
    >
      Clear the board
      <div className="flex justify-center"></div>
    </button>
  );
}

export default Clear;
