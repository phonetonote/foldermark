import React from "react";
import Head from "next/head";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Dropbox from "../components/Dropbox";
import { Box, Container, Heading, Link, Text } from "@chakra-ui/react";

const Home = () => (
  <Box as="section" height="100vh" overflowY="auto">
    <Container pt={{ base: "8", lg: "12" }} pb={{ base: "12", lg: "24" }}>
      <Head>
        <title>foldermark</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Box>
        <Text>
          this tool transforms a folder or list of dropbox files into a markdown list of links ready to copy into your
          favorite tools for thought. click the button below to get started.
        </Text>
      </Box>
      <Dropbox />
      <footer>
        <Text>
          this tool uses{" "}
          <Link
            href="https://www.dropbox.com/developers/chooser"
            isExternal={true}
            target="_blank"
            rel="noopener"
            style={{ textDecoration: "underline" }}
          >
            dropbox chooser
          </Link>{" "}
          and does not access or save any of your files.
        </Text>
        brought to you by{" "}
        <Link
          href="https://phonetonote.com"
          isExternal={true}
          target="_blank"
          rel="noopener"
          style={{ textDecoration: "underline" }}
        >
          phonetonote
        </Link>
        , powered by{" "}
        <Link
          href="https://nextjs.org/"
          isExternal={true}
          target="_blank"
          rel="noopener"
          style={{ textDecoration: "underline" }}
        >
          nextjs
        </Link>
      </footer>
    </Container>
  </Box>
);

export default Home;
