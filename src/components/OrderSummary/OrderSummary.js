import React from 'react';
import Aux from '../../hoc/Aux';
import Button from '../UI/Button/Button';
const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igkeys => {
            return <li key={igkeys}><span style={{ textTransform: 'capitalize' }}>{igkeys}</span>: {props.ingredients[igkeys]}</li>;
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Burger with ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to checkout</p>
            <Button btnType={'Danger'} clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType={'Success'} clicked={props.purchasaContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;
