import React from 'react';
import styled from 'styled-components';
import logo from '../image/logo.svg';

const Wrap = styled.div`
display: flex;
position: relative;
align-items: center;
justify-content: center;
`;

const Logo = styled.img`
width: 40px;
height: 40px;
`;

const BrandName = styled.span`
font-size: 1em;
font-weight: 500;
margin-left: 10px;
color: white;

&:hover{
    color: #F6B973;
}
`;

const BrandAnchor = styled.a`
text-decoration: none;

&:hover{
    text-decoration: none;
}
`;

function Brand(props) {
    return(
        <Wrap>
            <BrandAnchor href="/">
                <Logo src={logo} />
                <BrandName>KOLO OCHUKO</BrandName>
            </BrandAnchor>
        </Wrap>
    );
}

export default Brand;