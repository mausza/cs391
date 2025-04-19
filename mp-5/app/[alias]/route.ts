import { NextRequest, NextResponse } from "next/server";
import getCollection, { LINKS_COLLECTION } from "@/db";

export async function GET(
    request: NextRequest,
    { params }: { params: { alias: string } }
) {
    const links = await getCollection(LINKS_COLLECTION);
    const doc = await links.findOne({ shortenedURL: params.alias });

    if (!doc) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.redirect(doc.originalURL, 302);
}
