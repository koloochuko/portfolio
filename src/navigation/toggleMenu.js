import React, { useContext } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { NavContext } from './navbarContext';

const Wrapper = styled(Container)`
position: relative;
display: none;

@media (max-width: 768px){
    display: ${props => !props.display ? "block" : "none"};
}
`;

const NavListWrap = styled.ul`
display: flex;
flex-direction: column;
align-items: flex-end;
`;

const NavItem = styled.li`
list-style: none;
padding: 5px;
border-top: solid 1px #999;
width: 100%;
text-align: right;
position: relative;

&:hover{
    background-color: rgba(82, 121, 147, 0.6);
}
`;

const NavAnchor = styled.a`
text-decoration: none;
color: #fff;
width: 100%;
display: block;
font-size: 0.8em;

&:hover{
    text-decoration: none;
    color: #F6B973;
}
`;

function ToggleMenu(props) {
    const {displayBurger} = useContext(NavContext);
    
    const navitems = [
        {id: "01", link: "#about", name: "About"},
        {id: "02", link: "#skills", name: "Skill Set"},
        {id: "03", link: "#projects", name: "Projects"},
        {id: "04", link: "#contact", name: "Contact"}
    ];

    return(
        <Wrapper display={displayBurger}>
            <NavListWrap>
                {navitems.map(item => <NavItem key={item.id}><NavAnchor href={item.link}>{item.name}</NavAnchor></NavItem>)}
            </NavListWrap>
        </Wrapper>
    );
}

export default ToggleMenu;