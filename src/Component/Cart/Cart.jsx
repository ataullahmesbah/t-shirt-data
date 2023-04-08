import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please added a some product</p>
    }
    else{
        message = <div>
            <h4>Hete Boroloxxxx</h4>
            <p><small>Thanks for giving some money</small></p>
        </div>
    }
    return (
        <div>
            <h3 className={cart.length === 1 ? 'blue' : 'red'}>Orders Summary: {cart.length}</h3>
            {cart.length > 2 ? <span>Aro Kino</span> : <span>fokiraa</span>}
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button  
                    onClick={()=> handleRemoveCart(tshirt._id)}>
                        Delete</button></p>)
            }

            {
                cart.length === 2 && <p>Double Kinoso nah!!!!!!!</p>
            }
            {
                cart.length === 3 || <h3>Avarage 3 tai lagbe!!</h3>
            }
        </div>
    );
};

export default Cart;