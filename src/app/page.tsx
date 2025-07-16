"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  SimpleGrid,
  Stack,
  useColorModeValue,
  Badge,
  List,
  ListItem,
} from "@chakra-ui/react";

export default function Home() {
  const cardBg = useColorModeValue("white", "gray.800");
  const cardShadow = useColorModeValue("md", "dark-lg");

  const features = [
    ["Burnout-Aware Matching", "Our algorithm connects you with students who understand energy levels and productive schedules."],
    ["Mental Health Focus", "Groups include built-in wellness checks and mindfulness tools for managing stress and anxiety."],
    ["Flexible Scheduling", "Study sessions adapt to your energy levels. Join or create 24/7 time-zone based groups."],
    ["Goal-Oriented Sessions", "Small, achievable goals that promote momentum. Celebrate progress."],
    ["Accountability Without Pressure", "Gentle check-ins. Study buddies support your pace without added stress."],
    ["Subject-Specific Groups", "Join groups for STEM, humanities, and more. Get support tailored to your needs."],
  ];

  const tiers = [
    {
      title: "Explorer",
      price: "Free",
      features: [
        "Join up to 3 study groups",
        "Burnout-matching algorithm",
        "Group chat access",
        "Weekly wellness check-ins",
        "Study goal tracking",
        "Community forum access",
      ],
      buttonText: "Get Started Free",
    },
    {
      title: "Connector",
      price: "$12",
      subtitle: "Most Popular",
      features: [
        "Join unlimited study groups",
        "1-on-1 wellness coaching",
        "AI-based video summaries",
        "Personalized wellness dashboard",
        "Priority group connections",
        "Study streak rewards",
      ],
      buttonText: "Start 7-Day Trial",
    },
    {
      title: "Thriver",
      price: "$25",
      features: [
        "Everything in Connector",
        "AI weekly academic planner",
        "Advanced analytics & insights",
        "Exclusive wellness webinars",
        "Monthly mentor check-ins",
      ],
      buttonText: "Upgrade to Thriver",
    },
  ];

  return (
    <Box bgGradient="linear(to-br, blue.100, purple.100)" minH="100vh" py={10}>
      {/* Header */}
      <VStack spacing={6} textAlign="center" px={4} maxW="4xl" mx="auto" py={10}>
        <Heading size="2xl">Beat Burnout Together</Heading>
        <Text fontSize="xl">
          Join study groups designed for students struggling with mental fatigue.
          Find your tribe, share the load, and reclaim your academic joy.
        </Text>
        <Stack direction={{ base: "column", md: "row" }} spacing={4}>
          <Button colorScheme="blue">Find Your Study Group</Button>
          <Button variant="outline" colorScheme="blue">
            Learn More
          </Button>
        </Stack>
      </VStack>

      {/* Why It Works */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} maxW="6xl" mx="auto" px={4} py={10}>
        {features.map(([title, desc], i) => (
          <Box key={i} bg={cardBg} shadow={cardShadow} rounded="2xl" p={6}>
            <Heading size="md" mb={2}>
              {title}
            </Heading>
            <Text fontSize="sm" color="gray.600">
              {desc}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      {/* Pricing */}
      <Box bg="white" _dark={{ bg: "gray.900" }} py={16} px={4}>
        <Heading size="xl" textAlign="center" mb={12}>
          Choose Your Support Level
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} maxW="5xl" mx="auto">
          {tiers.map(({ title, price, subtitle, features, buttonText }, i) => (
            <Box
              key={i}
              borderWidth="1px"
              borderRadius="2xl"
              p={6}
              shadow="sm"
              _hover={{ shadow: "lg" }}
              transition="all 0.2s"
            >
              {subtitle && (
                <Badge colorScheme="blue" mb={2}>
                  {subtitle}
                </Badge>
              )}
              <Heading size="lg" mb={2}>
                {title}
              </Heading>
              <Text fontSize="3xl" fontWeight="bold" mb={4}>
                {price}
              </Text>
              <List spacing={2} fontSize="sm" color="gray.700" mb={6}>
                {features.map((feature, j) => (
                  <ListItem key={j}>✅ {feature}</ListItem>
                ))}
              </List>
              <Button variant="outline" colorScheme="blue" width="full">
                {buttonText}
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={10} px={6}>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} maxW="6xl" mx="auto">
          <Box>
            <Text fontWeight="semibold" mb={3}>
              Quick Links
            </Text>
            <VStack align="start" spacing={1} fontSize="sm">
              <Text>How It Works</Text>
              <Text>Success Stories</Text>
              <Text>Mental Health Resources</Text>
              <Text>Blog</Text>
            </VStack>
          </Box>
          <Box>
            <Text fontWeight="semibold" mb={3}>
              Support
            </Text>
            <VStack align="start" spacing={1} fontSize="sm">
              <Text>Help Center</Text>
              <Text>Contact Us</Text>
              <Text>Privacy Policy</Text>
              <Text>Terms of Service</Text>
            </VStack>
          </Box>
          <Box gridColumn={{ base: "1 / -1", md: "3 / span 2" }}>
            <Text fontSize="sm" textAlign="center">
              © 2025 StudySync.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
