import React, { useReducer } from "react";
import axios from "axios";

export const pizzaContext = React.createContext();

const INIT_STATE = {
  pizzas: [],
  onePizza: null,
};

const API = "http://localhost:8000/pizzas";

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PIZZAS":
      console.log(action.payload);

      return {
        ...state,
        pizzas: action.payload.data,
      };
    default:
      return state;
  }
};

const PizzaContextProvider = ({ children }) => {
  // Dispatch is a function passes a certain state or action to our reducer
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getPizzas() {
    let result = await axios(API);
    dispatch({
      type: "GET_PIZZAS",
      payload: result,
    });
  }

  async function addPizza(newPizza) {
    await axios.post(API, newPizza);
    getPizzas();
  }

  async function deletePizza(id) {
    await axios.delete(`${API}/${id}`);
    getPizzas();
  }
};

export default PizzaContextProvider;
