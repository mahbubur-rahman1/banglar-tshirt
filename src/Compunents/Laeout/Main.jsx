import React from 'react';
import Heder from '../Heder/Heder';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Heder></Heder>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;