import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import {StyledContainer, StyledMain, Title, StyledH3} from "./Styles.tsx";
import styled from "styled-components";

const StyledList = styled.ul`
    margin: 0;
    font-size: calc(1vw + 5px);
`

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 4vh;
    
`

export default function Skills() {
    return (
   <>
    <Header />
       <StyledContainer>
       <Nav />
        <StyledMain>
        <Title>Skills</Title>
        <StyledH3>Technical & Leadership Skills</StyledH3>

        <ListContainer>
        <StyledList>
            <h4>Programming Languages</h4>
            <li>Python</li>
            <li>Java</li>
            <li>C</li>
            <li>SQL</li>
        </StyledList>


        <StyledList>
            <h4>Software & Tools</h4>
            <li>Autodesk Fusion 360 (3D Modeling)</li>
            <li>3D Printing & Prototyping</li>
            <li>Git & GitHub (Version Control)</li>
        </StyledList>

        <StyledList>
            <h4>Business & Leadership</h4>
            <li>Start-up Leadership</li>
            <li>Team Management</li>
            <li>Market Research & Product Development</li>
            <li>Project Management</li>
        </StyledList>

        <StyledList>
            <h4>Soft Skills</h4>
            <li>Team Building & Collaboration</li>
            <li>Strategic Thinking</li>
            <li>Public Speaking & Communication</li>
        </StyledList>
        </ListContainer>
        </StyledMain>
       </StyledContainer>
       <Footer />
   </>
    );
}