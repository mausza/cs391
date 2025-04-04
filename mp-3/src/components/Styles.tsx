import styled from 'styled-components';

export const StyledMain = styled.main`
    width: 70vw;
    display: flex;
    flex-direction: column;
    padding: 0;

    @media (max-width: 750px) {
        width: 100%;
        min-height: 100vh;
    }
`

export const StyledContainer = styled.div`
    display: flex;
    background-color: #76a6ba;
    min-height: 100vh;

    @media (max-width: 750px) {
        min-height: auto;
        flex-direction: column;
`

export const Title = styled.h2`
    margin: 10vh auto 0;
    font-size: calc(3vw + 5px);
`

export const StyledList = styled.ul`
    padding-right: 3vw;
    margin: 10vw auto;
    font-size: calc(1vw + 5px);
`

export const StyledH3 = styled.h3`
    font-size: calc(1vw + 5px);
    margin: 1vw auto 0;
`