import React from 'react';
import styled from 'styled-components';
import bootstrap from '../image/bootstrap.svg';
import corel from '../image/corel.svg';
import css from '../image/css.svg';
import express from '../image/express.svg';
import figma from '../image/figma.svg';
import git from '../image/git.svg';
import github from '../image/github.svg';
import html from '../image/html.svg';
import java from '../image/java.svg';
import js from '../image/js.svg';
import mongodb from '../image/mongodb.svg';
import node from '../image/node.svg';
import ps from '../image/ps.svg';
import react from '../image/react.svg';
import redux from '../image/redux.svg';
import sass from '../image/sass.svg';

const SkillsWrap = styled.section`
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
color: #AD744B;

@media (max-width: 768px){
    padding: 60px 30px 20px 30px;
    width: 100%;
}

@media (max-width: 547px){
    width: 100%;
    padding: 60px 10px 20px 10px;
}
`;

const AllIcons = styled.div`
position: relative;
display: flex;
flex-wrap: wrap;
justify-content: center;
padding-right: 10%;
padding-left: 25%;

@media (max-width: 768px){
    padding: 0px 30px 0px 30px;
}

@media (max-width: 547px){
    padding: 0px 10px 0px 10px;
}
`;

const ImageWrap = styled.div`
margin: 0px 50px 20px 0px;
padding: 0px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 547px){
    margin: 0px 15px 10px 0px;
}
`;

const Image = styled.img`
margin: 10px;
padding: 0px;
width: ${props => props.width || "48px"};
height: ${props => props.height || "48px"};
`;

const Text = styled.p`
margin: 0px;
padding: 0px;
font-size: 0.7em;
color: #95B0C2;
`;

const AnchorProject = styled.p`
padding: 0px;
margin: 0px;
`;

function LogoCard(props){
    return(
        <ImageWrap>
            <Image src={props.source} alt={props.name} width={props.width} height={props.height} />
            <Text>{props.name}</Text>
        </ImageWrap>
    );
}

function Skills(props) {
    const imagesProps = [
        {id: "08", source: html, name: "HTML", width: "41px", height: "48px"},
        {id: "03", source: css, name: "CSS", width: "41px", height: "48px"},
        {id: "10", source: js, name: "JavaScript", width: "48px", height: "48px"},
        {id: "09", source: java, name: "Java", width: "47px", height: "48px"},
        {id: "01", source: bootstrap, name: "Bootstrap", width: "48px", height: "48px"},
        {id: "16", source: sass, name: "Sass", width: "48px", height: "36px"},
        {id: "14", source: react, name: "React.js", width: "48px", height: "42px"},
        {id: "15", source: redux, name: "Redux", width: "48px", height: "46px"},
        {id: "12", source: node, name: "Node.js", width: "78px", height: "48px"},
        {id: "04", source: express, name: "Express", width: "60px", height: "18px"},
        {id: "11", source: mongodb, name: "MongoDB", width: "22px", height: "50px"},
        {id: "06", source: git, name: "Git", width: "48px", height: "48px"},
        {id: "07", source: github, name: "Github", width: "47px", height: "48px"},
        {id: "02", source: corel, name: "CorelDraw", width: "35px", height: "48px"},
        {id: "05", source: figma, name: "Figma", width: "32px", height: "48px"},
        {id: "13", source: ps, name: "Photoshop", width: "48px", height: "47px"},
    ]

    return(
        <SkillsWrap>
            <Container>
                    <TitleRow>Some Technologies I Work With</TitleRow>
                    <AllIcons>
                        {imagesProps.map(item => <LogoCard key={item.id} source={item.source} name={item.name} width={item.width} height={item.height} />)}
                    </AllIcons>
                    <AnchorProject id="projects" />
            </Container>
        </SkillsWrap>
    );
}

export default Skills;