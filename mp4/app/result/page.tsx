import { fetchDefinition } from "@/lib/fetchDefinition";

export default async function ResultPage(props: unknown) {
    const { searchParams } = props as {
        searchParams?: {
            word?: string;
        };
    };

    const word = searchParams?.word;
    if (!word) {
        return <p className="text-center">No word provided.</p>;
    }

    const data = await fetchDefinition(word);

    if (typeof data === "object" && data !== null && "error" in data) {
        return <p className="text-center text-red-500">{(data as { error: string }).error}</p>;
    }

    if (!Array.isArray(data) || data.length === 0 || typeof data[0] === "string") {
        return <p className="text-center text-red-500">Word not found in the dictionary.</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className="bg-blue-300 p-6 rounded max-w-xl w-full space-y-4">
                <h2 className="text-2xl font-bold capitalize">{data[0].hwi.hw}</h2>
                <p className="italic text-gray-600">{data[0].fl}</p>
                <ul className="list-disc list-inside mt-2">
                    {data[0].shortdef.map((def: string, i: number) => (
                        <li key={i}>{def}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
