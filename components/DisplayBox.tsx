"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const mainBoxStyle = {
    background: "#009ed8",
    width: "50vw",
    height: "30vh",
    marginBottom: "10vh",
    borderRadius: "1vw",
    boxShadow: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

export default function DisplayBox() {
    const [link, setLink] = useState("");
    const [alias, setAlias] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [shortUrl, setShortUrl] = useState<string | null>(null);

    const handleShorten = async () => {
        if (!alias || !link) {
            setError("Both alias and link are required.");
            return;
        }

        try {
            const res = await fetch("/api/shorten", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ alias, link }),
            });
            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Something went wrong");
            } else {
                setError(null);
                setShortUrl(data.shortUrl);
            }
        } catch (e: any) {
            setError(e.message);
        }
    };

    return (
        <Box component="section" sx={mainBoxStyle}>
            <TextField
                label="Enter A Link To Shorten"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                variant="outlined"
                sx={{
                    backgroundColor: "#ffffff",
                    borderRadius: "5px",
                    width: "30%",
                    mb: 2,
                }}
                slotProps={{
                    inputLabel: {
                        sx: { "&.Mui-focused": { color: "black" } },
                    },
                }}
            />

            <TextField
                label="Enter An Alias"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
                variant="outlined"
                sx={{
                    backgroundColor: "#ffffff",
                    borderRadius: "5px",
                    width: "30%",
                    mb: 2,
                }}
                slotProps={{
                    inputLabel: {
                        sx: { "&.Mui-focused": { color: "black" } },
                    },
                }}
            />

            <Button
                variant="contained"
                onClick={handleShorten}
                sx={{ backgroundColor: "lightblue" }}
            >
                Shorten
            </Button>

            {error && (
                <Box sx={{ color: "red", mt: 2 }}>
                    {error}
                </Box>
            )}

            {shortUrl && (
                <Box sx={{ color: "white", mt: 2 }}>
                    Short URL: {shortUrl}
                </Box>
            )}
        </Box>
    );
}
