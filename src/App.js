import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react"
import Searchbar from "./Searchbar"

function App() {
  const [productsState, setProductsState] = useState([])
  useEffect(()=> {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((ProductsArray) => {
      const newProductsState = ProductsArray.map((product) => {
        const {id, title, price, description, category, image} = product
        return { id, title, price, description, category, image}
      })
      setProductsState(newProductsState)
    })
  }, [])

  const hasProducts = productsState.length > 0;
  return (
    <div className="App">
      {hasProducts ? <Searchbar products={productsState} /> : "Loading..."}
    </div>
  );
}

export default App;
