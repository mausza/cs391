import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import Calc from "./Calculator.tsx"

import {StyledContainer, StyledMain, Title, StyledH3} from "./Styles.tsx";
import styled from "styled-components";


export const StyledList = styled.ul`
    padding-right: 3vw;
    margin: 10vw auto 0;
    font-size: calc(1vw + 5px);

    @media (max-width: 900px) {
    }
`

export default function Projects() {
    return (
        <>
            <Header />
            <StyledContainer>
                <Nav />
                <StyledMain>
                    <Title>Projects</Title>
                    <StyledH3>Some Of The Projects I've Worked On</StyledH3>
                    <StyledList>
                        <li>
                            <strong>AI-Powered Chatbot for Schools</strong>
                            <p>Developed a chatbot using OpenAI’s API to answer school-related questions for students, parents, and faculty.</p>
                        </li>

                        <li>
                            <strong>Multi-threaded Image Processing Server</strong>
                            <p>Designed and built a C-based server that handles concurrent client requests for image transformations.</p>
                        </li>

                        <li>
                            <strong>Smart Workout Tracker</strong>
                            <p>Built a mobile app that tracks gym workouts and suggests exercises based on past performance.</p>
                        </li>
                    </StyledList>
                    <Calc />
                </StyledMain>
            </StyledContainer>
            <Footer />
        </>

    );

}