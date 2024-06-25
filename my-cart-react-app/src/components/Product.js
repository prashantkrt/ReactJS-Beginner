import React from "react";
import { useState } from "react";

export default function Product(props) {  
  return (
    <div className="row mt-4">
      <div className="col-6">
        <h2>
          {props.product.productName}
          <span className="badge text-bg-secondary">₹{props.product.price}</span>
        </h2>
      </div>
      <div className="col-2">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary" onClick={()=>{props.decrementQuantity(props.index)}}>
            -
          </button>
          <button type="button" className="btn btn-primary">
            {props.product.quantity}
          </button>
          <button type="button" className="btn btn-primary" onClick={()=>{props.incrementQuantity(props.index)}}>
            +
          </button>
        </div>
      </div>
      <div className="col-1">
        {props.product.price*props.product.quantity}
      </div>
     <div className="col-3">    
     <button type="button" className="btn btn-danger" onClick={()=>{props.removeItem(props.index)}}>Delete</button>
     </div>
    </div>
  );
}
