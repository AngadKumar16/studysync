"use client";

import { Box, Heading, Input, Button, VStack } from "@chakra-ui/react";

export default function SignupPage() {
  return (
    <Box maxW="sm" mx="auto" mt={20} p={6} shadow="md" borderRadius="md" bg="white">
      <Heading mb={6} size="lg" textAlign="center">Create Account</Heading>
      <VStack spacing={4}>
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
        <Button colorScheme="blue" width="full">Sign Up</Button>
      </VStack>
    </Box>
  );
}
