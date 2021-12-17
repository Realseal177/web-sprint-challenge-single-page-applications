import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from 'react-router-dom';

import axios from "axios";
import * as yup from 'yup';

import PizzaForm from "./Form";
import Home from "./Home";
import schema from "./formSchema";

const initialFormValues = {
  custName: '', 
  size: '',
  pepperoni: false,
  sausage: false,
  olives: false,
  anchovies: false,
  cheese: false,
  instructions: '',
}

const initialFormErrors = {
  custName: '',
}
const initialDisabled = true;


const App = () => {
  const [pizza, setPizza] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewPizza = newPizza => {
    axios.post('https://reqres.in/api/orders', newPizza)
      .then(resp => {
        setPizza([resp.data, ...pizza]);
        console.log(resp.data);
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newPizza = {
      custName: formValues.custName.trim(),
      size: formValues.size.trim(),
      toppings: ['pepperoni', 'sausage', 'olives', 'anchovies', 'cheese'].filter(topping => !!formValues[topping]),
    }
    postNewPizza(newPizza);
  }



  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='App'>
      <nav>
        <h1 className='store-header'>Lambda Eats</h1>
        <h3>Stop messin' around and order a tarnal pizza!</h3>
        <div className='nav-links'>
          {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`/items-list`) */}
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Pizza?</Link>
        </div>
      </nav>
      
      <Switch>
        <Route path='/pizza'>
          <PizzaForm 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />

        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
