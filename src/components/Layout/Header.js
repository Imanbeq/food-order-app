import React from 'react';

import mealsImg from './../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = () => {
  return (
    <>
      <header>
        <h1 className={classes.header}>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt='table With Food' />
      </div>
    </>
  );
};

export default Header;
