import React, { useState } from 'react';
import courseData from '../../data/courses.json';
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import './Shop.css'

const Shop = () => {    //mother component/parent component

    const [cart, setCart] = useState([]);


    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    courseData.map(course => <Product 
                                                    key={course.id}
                                                    handleAddProduct={handleAddProduct}
                                                    course={course}>
                                                    </Product>)
                }
            </div>

            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shop;