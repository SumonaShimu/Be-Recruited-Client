import React from 'react';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList'
import FeatureJob from '../FeatureJob/FeatureJob'
import { useLoaderData } from 'react-router-dom';
const Body = () => {
    const jobs=useLoaderData();
    return (
        <div >
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeatureJob jobs={jobs}></FeatureJob>
        </div>
    );
};

export default Body;