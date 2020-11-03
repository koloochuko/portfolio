import React from 'react';
import styled from 'styled-components';
import fb from '../image/fb-white.svg';
import github from '../image/github-white.svg';
import phone from '../image/phone-white.svg';
import twitter from '../image/twitter-white.svg';

const ContactWrap = styled.section`
margin: 0px;
padding: 0px;
background-color: #476D86;
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
background-color: #476D86;
border-bottom: solid 1px #ddd;
padding: 0px;
padding-bottom: 40px;
`;

const TitleRow = styled.div`
padding: 60px 60px 20px 60px;
width: 37%;
font-family: 'Roboto Slab', serif;
font-size: 1em;
color: white;

@media (max-width: 768px){
    width: 100%;
    padding: 60px 30px 20px 30px;
}

@media (max-width: 547px){
    width: 100%;
    padding: 60px 10px 20px 10px;
}
`;

const ContentBox = styled.div`
display: flex;
width: 100%;
padding-left: 60px;
padding-right: 60px;
padding-top: 20px;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const IconBox = styled.div`
display: flex;
margin: 0px;
padding: 0px;
flex-wrap: wrap;
`;

const IconAnchor = styled.a`
margin: 0px;
padding: 15px;
`;

const Icon = styled.img`
margin: 0px;
padding: 10px;
width: 50px;
height: 50px;
border-radius: 25px;
border: solid 1px white;
box-sizing: border-box;

&:hover{
    background-color: #678DA6;
}
`;

const Email = styled.p`
margin: 0px;
padding: 0px;
padding-bottom: 10px;
color: white; 
`;

const PhoneText = styled.p`
margin: 0px;
padding: 0px;
padding-bottom: 10px;
color: white;

&:hover{
    text-decoration: none;
    color: #F6B973;
}
`;

const PhoneAnchor = styled.a`
margin: 0px;
padding: 0px;

&:hover{
    text-decoration: none;
}
`;

function Contact(props) {
    const contactProps = [
        {id: "01", name: fb, link: "https://www.facebook.com/ochuko.kolo", alt:"facebook"},
        {id: "02", name: twitter, link: "https://twitter.com/KoloOchuko", alt:"twitter"},
        {id: "03", name: github, link: "https://github.com/koloochuko", alt:"github"},
        {id: "04", name: phone, link: "tel:07032486087", alt:"phone number"}
    ];

    return(
        <ContactWrap>
            <Container>
                <TitleRow>I Will Like To Hear From You</TitleRow>
                <ContentBox>
                    <IconBox>
                        {contactProps.map(item => <IconAnchor key={item.id} href={item.link}><Icon src={item.name} alt={item.alt} /></IconAnchor>)}
                    </IconBox>
                    <Email>ochukoeworitsekolo@gmail.com</Email>
                    <PhoneAnchor href="tel:+2347032486087"><PhoneText>+2347032486087</PhoneText></PhoneAnchor>
                </ContentBox>
            </Container>
        </ContactWrap>
    );
}

export default Contact;