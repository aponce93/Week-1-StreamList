import React, { useState } from "react";

function StreamList() {
  const [input, setInput] = useState(""); // State to store user input

  // Handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("User Input:", input); // Log the input to the console
    setInput(""); // Clear the input field after submission
  };

  return (
    <div>
      <h1>Welcome to StreamList</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter something:
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type here..."
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StreamList;
