import React from 'react';
import add from "../../public/Home/Equipment/add.png";
import Image from 'next/image';

const Add = () => {
    return (
        <div className='mx-auto container'>
            <Image src={add} alt="img" />            
        </div>
    );
};

export default Add;