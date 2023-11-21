import Head from "next/head";
import {Box, Typography} from "@mui/material"

export default function Home() {
  return (
    <Box >
      <Head>
        <title>Write Flight</title>
        <meta name="Screenwriting Guide" content="Screenwriting Tool for greater efficiency" />
      </Head>

      <main>
        <Typography component="h1" >Write Flight</Typography>
      </main>
    </Box>
  );
}
