import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirts from '../Tshirts/Tshirts';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([])

    const handleAddToCart = tshirt =>{
        const exists = cart.find(ts => ts._id === tshirt._id);
        if(exists){
            toast('You have already added this T-Shirt');
        }
        else{
            const newCart = [...cart, tshirt];
             setCart(newCart);
        }
        
    }

    const handleRemoveCart = id =>{
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }
    return (
        <div className='home-container'>
            <div className="t-shirts-container">
            {
               tShirts.map(tshirt => <Tshirts
               key={tshirt._id}
               tshirt={tshirt}
               handleAddToCart={handleAddToCart}
               ></Tshirts>)
            }
            </div>
            <div className="cart-container">
                <Cart 
                handleRemoveCart={handleRemoveCart}
                cart={cart}>

                </Cart>
            </div>
        </div>
    );
};

export default Home;