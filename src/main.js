import React from 'react';
import styled from 'styled-components';
import Navbar from './navigation/navigation';
import Header from '../src/comps/header';
import About from '../src/comps/about';
import Skills from '../src/comps/skills';
import Projects from '../src/comps/projects';
import Contact from '../src/comps/contact';

const MainWrap = styled.div`
margin: 0px;
padding: 0px;
position: relative;
font-size: 1em;
width: 100%;
background-color: #EEE;
`;


function Main() {
    return(
        <MainWrap>
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </MainWrap>
    );
}

export default Main;