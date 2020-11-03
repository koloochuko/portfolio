import React from 'react';
import styled from 'styled-components';
import boldstep from '../image/boldstep.jpg';
import soundrave from '../image/soundrave.jpg';
import groomfield from '../image/groomfield.jpg';

const ProjectsWrap = styled.section`
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
    width: 100%;
}

@media (max-width: 547px){
    padding: 60px 10px 20px 10px;
    width: 100%;
}
`;

const ContentBox = styled.div`
display: flex;
width: 100%;
padding-left: 60px;
padding-right: 60px;
padding-top: ${props => props.first === "true" ? "0px" : "60px"};
padding-bottom: 0px;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 768px){
    padding-top: ${props => props.first === "true" ? "0px" : "60px"};
    padding-right: 30px;
    padding-bottom: 0px;
    padding-left: 30px;
}

@media (max-width: 547px){
    padding-top: ${props => props.first === "true" ? "0px" : "60px"};
    padding-right: 10px;
    padding-bottom: 0px;
    padding-left: 10px;
}
`;

const ContentBoxTitle = styled.p`
color: #D6A369;
margin: 0px;
padding: 5px;
font-family: 'Roboto Slab', serif;
`;

const ImageBox = styled.div`
width: 60%;
display: flex;
flex-direction: column;

@media (max-width: 768px){
    width: 70%;
}

@media (max-width: 547px){
    width: 100%;
}
`;

const ButtonsGroup = styled.div`
display: flex;
margin: 0px;
`;

const Button = styled.a`
margin-top:15px;
margin-right: 10px;
padding: 10px 8px;
background-color: #C09779;
border: solid 1px white;
color: white;
font-family: 'Roboto Slab', serif;
border-radius: 5px;
font-size: 0.8em;

&:hover{
    color: #C09779;
    border: solid 1px #C09779;
    background-color: white;
    text-decoration: none;
    cursor: pointer;
}
`;

const AnchorContact = styled.p`
margin: 0px;
padding: 0px;
`;

const Image = styled.img`
max-width: 100%;
width: auto;
height: auto;
`;

function Projects(props) {
    return(
        <ProjectsWrap>
            <Container>
                <TitleRow>Some Works I Have Done</TitleRow>
                <ContentBox first="true">
                <ContentBoxTitle>Boldsteps - A number Learning Application</ContentBoxTitle>
                    <ImageBox>
                        <Image src={boldstep} alt="about boldstep project" />
                        <ButtonsGroup>
                            <Button src="/">View Code</Button>
                            <Button src="/">Visit</Button>
                        </ButtonsGroup>
                    </ImageBox>
                </ContentBox>
                <ContentBox>
                    <ContentBoxTitle>A School Website</ContentBoxTitle>
                    <ImageBox>
                        <Image src={groomfield} alt="project 2 - Groomfield Schools" />
                        <ButtonsGroup>
                            <Button src="/">View Code</Button>
                            <Button src="/">Visit</Button>
                        </ButtonsGroup>
                    </ImageBox>
                </ContentBox>
                <ContentBox>
                    <ContentBoxTitle>Soundrave - A Music Store</ContentBoxTitle>
                    <ImageBox>
                        <Image src={soundrave} alt="project 3 - soundrave" />
                        <ButtonsGroup>
                            <Button src="/">View Code</Button>
                            <Button src="/">Visit</Button>
                        </ButtonsGroup>
                    </ImageBox>
                </ContentBox>
                <AnchorContact id="contact" />
            </Container>
        </ProjectsWrap>
    );
}

export default Projects;