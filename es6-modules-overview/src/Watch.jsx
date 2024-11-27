import React from 'react';

const Watch = ({watch}) => {
    const {name, price} = watch;
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>price: {price}</p>
        </div>
    );
};

export default Watch;