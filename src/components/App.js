import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkIsOn, darkSetOn] = useState(false);
  function handleDark() {
    darkSetOn((darkIsOn) => !darkIsOn)
  }

  const [addToCart, cartsetOn] = useState(false);
  function handleCart() {
    cartsetOn((addToCart) => !addToCart)
  } 
  
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = darkIsOn ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDark}>{darkIsOn ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
        
    </div>
  );
}

export default App;
