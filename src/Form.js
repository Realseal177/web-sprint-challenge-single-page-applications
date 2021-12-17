import React from "react";

export default function PizzaForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props;

      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

      const onChange = evt => {
        console.log(evt.target.checked, evt.target.type);
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
      }


      return (
        <form className='form container' id='pizza-form' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Build Your Tarnal Pizza!</h2>

                <button id='order-button' disabled={disabled}>Add to order</button>

                <div className='errors'>
                    <div>{errors.custName}</div>
                </div>

                <div className='form-group inputs'>
                    <h4>Ingredients and stuff</h4>

                    <label>Your Name
                        <input
                            value={values.custName}
                            onChange={onChange}
                            name='custName'
                            type='text'
                            id='name-input'
                        />
                    </label>

                    <label>Size
                        <select
                            onChange={onChange}
                            value={values.size}
                            name='size'
                            id='size-dropdown'
                        >
                            <option value =''>Select a tarnal size!</option>
                            <option value='large'>Large</option>
                            <option value='massive'>Massive</option>
                            <option value='insane'>Insane</option>
                            <option value='glowing-alien'>*Enlightened glowing alien being*</option>
                        </select>
                    </label>

                    <div className='form-group checkboxes'>
                    <h4>Toppings</h4>

                        <label>Pepperoni
                            <input
                                type='checkbox'
                                name='pepperoni'
                                checked={values.pepperoni}
                                onChange={onChange}
                            />
                        </label>

                        <label>Sausage
                            <input
                                type='checkbox'
                                name='sausage'
                                checked={values.sausage}
                                onChange={onChange}
                            />
                        </label>

                        <label>Olives
                            <input
                                type='checkbox'
                                name='olives'
                                checked={values.olives}
                                onChange={onChange}
                            />
                        </label>

                        <label>Anchovies
                            <input
                                type='checkbox'
                                name='anchovies'
                                checked={values.anchovies}
                                onChange={onChange}
                            />
                        </label>

                        <label>Cheese
                            <input
                                type='checkbox'
                                name='cheese'
                                checked={values.cheese}
                                onChange={onChange}
                            />
                        </label>

                    </div>

                    <label>Special Instructions:
                        <input 
                            value={values.instructions}
                            onChange={onChange}
                            name='instructions'
                            type='text'
                            id='special-text'
                        />
                    </label>
                </div>

            </div>
        </form>
      )
}