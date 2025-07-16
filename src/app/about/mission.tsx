"use client";

import { Box, Heading, Text } from "@chakra-ui/react";

export default function MissionPage() {
  return (
    <Box px={6} py={10} maxW="4xl" mx="auto" textAlign="center">
      <Heading size="2xl" mb={6}>Our Mission & Vision</Heading>
      <Text fontSize="lg" mb={4}>
        Our mission is to empower students to overcome burnout and mental fatigue by creating supportive, goal-oriented, and mindful study communities.
      </Text>
      <Text fontSize="lg" mb={4}>
        We envision a future where academic success is balanced with mental wellness, and students feel supported every step of their journey.
      </Text>
    </Box>
  );
}
