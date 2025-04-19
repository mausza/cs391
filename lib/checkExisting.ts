import getCollection, { LINKS_COLLECTION } from "@/db";


export default async function checkExisting(desiredAlias : string){

    const linksCollection = await getCollection(LINKS_COLLECTION);
    const result = await linksCollection.findOne({ shortenedURL: desiredAlias })


    if (result != null) {
        return true;
    } else {
        return false;
    }

}