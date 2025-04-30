"use client"
import React from 'react';
import styled from 'styled-components';


const StyledHeader = styled.header`
    background-color: lightblue;
    width: 100vw;
    height: 8vh;
    top: 0;
    align-content: center;
    margin: 0;
`

const StyledH1 = styled.h1`
    margin: 0 0 0 2vw;
`

export default function Header() {
    return (
        <>
            <StyledHeader>
                <StyledH1>Oauth App</StyledH1>
            </StyledHeader>
        </>
    );
}