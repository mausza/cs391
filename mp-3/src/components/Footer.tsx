import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: #98def8;
    margin: auto;
    padding: 1vw;
`

export default function Footer() {
    return (
        <StyledFooter>&copy; 2025 Mauricio Szajman.</StyledFooter>
    );
}