import {Link} from 'react-router-dom'
import styled from "styled-components"

const NavBar = styled.nav`
    padding-top: 10%;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    background-color: #0197cd;
    font-size: 3vw;
    width: 30%;
    min-height: 100vh;

    @media (max-width: 750px) {
        width: 100%;          
        min-height: auto;     
        flex-direction: row;  
        padding-top: 0;       
    }
`

const NavList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0 auto 0;

    @media (max-width: 750px) {
        flex-direction: row;       
        justify-content: center;   
        margin: auto;             
    }
`

const StyledLink = styled(Link)`
    margin: 1vw;
    display: block;
    padding: 2vw;
    background-color: #29586a;
    color: #fff;
    text-align: center;
    text-decoration: none;
    border-radius: 5vw;
    font-size: calc(1vw + 5px);

    @media (max-width: 750px) {
        margin: .5vw;
    }
`

export default function Nav(){
    return (
        <>
            <NavBar>
                <NavList>
                    <li><StyledLink to="/">Home</StyledLink></li>
                    <li><StyledLink to="/education">Education</StyledLink></li>
                    <li><StyledLink to="/experience">Experience</StyledLink></li>
                    <li><StyledLink to="/projects">Projects</StyledLink></li>
                    <li><StyledLink to="/coursework">Coursework</StyledLink></li>
                    <li><StyledLink to="/skills">Skills</StyledLink></li>
                </NavList>
            </NavBar>
        </>
    );
}
