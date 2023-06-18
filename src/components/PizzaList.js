import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizzas, editPizza}) {
  // const [topping, size, vegetarian] = pizzas
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          pizzas.map((pizza)=> <Pizza key={pizza.id} pizza={pizza} editPizza={editPizza} />
          )
          //render Pizza here
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
