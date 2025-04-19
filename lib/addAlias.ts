import getCollection, { LINKS_COLLECTION } from "@/db";


export default async function addAlias(alias: string, link: string) {

    const newAlias = {
        shortenedURL: alias,
        originalURL: link,
    };

    const linksCollection = await getCollection(LINKS_COLLECTION);
    const result = await linksCollection.insertOne(newAlias);

    return result;

}