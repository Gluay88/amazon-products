import React from "react";
import Product from "./Product";
import "./App.css";

function App() {
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
    </div>
  );
}

export default App;
