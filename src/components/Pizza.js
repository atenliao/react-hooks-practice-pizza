import React from "react";

function Pizza({pizza, editPizza}) {
  
  const {topping, size, vegetarian} = pizza
  function handleEditPizza(){
    editPizza(pizza)
  }
  
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian=== 'Vegetarian'?"Yes":"No"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleEditPizza}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
