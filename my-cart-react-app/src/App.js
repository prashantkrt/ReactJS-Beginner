import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  const productList = [
    {
      price: 9999,
      productName: "Samsung Smart watch",
      quantity: 0,
    },
    {
      price: 2312,
      productName: "Boat Smart watch",
      quantity: 0,
    },
    {
      price: 2200,
      productName: "Micromax Smart watch",
      quantity: 0,
    },
  ];

  return (
    <>
      <Navbar/>
      <ProductList productList={productList}/>
      <Footer />
    </>
  );
}

export default App;
