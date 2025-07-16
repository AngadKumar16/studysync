"use client";

import { Box, Heading, Text, SimpleGrid} from "@chakra-ui/react";
import Timeline from "@/components/Timeline";

export default function AboutPage() {
  const timelineSteps = [
    { title: "Idea", date: "7/11" },
    { title: "First Model", date: "7/14" },
  ];

  return (
    <Box px={6} py={10} maxW="6xl" mx="auto">
      <Heading size="2xl" mb={4}>About StudySync</Heading>
      <Text fontSize="lg" color="gray.700" mb={8}>
        StudySync was built to support students facing burnout and mental fatigue. Our goal is to create a collaborative and mindful space for academic growth — one that's designed around energy levels, mental wellness, and productivity.
      </Text>

      <Heading size="lg" mb={4}>Creators</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={10}>
        <Box bg="gray.100" _dark={{ bg: "gray.700" }} p={6} rounded="md">
          <Text fontWeight="bold" fontSize="xl">Angad Kumar</Text>
          <Text fontSize="sm" color="gray.600">Developer, Co-founder</Text>
        </Box>
        <Box bg="gray.100" _dark={{ bg: "gray.700" }} p={6} rounded="md">
          <Text fontWeight="bold" fontSize="xl">Ravjeer Singh</Text>
          <Text fontSize="sm" color="gray.600">Technical Advisor, Co-founder</Text>
        </Box>
      </SimpleGrid>

      <Heading size="lg" mb={4}>Timeline</Heading>
      <Timeline steps={timelineSteps} />
    </Box>
  );
}
