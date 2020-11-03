import React from 'react';
import styled from 'styled-components';

const Navwrap = styled.div`
display: flex;

@media (max-width: 768px){
    display: none;
}
`;

const NavListWrap = styled.ul`
display: flex;
margin: 0px;
padding: 0px;
align-items: center;
`;

const NavItem = styled.li`
list-style: none;
padding: 15px 10px;
`;

const NavAnchor = styled.a`
text-decoration: none;
color: white;
font-size: 0.8em;

&:hover{
    text-decoration: none;
    color: #F6B973;
}
`;

function Nav(props) {
    const navitems = [
        {id: "01", link: "#about", name: "About"},
        {id: "02", link: "#skills", name: "Skill Set"},
        {id: "03", link: "#projects", name: "Projects"},
        {id: "04", link: "#contact", name: "Contact"}
    ];

    return(
        <Navwrap>
            <NavListWrap>
                {navitems.map(item => <NavItem key={item.id}><NavAnchor href={item.link}>{item.name}</NavAnchor></NavItem>)}
            </NavListWrap>
        </Navwrap>
    );
}

export default Nav;