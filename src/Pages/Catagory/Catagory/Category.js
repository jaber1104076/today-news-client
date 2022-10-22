import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummery from '../../Shared/NewsSummery/NewsSummery';

const Category = () => {
    const categoryNews = useLoaderData()
    return (
        <div>
            <h2>There are the number of news : {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsSummery
                    key={news._id}
                    news={news}
                ></NewsSummery>)
            }
        </div>
    );
};

export default Category;