import React from 'react';
import Banner from './Banner';
import QueryCollection from './QueryCollection';
import TopQueries from './TopQueries';
import TopContriButors from './TopContriButors';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <div className='my-15'>
           <div className='glass-table'>
             <QueryCollection></QueryCollection>
           </div>

            <TopQueries></TopQueries>
           <div className='glass-banner '>
             <TopContriButors></TopContriButors>
           </div>
          </div>
        </div>
    );
};

export default Home;