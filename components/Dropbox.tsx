import styles from "../styles/Dropbox.module.css";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { Alert, Box } from "@chakra-ui/react";

const Dropbox = () => {
  const { user } = useUser();

  const hasDropbox = user && user.externalAccounts.length > 0;

  return (
    <div className={styles.dropbox}>
      {!hasDropbox && (
        <Box>
          <Alert>please connect your dropbox account to continue</Alert>
        </Box>
      )}
    </div>
  );
};

export default Dropbox;
