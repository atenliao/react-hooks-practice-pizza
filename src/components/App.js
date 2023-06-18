import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [oldpizza, setoldpizza] = useState({
    topping:'',
    size:'',
    vegetarian:null,
  })
  useEffect(()=>{
    fetch("http://localhost:3001/pizzas")
    .then(res=>res.json())
    .then(pizza=>setPizzas(pizza))
  },[])


  function updatePizza(updatedPizza){
      setPizzas([...pizzas].map((pizza)=>{
        if(pizza.id === updatedPizza.id)
        {
          return updatedPizza
        }else{
          return pizza
        }
      }))
  }

  function editPizza(oldpizza){
    setoldpizza(oldpizza)
    
  }
// {/*oldPizza={pizza} updatePizza={updatePizza}*/}
  return (
    <>
      <Header />
      <PizzaForm  oldpizza={oldpizza} updatePizza={updatePizza}/>
      <PizzaList pizzas={pizzas} editPizza={editPizza}/>
    </>
  );
}

export default App;
