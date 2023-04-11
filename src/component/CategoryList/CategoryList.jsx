import React, { useEffect, useState } from 'react';
import Category from './Category';

const CategoryList = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('catagory.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className='text-center my-10'>
            <h1 className='title'>Job Category List</h1>
            <p className='mute'> Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='space grid md:grid-cols-4 sm:grid-cols-2 gap-4'>
               {categories.map(item=><Category data={item} key={item.id}></Category>)}
            </div>
        </div>
    );
};

export default CategoryList;