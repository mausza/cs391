import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import styled from 'styled-components';
import {StyledContainer, StyledMain, Title} from "./Styles.tsx";

const StyledImg = styled.img`
    display: block;
    max-width: 30vw;
    height: auto;
    border-radius: 2vw;
    margin: 4vw auto 4vw;

    @media (max-width: 900px) {
        display: block;
        margin: 0 auto;
        max-width: 30vw;
        height: auto;
        border-radius: 2vw;
        margin-top: 4vw;
        margin-bottom: 4vw;
    }
`


const StyledParagraph = styled.p`
    font-size: calc(1vw + 10px);
    margin-bottom: 5vw;
    margin-left: 2vw;
    margin-right: 2vw;
`

export default function Home() {
    return (
        <>
            <Header/>
                <StyledContainer>
                    <Nav/>
                    <StyledMain>
                        <Title>Home</Title>
                        <StyledImg src="/Mauricio_linkedin_picture.jpeg" alt="A Picture of Mauricio..." />
                        <StyledParagraph>
                            Welcome to my portfolio! I'm Mauricio Szajman, a junior at Boston University
                            studying Computer Science. Passionate about building efficient and scalable
                            systems, I have experience in distributed systems, AI-driven applications,
                            and backend development. My coursework has strengthened my foundation in
                            computing systems, algorithms, and probability, while my projects—ranging
                            from AI-powered assistants to multithreaded servers—showcase my problem-solving skills.
                            Explore my site to learn more about my experience, education, coursework, projects, and skills.
                        </StyledParagraph>
                    </StyledMain>
                </StyledContainer>
            <Footer/>
        </>
    );
}