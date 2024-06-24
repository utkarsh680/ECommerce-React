import React from "react";
import { Provider } from "react-redux"; // Import Provider from react-redux
import Product from "./pages/Product";
import store from "./Redux/store";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./component/ProductDetails";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element ={<ProductDetails />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
