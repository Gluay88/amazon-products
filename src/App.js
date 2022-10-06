import React, { useState, useEffect } from "react";
import Product from "./Product";
import "./App.css";

function App() {
  // useEffect stuff..
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // useState stuff..
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  // useEffect for the jsonplaceholder..
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  // useEffect for the windowInnerWidth..
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // addEventListener(type, listener, options)
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    //clean up whatever we did last time..
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <h1>Amazon Products</h1>
      <Product
        name="Google Home"
        description="Your AI assistant"
        price={59.99}
      />
      <Product
        name="iPhone 12 Pro max"
        description="The best iPhone"
        price={1200}
      />
      <Product
        name="Macbook Pro"
        description="Your favorite Computer"
        price={2500}
      />
      <br />
      <div>
        <h2>Counter app - useState</h2>
        <p>The count is: {count}</p>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      <br />
      <div>
        <h2>useEffect()</h2>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
        <div>ResourceType: {resourceType}</div>
        {items.map((item) => {
          return <pre key={item.index}>{JSON.stringify(item)}</pre>;
        })}
      </div>
      <br />
      <div>
        <h2>WindowInnerWidth - addEventListener</h2>
        {windowWidth}
      </div>
    </div>
  );
}

export default App;
