import Header from '@/src/components/Header'
import Login from '@/src/components/Login'
import UserCard from '@/src/components/UserCard'
import { auth } from '@/auth'


export default async function Home() {

  const session = await auth();

  return (
    <>
    <Header />
      {session ? <UserCard session={session}/> : <Login />}
    </>
  );
}
