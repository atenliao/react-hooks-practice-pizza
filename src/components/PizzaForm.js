import React, { useEffect, useState } from "react";


function PizzaForm({oldpizza, updatePizza}) {
  const [newPizza, setNewPizza] = useState({...oldpizza})
  useEffect(()=>{
    setNewPizza(oldpizza)   
  },[oldpizza])
  function handleChange(event){
    console.log(event.target.value)
    setNewPizza({...newPizza, 
      [event.target.name]:event.target.value,
    })
  }
  
  function handleSubmitForm(event){
    event.preventDefault()
    fetch(`http://localhost:3001/pizzas/${newPizza.id}`,{
      method:'PATCH',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(newPizza)
    })
    .then(res=>res.json())
    .then(pizza=>updatePizza(pizza))

  }
  
  return (
    <form onSubmit={handleSubmitForm /*handle that submit*/}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            value={newPizza.topping}
            onChange={handleChange}
            placeholder="Pizza Topping"
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" 
          value={newPizza.size} 
          onChange={handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={newPizza.vegetarian==='Vegetarian'}
              onChange={handleChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={newPizza.vegetarian!=='Vegetarian'}
              onChange={handleChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
