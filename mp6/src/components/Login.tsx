"use client"
import styled from 'styled-components'
import SignInButton from './SignInButton'

const LoginComponent = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    width: 50vw;
    height: 30vh;
    align-items: center;
    justify-content: center;
    justify-self: center;
    align-self: center;
    margin: 30vh 0 0 0;
    border-radius: 15px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`


export default function Login() {
    return (
        <>
            <LoginComponent>
                <SignInButton />
            </LoginComponent>
        </>
    );
}