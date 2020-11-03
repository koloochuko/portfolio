import React, { createContext, useState } from 'react';

export const NavContext = createContext();

function NavContextProvider(props) {
    let viewPort = window.innerWidth;

    const [displayClose, setDisplayClose] = useState(false);
    const [displayBurger, setDisplayBurger] = useState(() => {
        if (viewPort <= 768 && !displayClose) {
            return true;
        }else return false;
    });
    
    function updateDisplay() {
        viewPort = window.innerWidth;

        if (viewPort <= 768 && !displayBurger && !displayClose) {
            setDisplayBurger(true);
        }
    }

    return(
        <NavContext.Provider value={{displayBurger, setDisplayBurger, displayClose, setDisplayClose, updateDisplay}}>
            {props.children}
        </NavContext.Provider>
    );
}

export default NavContextProvider;