import React from 'react';
import './Tshirts.css'

const Tshirts = ({tshirt, handleAddToCart}) => {
    const {picture, name, price} = tshirt;

    return (
        <div className='tshirt-product'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>${price}</p>
            <button  onClick={()=> handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirts;