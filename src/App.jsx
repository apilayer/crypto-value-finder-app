import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NewsCard from "./NewsCard";
import Hero from "./Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      {/* <NewsCard /> */}
    </>
  );
}

export default App;