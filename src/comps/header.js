import React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import banner from '../image/banner.jpg';

const HeaderWrap = styled.section`
margin: 0px;
padding: 0px;
position: relative;
width: 100%;
overflow: hidden;
height: 600px;

@media (max-width: 768px){
    height: 550px;
}

@media (max-width: 547px){
    height: 400px;
}
`;

const Container = styled.section`
width: 100%;
position: relative;
margin: 0px;
padding: 0px;
height: 600px;
background-image: url(${banner});
background-size: auto 100%;
background-repeat: no-repeat;

@media (max-width: 768px){
    height: 550px;
}

@media (max-width: 547px){
    height: 400px;
}
`;

const ContentBox = styled.div`
padding: 150px 60px 60px 60px;
position: relative;
width: 80%;
margin-left: auto;
margin-right: auto;
z-index: 3;

@media (max-width: 768px){
    padding: 100px 30px 60px 30px;
}

@media (max-width: 547px){
    width: 100%;
    padding: 80px 10px;
}
`;

const LightText = styled.p`
padding: 0px;
margin: 0px 0px 30px 0px;
font-size: 1em;
color: #E1E0DE;
font-family: 'Roboto', sans-serif;
`;

const AnimatedName = styled(animated.div)`
padding: 0px;
margin: 0px;
color: white;
font-size: 3.5em;
font-family: 'Roboto', sans-serif;
font-weight: 600;
overflow: hidden;

@media (max-width: 547px){
    font-size: 1.5em;
}
`;

const IntroBox = styled(animated.div)`
margin: 0px;
margin-bottom: 30px;
color: white;
font-size: 2em;
overflow: hidden;

@media (max-width: 547px){
    font-size: 1em;
}
`;

const IntroText = styled.p`
margin: 0px;
padding: 0px;
width: 600px;
font-family: 'Roboto', sans-serif;

@media (max-width: 547px){
    width: 400px;
}

@media (max-width: 380px){
    width: 320px;
}
`;

const IntroBox2 = styled(animated.div)`
margin: 7px 0px 0px 0px;
font-size: 1em;
color: white;
font-family: 'Roboto', sans-serif;
font-weight: 500;

@media (max-width: 547px){
    font-size: 0.8em;
}
`;

const ButtonWrap = styled(animated.div)`
margin: 50px 0px 0px 0px;
position: relative;
`;

const ContactButton = styled.a`
padding: 10px 20px;
border-radius: 3px;
color: white;
text-decoration: none;
background-color: #C09779;
font-family: 'Roboto Slab', serif;
font-size: 0.8em;

&:hover{
    color: #C09779;
    border-color: #C09779;
    background-color: white;
    text-decoration: none;
    cursor: pointer;
}
`;

const Circle1 = styled.div`
position: absolute;
top: 80px;
right: 250px;
z-index: 2;
background-color: rgba(246, 185, 115, 0.3);
width: 70px;
height: 70px;
border-radius: 35px;

@media (max-width: 547px){
    display: none;
}
`;

const Circle2 = styled.div`
position: absolute;
top: 80px;
right: 120px;
z-index: 2;
background-color: rgba(72, 211, 220, 0.5);
width: 140px;
height: 140px;
border-radius: 70px;

@media (max-width: 547px){
    display: none;
}
`;

const Circle3 = styled.div`
position: absolute;
top: 220px;
right: 140px;
z-index: 2;
background-color: rgba(196, 196, 196, 0.4);
width: 30px;
height: 30px;
border-radius: 15px;

@media (max-width: 547px){
    display: none;
}
`;

const AnchorAbout = styled.div`
height: 3px;
padding: 0px;
margin: 0px;
`;

function Header(params) {
    const name = useSpring({from: {width: '10px', opacity: 0}, to: {width: '600px', opacity: 1}});
    const intro = useSpring({from: {width: '10px', opacity: 0}, to: {width: '600px', opacity: 1}, delay: 500});
    const intro2 = useSpring({from: {width: '10px', opacity: 0}, to: {width: '600px', opacity: 1}, delay: 1000});
    const showButton = useSpring({from: {opacity: 0}, to: {opacity: 1}, delay: 1000});

    return(
        <HeaderWrap>
            <Container>
                <ContentBox>
                    <LightText>Hello, I am</LightText>
                    <AnimatedName style={name}><IntroText>Kolo Ochuko,</IntroText></AnimatedName>
                    <IntroBox style={intro}><IntroText>A frontend software developer.</IntroText></IntroBox>
                    <IntroBox2 style={intro2}><LightText>The only thing that excites me more than coding is family.</LightText></IntroBox2>
                    <ButtonWrap style={showButton}>
                        <ContactButton href="#contact">Get In Touch</ContactButton>
                    </ButtonWrap>
                    <AnchorAbout id="about" />
                </ContentBox>
                <Circle2 />
                <Circle1 />
                <Circle3 />
            </Container>
        </HeaderWrap>
    );
}

export default Header;