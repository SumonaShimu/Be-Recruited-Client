import React from 'react';

const Category = ({data}) => {
    const {logo,available,name}=data;
    return (
        <div className='bg-orange-100 rounded-xl p-5'>
            <img className='mx-auto' src={logo} alt="" />
            <h3 className='font-bold'>{name}</h3>
            <p className='mute'>{available}+ Jobs Available</p>
        </div>
    );
};

export default Category;