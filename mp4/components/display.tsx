"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Display() {
    const router = useRouter();
    const [word, setWord] = useState("");

    const handleSearch = () => {
        if (word.trim()) {
            router.push(`/result?word=${encodeURIComponent(word)}`);
        }
    };

    return (
        <div className="min-w-[30vw] max-w-[80vw] m-auto h-[40vh] bg-blue-300 rounded-xl flex flex-col items-center justify-center">
            <h2 className="text-[calc(1vw+10px)] m-[4vh] text-center">
                Please Enter A Word Below
            </h2>

            <input
                type="text"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                className="border bg-white border-gray-300 rounded-md px-4 py-2 max-w-[10em] m-auto focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
                onClick={handleSearch}
                className="bg-white hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded m-[5vh]"
            >
                Search
            </button>
        </div>
    );
}
