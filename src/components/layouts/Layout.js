import React from 'react'
import { Outlet } from 'react-router-dom';
import AuthButtons from '../bottom/AuthButtons';
import MobileMenuContainer from '../bottom/MobileMenuContainer';
import ModeToggle from '../bottom/ModeToggle';

function Layout(props) {
    return (
        <>
            {/* <Header /> */}
            { props.children }
            <MobileMenuContainer />
            <AuthButtons />
            <ModeToggle />
            <Outlet />
        </>
    );
}

export default Layout;