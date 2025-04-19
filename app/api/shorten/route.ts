import { NextRequest, NextResponse } from "next/server";
import shortenLink from "@/lib/shortenLink";

export async function POST(request: NextRequest) {
    const { alias, link } = await request.json();

    try {
        new URL(link);
    } catch {
        return NextResponse.json(
            { error: "Invalid URL format" },
            { status: 400 }
        );
    }

    try {
        await shortenLink(alias, link);
        const origin =
            request.headers.get("x-forwarded-host") ||
            request.headers.get("host") ||
            "";
        const proto = request.headers.get("x-forwarded-proto") || "https";
        const shortUrl = `${proto}://${origin}/${alias}`;
        return NextResponse.json({ shortUrl }, { status: 201 });
    } catch (err: any) {
        const message = err instanceof Error ? err.message : "Unknown error";
        return NextResponse.json(
            { error: message },
            {
                status: message.includes("exists") ? 409 : 500,
            }
        );
    }
}
