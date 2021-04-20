import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, course) => total + course.price, 0)
    return (
        <div className="cart">
            <h4>Total Courses: {cart.length}</h4>
            <h3>Total cost: {totalPrice.toFixed(2)}$</h3>
        </div>
    );
};

export default Cart;