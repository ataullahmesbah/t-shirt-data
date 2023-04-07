import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirts from '../Tshirts/Tshirts';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([])

    const handleAddToCart = tshirt =>{
        console.log(tshirt);
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
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;