import { useEffect, useState } from "react";
import { ArtworkProps } from "../types.ts";

export default function (){
    const [numArtworks, setNumArtworks] = useState(5);
    const [artworks, setArtworks] = useState<ArtworkProps[]>([]);

    useEffect(() => {
        async function getArtworks(){
            const res = await fetch(`https://api.arctic.edu/api/v1/artworks?limit=${numArtworks}`,
            );
            const jsonRes = await res.json();
            setArtworks(jsonRes.data);
        }

        }
    )
};