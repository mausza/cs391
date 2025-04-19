import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-blue-400">
            <Link href="/" className="text-[calc(2vw+10px)] mx-5 text-black">
                Dictionary
            </Link>
        </header>
    );
}