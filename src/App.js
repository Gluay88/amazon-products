import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from "./Product";
import { Index } from "./pages/Index";
import { About } from "./pages/About";
import "./App.css";
import { UserContext } from "./UserContext";

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

  // addEventListener(type, listener, op`tions)
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    //clean up whatever we did last time..
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // state for useContext
  const [user, setUser] = useState(null);
  // update when only value and setValue change only
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          {/* pass obj = state from up there */}
          {/* <UserContext.Provider value={{ value, setValue }}> */}
          <UserContext.Provider value={value}>
            <Routes>
              <Route path="/" exact element={<Index />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </UserContext.Provider>
        </div>
      </Router>
      {/* end Router */}
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
            return (
              <div key={item.id}>
                <pre>{JSON.stringify(item)}</pre>
              </div>
            );
          })}
        </div>
        <br />
        <div>
          <h2>WindowInnerWidth - addEventListener</h2>
          {windowWidth}
        </div>
      </div>
    </>
  );
}

export default App;
