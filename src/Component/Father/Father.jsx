import React from 'react';
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';

const Father = ({ring}) => {
    return (
        <div>
            <h3>Father</h3>
            <section className='flex'>
                <MySelf ring={ring}></MySelf>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Father;