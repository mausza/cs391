import {useParams} from "react-router";
import {useEffect, useState} from "react";
import { ArtworksProps} from "../types.ts";

export default function ArtworkContent() {

        const { id } = useParams();
        const [artwork, setArtworks] = useState<ArtworksProps | null>(null);

    useEffect(() => {
        async function getArtworkInfo() {
            const res = await fetch(`https://api.artic.edu/api/v1/artworks/$[id]`);
            const jsonRes = await res.json();
            console.log(jsonRes);
            setArtworks(jsonRes.data);
        }
        try {
            getArtworkInfo();
        } catch (e) {
            console.error(e);
        }
        
    }, [id]);

    if (!artwork) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>{artwork.title}</h2>
            <img
                src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                alt={artwork.title}
                width="80%"
             />
            <p>On display: {artwork.is_on_view ? "True" : "False"}</p>
        </div>
    );

}