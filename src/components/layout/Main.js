import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <nav>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;