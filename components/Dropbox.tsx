import {
  Alert,
  Box,
  Button,
  Container,
  Heading,
  IconButton,
  SimpleGrid,
  Stack,
  Image,
  Link,
  Text,
  useBreakpointValue,
  BoxProps,
  useColorModeValue,
  HStack,
  useClipboard,
} from "@chakra-ui/react";
import { FiDownloadCloud } from "react-icons/fi";
import DropboxChooser from "react-dropbox-chooser";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

type DropboxFile = {
  name: string;
  link: string;
  icon: string;
};

const Card = (props: BoxProps) => (
  <Box minH="36" bg="bg-surface" boxShadow={useColorModeValue("sm", "sm-dark")} borderRadius="lg" {...props} />
);

const Dropbox = () => {
  const [selectedFiles, setActiveFiles] = useState<DropboxFile[]>([]);
  const [markdown, setMarkdown] = useState<string>("");

  // update the markdown when the files change
  useEffect(() => {
    setMarkdown(selectedFiles.map((file) => `- [${file.name}](${file.link})`).join("\n"));
  }, [selectedFiles]);

  const onSuccess = (files: DropboxFile) => {
    setActiveFiles(selectedFiles.concat(files));
  };

  const onError = (error: any) => {
    console.log(error);
  };

  const onCancel = () => {
    console.log("Cancelled");
  };

  const { hasCopied, onCopy } = useClipboard(markdown);

  return (
    <div>
      <Container pt={{ base: "8", lg: "12" }} pb={{ base: "12", lg: "24" }}>
        <Stack spacing={{ base: "8", lg: "6" }}>
          <Stack spacing="4" direction={{ base: "column", lg: "row" }} justify="space-between">
            <Stack spacing="1">
              <DropboxChooser
                appKey={"n9az6kikryqtkva"}
                success={(files) => onSuccess(files)}
                error={(error) => onError(error)}
                cancel={() => onCancel()}
                multiselect={true}
                folderSelect={true}
              >
                <Button>Upload From Dropbox</Button>
              </DropboxChooser>
            </Stack>
            <Stack direction="row" spacing="3"></Stack>
          </Stack>
          <Stack spacing={{ base: "5", lg: "6" }}>
            {selectedFiles.length > 0 && (
              <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
                <Card bg="bg-surface" px={{ base: "4", md: "6" }} py="5" boxShadow={useColorModeValue("sm", "sm-dark")}>
                  <Stack spacing="1">
                    <HStack>
                      <Text fontSize="lg" fontWeight="medium">
                        markdown
                      </Text>
                      <Button onClick={onCopy} ml={2}>
                        {hasCopied ? "Copied" : "Copy"}
                      </Button>
                    </HStack>

                    <Text color="muted" fontSize="sm">
                      {markdown}
                    </Text>
                  </Stack>
                </Card>
                <Card bg="bg-surface" px={{ base: "4", md: "6" }} py="5" boxShadow={useColorModeValue("sm", "sm-dark")}>
                  <Text fontSize="lg" fontWeight="medium">
                    preview
                  </Text>
                  <Text ml={{ base: "4", md: "6" }}>
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                  </Text>
                </Card>
              </SimpleGrid>
            )}
            {selectedFiles.length === 0 && (
              <Alert status="info">choose files with the button above to get started</Alert>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default Dropbox;
