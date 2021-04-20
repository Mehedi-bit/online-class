import React from 'react';
import './Product.css'

const Product = (props) => {
    const handleAddProduct = props.handleAddProduct;

    const course = props.course;

    return (
        <div className="product">
            <h3>{course.name}</h3>
            <p><small>Instructor: {course.instructor}</small></p>
            <h4 className="price">{course.price}$</h4>
            <button onClick={()=>handleAddProduct(props.course)}>Enroll Now</button>
        </div>
    );
};

export default Product;