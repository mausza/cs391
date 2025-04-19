import styled from 'styled-components';

const Title = styled.h1`
    margin: 0;
    font-size: calc(1.5vw + 10px);
    padding-top: .5vw;

    @media (max-width: 750px) {
        margin: auto;
    }
`

const Description = styled.h3`
    margin: 0;
    font-size: calc(1vw + 5px);

    @media (max-width: 750px) {
        margin: auto;
    }
`

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    background-color: #98def8;
    padding: 1%;
`

export default function Header() {
    return (
    <>
        <StyledHeader>
            <Title>Mauricio's Resume</Title>
            <Description>Computer Science Student At Boston University</Description>
        </StyledHeader>
    </>
    );
}