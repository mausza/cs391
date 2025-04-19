import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";


export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor: "#009ed8", padding: "1vh"}}>
                    <Typography variant="h6" color="inherit" component="h1">
                        URL Shortener
                    </Typography>
            </AppBar>
        </Box>
    );
}