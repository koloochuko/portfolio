import React from 'react';
import styled from 'styled-components';

const AboutWrap = styled.section`
margin: 0px;
padding: 0px;
background-color: white; // #E1E0DE
position: relative;
width: 100%;
`;

const Container = styled.div`
width: 80%;
max-width: 800px;
position: relative;
display: flex;
flex-direction: column;
margin-left: auto;
margin-right: auto;
background-color: white;
border-bottom: solid 1px #ddd;
padding: 0px;
padding-bottom: 40px;
`;

const TitleRow = styled.div`
padding: 60px 60px 20px 60px;
width: 37%;
font-family: 'Roboto Slab', serif;
font-size: 1em;
color: #476D86;

@media (max-width: 768px){
    padding: 60px 30px 20px 30px;
    Width: 100%;
}

@media (max-width: 547px){
    width: 100%;
    padding: 60px 10px 20px 10px;
}
`;

const ContentText = styled.div`
margin: 0px;
padding-top: 0px;
padding-left: 25%;
padding-right: 25%;
padding-bottom: 20px;

@media (max-width: 768px){
    padding-left: 20%;
    padding-right: 20%;
}

@media (max-width: 547px){
padding-left: 10px;
padding-right: 10px;
}
`;

const AnchorSkills = styled.p`
padding: 0px;
margin: 0px;
`;

function About(props) {
    return(
        <AboutWrap>
            <Container>
                <TitleRow>A Little About Me</TitleRow>
                    <ContentText>
                    I am a software developer with a focus on web development. My
strongest point is my analytical ability. State the problem
and I will do everything to get it done efficiently.
                    </ContentText>
                    <ContentText>
                    I first attempted programming in 2004 when I got my first system.
Since then, I have insatiably experimented with a number of 
programming languages. Every 'bulb' in me lights up every time 
I solve a complex programming problem.
                    </ContentText>
                    <AnchorSkills id="skills" />
            </Container>
        </AboutWrap>
    );
}

export default About;