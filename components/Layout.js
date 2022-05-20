import { Box, Container } from "@chakra-ui/react";
import Header from "./Header";

const Layout = ({ children }) => (
  <Box as="section" height="100vh" overflowY="auto">
    <Container pt={{ base: "8", lg: "12" }} pb={{ base: "12", lg: "24" }}>
      <Header />
      <main>{children}</main>
    </Container>
  </Box>
);

export default Layout;
