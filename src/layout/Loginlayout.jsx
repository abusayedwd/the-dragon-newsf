import React from 'react';
import NavigrationBar from '../pages/shared/NavigratonBar/NavigrationBar';
import { Outlet } from 'react-router-dom';

const Loginlayout = () => {
        return (
                <div>
                        <NavigrationBar></NavigrationBar>
                        <Outlet></Outlet>
                </div>
        );
};

export default Loginlayout;