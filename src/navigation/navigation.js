import React from 'react';
import styled from 'styled-components';
import NavContextProvider from './navbarContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Brand from './navbarBrand';
import Nav from './nav';
import Hamburger from './hamburger';
import ToggleMenu from './toggleMenu';

const NavbarWrap = styled.div`
position: fixed;
display: flex;
align-items: center;
top: 0px;
left: 0px;
font-family: 'Roboto Slab', serif;
z-index: 4;
width: 100%;
background-color: rgba(71, 109, 134, 0.5);
flex-direction: column;
// box-shadow: 0px 0px 8px rgba(226, 217, 209, 0.5);
// clip-path: inset(0px 0px -8px 0px);
`;

const NavbarContainer = styled.div`
padding: 10px 0px;
display: flex;
justify-content: space-between;
align-items: center;
width: 80%;
margin-left: auto;
margin-right: auto;

@media (max-width: 547px){
    width: 100%;
    padding: 10px;

}
`;

function Navbar(props) {
    return(
        // Add a bg prop with a value of background color to the NavbarWrap
        // component. Otherwise, the Navbar will be transparent
        // <NavbarWrap bg="#ff0000">

        <NavContextProvider>
            <NavbarWrap>
                <NavbarContainer>
                    <Brand />
                    <Nav />
                    <Hamburger />
                </NavbarContainer>
                <ToggleMenu />
            </NavbarWrap>    
        </NavContextProvider>
    );
}

export default Navbar;