"use server";

export async function fetchDefinition(word: string) {
    if (!word) return { error: "Missing word" };



    const res = await fetch(
        `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.MW_API_KEY}`
    );

    const contentType = res.headers.get("content-type");

    if (!res.ok || !contentType?.includes("application/json")) {
        const text = await res.text(); // get raw text
        return { error: `API error: ${text}` };
    }

    const data = await res.json();
    return data;
}
