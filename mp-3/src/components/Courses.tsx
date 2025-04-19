import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import styled from 'styled-components';
import {StyledContainer, StyledMain, Title} from "./Styles.tsx";

export const StyledList = styled.ul`
    padding-right: 3vw;
    margin: 10vw auto;
    font-size: calc(1vw + 10px);
`

export default function Courses() {
    return (
    <>
        <Header />
        <StyledContainer>
            <Nav />
            <StyledMain>
                <Title>Supplementary Coursework</Title>
                <StyledList>
                    <li>
                        <strong>Columbia University</strong> | COMS 3157 Advanced Programming | June 2024
                    </li>
                    <li>
                        <strong>Cornell University</strong> | AEM 2400 Marketing | July - August 2021
                    </li>
                    <p>In addition to my studies at Boston University, I have taken the initiative to enroll in supplementary
                        coursework outside of BU to expand my education and ensure I stay on track for graduation. Since
                        transferring from Babson College, I’ve had to make up for some missing credits, and rather than delaying my
                        degree, I’ve sought out additional courses to fill the gaps efficiently. Beyond just fulfilling requirements,
                        this approach has allowed me to explore topics beyond BU’s curriculum, reinforcing my knowledge in areas like
                        probability, computing systems, and software development. These courses have complemented my formal education,
                        providing me with diverse perspectives and additional hands-on experience that strengthen my technical
                        foundation. By taking this proactive approach, I’ve not only kept myself on schedule but also broadened my
                        skill set in ways that will be invaluable in my career.</p>
                </StyledList>
            </StyledMain>
        </StyledContainer>
        <Footer />
    </>
    );
}