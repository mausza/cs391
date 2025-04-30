import styled from "styled-components";
import { googleSignIn } from "@/src/actions/googleSignIn";

const StyledButton = styled.button`
    background-color: lightblue;
    border: none;
    height: 10vh;
    width: 20vw;
    border-radius: 15px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    font-size: 1.5vw;
    font-weight: bold;
    &:hover {
        background: #3367d6;  
    }
`;


export default function SignInButton() {
    return (
        <form action={googleSignIn}>
            <StyledButton type="submit">Sign in with Google</StyledButton>
        </form>
    );
}