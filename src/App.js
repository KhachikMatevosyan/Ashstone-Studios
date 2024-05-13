import React from "react";
import { useEffect, useState } from "react";
import Main from "./pages/main/Main";
import BurgerMenu from "./components/burgerMenu/BurgerMenu";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cloud.codesupply.co/endpoint/react/data.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Main value={data} />
      <BurgerMenu />
    </div>
  );
}

export default App;
