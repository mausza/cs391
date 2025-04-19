import checkExisting from "@/lib/checkExisting";
import addAlias from "./addAlias";

export default async function shortenLink(alias: string, link: string){

    const aliasUsed = await checkExisting(alias);

    if (aliasUsed) {
        throw new Error("This Alias Already Exists. Please Choose Another.");
    }
    else {
        return addAlias(alias, link);
    }
}