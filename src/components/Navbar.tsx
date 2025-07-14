"use client";

import {
  Box,
  Flex,
  Heading,
  HStack,
  Spacer,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box
      bg="white"
      _dark={{ bg: "gray.900" }}
      px={6}
      py={4}
      shadow="sm"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Flex align="center" maxW="6xl" mx="auto">
        <Heading size="md">
          <Link href="/">StudySync</Link>
        </Heading>
        <Spacer />
        <HStack spacing={4}>
          <Button variant="ghost" as={Link} href="/about">
            About
          </Button>
          <Button variant="ghost" as={Link} href="/groups">
            Groups
          </Button>
          <Button variant="outline" as={Link} href="/login">
            Login
          </Button>
          <Button colorScheme="blue" as={Link} href="/signup">
            Sign Up
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}