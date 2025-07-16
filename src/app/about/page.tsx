"use client";

import { Box, Heading, Text, SimpleGrid, Link as ChakraLink } from "@chakra-ui/react";
import Timeline from "@/components/Timeline";
import Link from "next/link";

export default function AboutPage() {
  const timelineSteps = [
    { title: "Idea", date: "7/11" },
    { title: "First Model", date: "7/14" },
  ];

  return (
    <Box px={6} py={10} maxW="6xl" mx="auto">
      <Heading size="2xl" mb={4}>About StudySync</Heading>
      <Text fontSize="lg" color="gray.700" mb={8}>
        StudySync was built to support students facing burnout and mental fatigue. Our goal is to create a collaborative and mindful space for academic growth.
      </Text>

      <Heading size="lg" mb={4}>Creators</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={10}>
        <Box bg="gray.100" _dark={{ bg: "gray.700" }} p={6} rounded="md">
          <Text fontWeight="bold" fontSize="xl">Angad Kumar</Text>
          <Text fontSize="sm" color="gray.600">Developer, Designer, Vision Architect</Text>
        </Box>
        <Box bg="gray.100" _dark={{ bg: "gray.700" }} p={6} rounded="md">
          <Text fontWeight="bold" fontSize="xl">Ravjeer Singh</Text>
          <Text fontSize="sm" color="gray.600">Technical Advisor, UI Reviewer</Text>
        </Box>
      </SimpleGrid>

      <Heading size="lg" mb={4}>Explore More</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={10}>
        <ChakraLink as={Link} href="/about/team" color="blue.500" fontWeight="semibold" _hover={{ textDecoration: "underline" }}>
          Team Details
        </ChakraLink>
        <ChakraLink as={Link} href="/about/mission" color="blue.500" fontWeight="semibold" _hover={{ textDecoration: "underline" }}>
          Mission & Vision
        </ChakraLink>
        <ChakraLink as={Link} href="/about/tech-stack" color="blue.500" fontWeight="semibold" _hover={{ textDecoration: "underline" }}>
          Tech Stack
        </ChakraLink>
        <ChakraLink as={Link} href="/about/faq" color="blue.500" fontWeight="semibold" _hover={{ textDecoration: "underline" }}>
          FAQs
        </ChakraLink>
        <ChakraLink as={Link} href="/about/contact" color="blue.500" fontWeight="semibold" _hover={{ textDecoration: "underline" }}>
          Contact
        </ChakraLink>
      </SimpleGrid>

      <Heading size="lg" mb={4}>Timeline</Heading>
      <Timeline steps={timelineSteps} />
    </Box>
  );
}
