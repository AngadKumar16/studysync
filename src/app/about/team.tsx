"use client";

import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

export default function TeamPage() {
  return (
    <Box px={6} py={10} maxW="6xl" mx="auto">
      <Heading size="2xl" mb={6}>Our Team</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <Box bg="gray.100" _dark={{ bg: "gray.700" }} p={6} rounded="md">
          <Heading size="lg" mb={2}>Angad Kumar</Heading>
          <Text mb={2}>
            Developer, Designer, and Vision Architect. Passionate about building apps that improve student wellness.
          </Text>
          <Text fontSize="sm" color="gray.600">Interests: React, AI, mental health tech</Text>
        </Box>
        <Box bg="gray.100" _dark={{ bg: "gray.700" }} p={6} rounded="md">
          <Heading size="lg" mb={2}>Ravjeer Singh</Heading>
          <Text mb={2}>
            Technical Advisor and UI Reviewer. Focuses on creating seamless and accessible user experiences.
          </Text>
          <Text fontSize="sm" color="gray.600">Interests: UX design, accessibility, frontend architecture</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
