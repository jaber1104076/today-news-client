import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummery from '../../Shared/NewsSummery/NewsSummery';

const Home = () => {
    const allNews = useLoaderData()
    return (
        <div>
            <h3>This home page for All news : {allNews.length}</h3>
            {
                allNews.map(news => <NewsSummery
                    key={news._id}
                    news={news}
                ></NewsSummery>)
            }
        </div>
    );
};

export default Home;