import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Newscard from '../Home/newsCart/Newscard';

const Category = () => {
        const {id} = useParams();
        const categoryNews = useLoaderData();
         
        return (
                <div>
                      {id &&  <h3>this is a category : {categoryNews.length}</h3>}
                     {
                        categoryNews.map(news => <Newscard
                                 key={news._id}
                                news={news}
                        >

                        </Newscard>)
                     }
                </div>
        );
};

export default Category;