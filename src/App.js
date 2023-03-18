import React from "react";
import "./App.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { CartProvider } from "react-use-cart";
function App() {
  return (
    <div className="App" style={{ background: "#ecedee" }}>
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
