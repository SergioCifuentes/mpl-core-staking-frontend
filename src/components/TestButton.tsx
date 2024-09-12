import { useState } from "react";

function TestButton() {
  const [response, setResponse] = useState("");  // State to store backend response

  const handleClick = async () => {
    try {
      const res = await fetch("http://localhost:4000/test"); // Adjust the URL to your backend
      const data = await res.json();
      setResponse(data);  // Update state with backend response
      alert(`Response: ${data}`);  // Display popup alert
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch data");
    }
  };

  return (
    <div>
      {/* Your existing JSX */}
      <button onClick={handleClick}>Click me to get the response</button>
      {/* Show the response from backend */}
      <p>{response}</p>
    </div>
  );
}

export default TestButton;