import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Leftnav.css'

const Letnav = () => {
        const [categories, setCategories] = useState([]);

        useEffect(() => {
                fetch('http://localhost:5000/categories')
                        .then(res => res.json())
                        .then(data => setCategories(data))
                        .catch(error => console.log(error))
        }, [])
        return (
                <div>
                        <h3>All Categories</h3>
                        <div className='p-3'>
                                {categories.map(category => <p key={category.id}>
                              
                < NavLink className="text-decoration-none text-dark"  
                        to={`/category/${category.id}`}>{category.name} 
         
               </ NavLink>
                                       
                                </p>)}
                        </div>

                </div>
        );
};

export default Letnav;