import React from 'react';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList'
import FeatureJob from '../FeatureJob/FeatureJob'
const Body = () => {
    return (
        <div >
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeatureJob></FeatureJob>
        </div>
    );
};

export default Body;