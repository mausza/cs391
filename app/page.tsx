import * as React from 'react';
import Header from '../components/Header';
import DisplayBox from '../components/DisplayBox';
import Box from "@mui/material/Box";


export default function Home() {
  return (
      <>
        <Header />
          <Box
              component="main"
              sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "100vh",
                  p: 2,
              }}
          >
              <DisplayBox />
          </Box>
      </>
  );
}
