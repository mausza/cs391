import { styled } from 'styled-components';

const AboutContentDiv= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightpink
`

export default function AboutPage() {
    return (
        <AboutContentDiv>
            <h1>I am a CS Student At BU!</h1>
            <p>I love learning about technology and building projects.</p>
        </AboutContentDiv>
    )
}