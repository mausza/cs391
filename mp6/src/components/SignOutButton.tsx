import styled from "styled-components";
import { googleSignOut } from "@/src/actions/googleSignOut";

const StyledButton = styled.button`
    background-color: lightblue;
    border: none;
    height: 10vh;
    width: 20vw;
    border-radius: 15px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    font-size: 1.5vw;
    font-weight: bold;
    margin: 10vh auto 4vh auto;
    align-self: center;
    justify-content: center;
    &:hover {
        background: #3367d6;  
    }
`;


export default function SignOutButton() {
    return (
        <form action={googleSignOut}>
            <StyledButton type="submit">Sign Out</StyledButton>
        </form>
    );
}