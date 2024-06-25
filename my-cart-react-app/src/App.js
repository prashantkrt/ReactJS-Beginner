import "./App.css";
import React, { Component, useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

function App() {
  let products = [
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
    {
      price: 22000,
      productName: "Apple Smart watch",
      quantity: 0,
    },
    {
      price: 2500,
      productName: "Noise Smart watch",
      quantity: 0,
    },
    {
      price: 200,
      productName: "Refurbuised Smart watch",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount , setTotalAmount]=useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;   
    let newTotalAmount = totalAmount;
    newTotalAmount+=newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    let q = newProductList[index].quantity;    
    q > 0 ? newProductList[index].quantity-- : newProductList[index].quantity=0;
    newTotalAmount = (newTotalAmount < newProductList[index].price) ? newTotalAmount=0 : newTotalAmount-newProductList[index].price;    
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const reset=()=>{
    let newProductlist =[...productList];
    newProductlist.map((product)=>{
      product.quantity=0;
    })
    setProductList(newProductlist);
    setTotalAmount(0);
  }

  const removeItem =(index)=>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount-=newProductList[index].price * newProductList[index].quantity; 
    setTotalAmount(newTotalAmount); 
    newProductList.splice(index,1);
    setProductList(newProductList); 
  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem></AddItem>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}         
        />
      </main>
      <Footer  totalAmount={totalAmount} reset={reset}/>
    </>
  );
}

export default App;
