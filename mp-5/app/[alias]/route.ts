import { NextRequest, NextResponse } from "next/server";
import getCollection, { LINKS_COLLECTION } from "@/db";

export async function GET(
    request: NextRequest,
    { params }: { params: { alias: string } }
) {
    const { alias } = params;

    const linksCollection = await getCollection(LINKS_COLLECTION);


    const doc = await linksCollection.findOne({ shortenedURL: alias });

    if (!doc) {
        // If not found, return a 404 JSON response
        return NextResponse.json(
            { error: "Alias not found" },
            { status: 404 }
        );
    }

    // Redirect the client to the original URL
    return NextResponse.redirect(doc.originalURL, 302);
}
