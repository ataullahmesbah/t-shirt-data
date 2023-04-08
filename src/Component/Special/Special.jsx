import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const angti = useContext(RingContext);
    return (
        <div>
            <h4>Special</h4>
            <p><small>Ring: {angti}</small></p>
        </div>
    );
};

export default Special;