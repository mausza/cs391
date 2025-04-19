import { LinkProps } from "@/types";
import getCollection, { LINKS_COLLECTION } from "@/db";

export default async function getLinks(): Promise<LinkProps[]> {
    const linksCollection = await getCollection(LINKS_COLLECTION);
    const data = await linksCollection.find().toArray();

    const links: LinkProps[] = data.map((p) => ({
        shortenedURL: p.shortenedURL,
        originalURL: p.originalURL,
    }));

    return links.reverse();
}