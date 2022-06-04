import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import AuthButtons from '../bottom/AuthButtons';
import CharacterImage from '../bottom/CharacterImage';
import MobileMenuContainer from '../bottom/MobileMenuContainer';
import ProfileButtons from '../bottom/ProfileButtons';
import ModeToggle from '../bottom/ModeToggle';

function Layout(props) {
    const { num } = useState(false);
    return (
        <>
            {/* <Header /> */}
            { props.children }
            <MobileMenuContainer />
            { num ? <AuthButtons /> : <><CharacterImage /><ProfileButtons /></> }
            <ModeToggle />
            <Outlet />
        </>
    );
}

export default Layout;