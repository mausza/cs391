"use client"
import styled from 'styled-components'
import type { Session } from "next-auth"
import SignOutButton from "../components/SignOutButton"

const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    justify-content: center;
    margin: 10vh auto auto auto;
    width: 50%;
    border-radius: 15px;
    align-items: center;
    padding: 5vh;
`

export default function UserCard({ session }: { session: Session }) {
    return (
        <>
            <Card>
                <h1>{session.user?.name}</h1>
                <h3>{session.user?.email}</h3>
                <img style={{height: "auto", width: '10vw', borderRadius:'15px',}} src={session.user?.image ?? ""} alt="profile photo"/>
                <SignOutButton />
            </Card>
        </>
    );
}