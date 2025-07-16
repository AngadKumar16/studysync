"use client";

import { Box, VStack, Text, HStack, Circle } from "@chakra-ui/react";

interface TimelineStep {
  title: string;
  description?: string;
  date: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <VStack align="start" spacing={6} mt={10} borderLeft="2px solid" borderColor="gray.300" pl={6}>
      {steps.map((step, index) => (
        <HStack key={index} align="start" spacing={4} position="relative">
          <Circle size={3} bg="blue.500" position="absolute" left="-30px" top="6px" />
          <Box>
            <Text fontSize="sm" color="gray.500">{step.date}</Text>
            <Text fontWeight="bold" fontSize="md">{step.title}</Text>
            {step.description && (
              <Text fontSize="sm" color="gray.600">{step.description}</Text>
            )}
          </Box>
        </HStack>
      ))}
    </VStack>
  );
}
