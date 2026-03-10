import React from "react";
import axios from "axios";

export const pizzaContext = React.createContext();

const INIT_STATE = {
  pizzas: [],
  onePizza: null,
};

const API = "http://localhost:8000/pizzas";

const PizzaContextProvider = ({ children }) => {
  //
};

export default PizzaContextProvider;
