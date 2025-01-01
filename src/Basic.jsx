import { useEffect, useState } from "react";
import "./App.css";

export default function Basic() {
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState("");
  const [user, setUser] = useState("");
  // State for the style (color)
  const [new_style, setStyle] = useState({
    color: "black",
    backgroundColor:"white"
  });

  // State to store the input value
  const [inputValue, setInputValue] = useState("");

  // State for the array of names
  const [arr, setArr] = useState([]);

  // Function to toggle the color on button click
  const handleClick = () => {
    if (new_style.color === "black") {
      setStyle({
        color: "blue",
        backgroundColor:"black",
        fontStyle:"italic"
      });
    } else {
      setStyle({
        color: "black",
      });
    }
  };

  // Function to handle input change and update the state

  const handleLogin = () => {
    for (const str of arr) {
      if (str == user) {
        alert("User already exists");
        setFlag(true);
      } else {
        alert("Try again");
        setFlag(false);
      }
    }
  };

  const handleit = (event) => {
    setInputValue(event.target.value);
  };

  const handleit2 = (event) => {
    setUser(event.target.value);
  };

  // Function to append the name to the array
  const handleAddName = () => {
    setArr((prevArr) => [...prevArr, inputValue]); // Add the input value to the array
    setInputValue(""); // Optionally clear the input field

    return <h1>Hello</h1>;
  };

  // Fetching data from the API when the component mounts
  useEffect(() => {
    const run = async () => {
      const url = "https://catfact.ninja/fact";
      const response = await fetch(url);
      const data = await response.json();
      setData(data.fact); // Set the fetched fact
    };

    run();
  }, []);

  return (
    <div style={new_style}>
      <h1>This is the basic page</h1>
      <p>The fact of the day: {data}</p>

      {/* Button to toggle dark mode */}
      <button onClick={handleClick}>Toggle Mode</button>

      {/* Input field */}
      <input
        placeholder="Enter something..."
        onChange={handleit}
        value={inputValue} // The input value is controlled by state
      />

      {/* Button to add name to array */}
      <button onClick={handleAddName}>Add Name</button>

      {/* Display the input value */}
      <p>You typed: {inputValue}</p>

      {/* Display the list of names */}
      <h3>Names List:</h3>
      <ul>
        {arr.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <div>
        <input
          placeholder="Enter something..."
          onChange={handleit2}
          // The input value is controlled by state
        />
        <button onClick={handleLogin}>Login</button>

        {flag ? <h1>Hello {user}</h1> : <h1>Bye</h1>}
        {arr.map((index, key) => {
          return <h1 key={key}>Hello</h1>;
        })}
      </div>
    </div>
  );
}
