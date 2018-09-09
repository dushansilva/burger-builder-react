import React from 'react';
import classes from './Burger.css';
import BurgerIngrediant from './BurgerIngrediant/BurgerIngrediant';
const bugrger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngrediant key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = 'please start adding ingrediends';
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngrediant type="bread-top" />
            {transformedIngredients}
            <BurgerIngrediant type="bread-bottom" />
        </div>
    );
};

export default bugrger;
