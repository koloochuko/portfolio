import React, { useEffect, useContext } from 'react';
import { NavContext } from './navbarContext';
import styled from 'styled-components';
import hamburger from '../image/hamburger.svg';
import close from '../image/close.svg';

const Wrapper = styled.div`
position: relative;
border-radius: 3px;
padding: 0px;
width: 40px;
height: 28px;
display: none;

&:hover{
    box-shadow: 1px 1px 5px 5px rgba(256, 256, 256, 0.25);
}

@media (max-width: 768px){
    display: block;
}
`;

const BurgerImage = styled.img`
width: 40px;
cursor: pointer;

@media (max-width: 768px){
    display: ${props => props.display ? "block" : "none"};
}
`;

const CloseImage = styled.img`
width: 40px;
cursor: pointer;

@media (max-width: 768px){
    display: ${props => props.display ? "block" : "none"};
}
`;

function Hamburger(props) {
    const {displayBurger, setDisplayBurger, displayClose, setDisplayClose, updateDisplay} = useContext(NavContext);

    function handleBurgerClick(){
        setDisplayBurger(!displayBurger);
        setDisplayClose(true);
    }

    function handleCloseClick(){
        setDisplayBurger(true);
        setDisplayClose(false);

    }

    useEffect(() => {
        function updateDisplayOnResize() {
            updateDisplay();
        }
        window.addEventListener("resize", updateDisplayOnResize);

        return(() => window.removeEventListener("resize", updateDisplayOnResize));
    });

    return(
        <Wrapper>
            <BurgerImage src={hamburger} alt="hamburger icon" onClick={handleBurgerClick} display={displayBurger}/>
            <CloseImage src={close} alt="close icon" onClick={handleCloseClick} display={displayClose}/>
        </Wrapper>
    );
}

export default Hamburger;