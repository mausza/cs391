import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import {StyledContainer, StyledMain, Title, StyledList} from "./Styles.tsx";
import styled from "styled-components";



const StyledItem = styled.li`
    margin: 1vw;
`

export default function Experience(){
    return (
        <>
            <Header/>
            <StyledContainer>
            <Nav/>
            <StyledMain>
                <Title>Experience</Title>
                <StyledList>
                    <StyledItem>
                        <strong>Co-Founder at BaboBot.com, Boston, MA | 03/2023 - Present</strong>
                        <ul>
                            <li>Led strategy and development of a text messaging-based platform for educational communities.</li>
                            <li>Programmed foundational systems and established strategic partnerships with schools.</li>
                            <li>Transitioned BaboBot from concept to a thriving service with over 800 daily users.</li>
                            <li>Developing the next phase: an AI-powered chatbot for real-time school information.</li>
                            <li>Currently leading BaboBot’s website redesign.</li>
                        </ul>
                    </StyledItem>
                    <StyledItem>
                        <strong>Project Lead at Trak, Wellesley, MA</strong>
                        <ul>
                            <li>Led a 14-member team at Babson College to develop an IoT sensor system.</li>
                            <li>Self-taught Fusion360 to design and prototype sensor housing using 3D printing.</li>
                            <li>Programmed sensor logic in C and managed software-hardware integration.</li>
                            <li>Installed the product on campus, proving its effectiveness.</li>
                        </ul>
                    </StyledItem>
                    <StyledItem>
                        <strong>Analyst Intern at JLP Asset Management, New York, NY</strong>
                        <ul>
                            <li>Supported financial modeling and projections for REIT investments.</li>
                            <li>Assisted in market research and fundamental analysis.</li>
                            <li>Learned bottom-up investment strategies and financial analysis.</li>
                        </ul>
                    </StyledItem>
                    <StyledItem>
                        <strong>Co-Founder at Comet, New York, NY</strong>
                        <ul>
                            <li>Co-founded Comet at age 16 to simplify credit card rewards for online shoppers.</li>
                            <li>Led market research and strategy for user-friendly credit card recommendations.</li>
                            <li>Developed expertise in fintech, consumer behavior, and startup agility.</li>
                        </ul>
                    </StyledItem>
                </StyledList>
            </StyledMain>
            </StyledContainer>
            <Footer/>
        </>
    );

}