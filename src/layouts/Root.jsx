import React from 'react';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='overflow-hidden roboto-font'>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;