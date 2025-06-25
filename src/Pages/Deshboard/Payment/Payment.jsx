import React from 'react';
import { useParams } from 'react-router';

const Payment = () => {
    const {id}=useParams();
    return (
        <div>
            <h2>teka o teka</h2>
        </div>
    );
};

export default Payment;