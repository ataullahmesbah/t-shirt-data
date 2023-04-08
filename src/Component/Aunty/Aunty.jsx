import React from 'react';
import Cousin from '../Father/Cousin/Cousin';

const Aunty = () => {
    return (
        <div>
            <h3>Anty</h3>
            <section className='flex'>
                <Cousin>Abir</Cousin>
                <Cousin hasFriend={true}>Nibir</Cousin>
            </section>
        </div>
    );
};

export default Aunty;