import React from 'react'
import Product from './Product'

export default function ProductList(props) {  
  console.log({props},"My ProductList Component");  
  return (    
      props.productList.map((product,index)=>{
            return <Product product={product} key={index}/>
      })      
  )
}


