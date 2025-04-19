import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import {StyledContainer, StyledMain, Title} from "./Styles.tsx";
import styled from "styled-components";

const StyledParagraph = styled.p`;
    font-size: calc(1vw + 10px);
    margin-bottom: 5vw;
    padding: 2vw;
`

const StyledList = styled.ul`
    margin: 5vw;
    font-size: calc(.5vw + 10px);
`

export default function Education() {
    return (
        <>
            <Header/>
            <StyledContainer>
                <Nav/>
                <StyledMain>
                    <Title>Education</Title>
                        <StyledList>
                            <li><strong>Boston University</strong>, B.S. Computer Science (anticipated) | 09/2023 - Present</li>
                            <li><strong>Babson College</strong>, B.S. Business Administration (pursued) | 09/2022 - 05/2023</li>
                        </StyledList>
                    <StyledParagraph>
                        I began my college journey at Babson College, where I pursued a B.S. in Business Administration. While
                        Babson is renowned for its focus on entrepreneurship and business innovation, I quickly realized that my
                        real passion lay in technology and problem-solving, rather than spreadsheets and market strategies. The
                        coursework felt uninspiring, and I found myself far more interested in the technical side of things—how
                        software works, how systems communicate, and how technology can be used to solve real-world problems.
                        This realization led me to transfer to Boston University in the fall of 2023 to pursue a B.S. in Computer
                        Science.

                        At BU, I’ve been able to fully immerse myself in the field that excites me. My coursework has strengthened
                        my understanding of distributed systems, probability, and computing fundamentals, and I’ve taken on projects
                        that challenge me to build real-world applications. The transition from business to computer science wasn’t
                        just a change in major—it was a shift in mindset. Instead of forcing myself to fit into a field that didn’t
                        excite me, I made the decision to follow my passion for technology, software development, and AI-driven
                        solutions. Now, every day in my academic journey feels purposeful, and I’m constantly pushing myself to
                        develop skills that will shape my future career in tech.
                    </StyledParagraph>
                </StyledMain>
            </StyledContainer>
            <Footer/>
        </>
    );
}