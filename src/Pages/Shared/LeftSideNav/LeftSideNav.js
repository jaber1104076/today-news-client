import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [catagories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/news-category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2>All Categories {catagories.length}</h2>
            <div>
                {
                    catagories.map(category => <p key={category.id}>
                        <Link to={`/catagory/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>

    );
};

export default LeftSideNav;