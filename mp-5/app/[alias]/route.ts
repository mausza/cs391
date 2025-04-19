import { NextRequest, NextResponse } from "next/server";
import getCollection, { LINKS_COLLECTION } from "@/db";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ alias: string }> }
) {
    const { alias } = await params;

    const linksCollection = await getCollection(LINKS_COLLECTION);
    const doc = await linksCollection.findOne({ shortenedURL: alias });

    if (!doc) {
        return NextResponse.json({ error: "Alias not found" }, { status: 404 });
    }

    return NextResponse.redirect(doc.originalURL, 302);
}
