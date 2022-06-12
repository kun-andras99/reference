import React from 'react'
import { Outlet } from 'react-router-dom';
import AuthButtons from '../bottom/AuthButtons';
import CharacterImage from '../bottom/CharacterImage';
import MobileMenuContainer from '../bottom/MobileMenuContainer';
import ProfileButtons from '../bottom/ProfileButtons';
import ModeToggle from '../bottom/ModeToggle';
import Footer from '../site/Footer';

function Layout(props) {
    let num = true;
    return (
        <>
            {/* <Header /> */}
            { props.children }
            <Outlet />
            <MobileMenuContainer />
            { num ? <AuthButtons /> : <><CharacterImage /><ProfileButtons /></> }
            <ModeToggle />
            <Footer />
        </>
    );
}

export default Layout;