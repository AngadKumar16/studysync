"use client";

import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Simple validation example
    if (!name || !email || !message) {
      toast({ title: "Please fill all fields.", status: "error", duration: 3000, isClosable: true });
      return;
    }
    toast({ title: "Message sent! We'll get back to you soon.", status: "success", duration: 3000, isClosable: true });
    setName(""); setEmail(""); setMessage("");
  }

  return (
    <Box px={6} py={10} maxW="4xl" mx="auto">
      <Heading size="2xl" mb={6}>Contact Us</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4} isRequired>
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />
        </FormControl>
        <FormControl id="email" mb={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
        </FormControl>
        <FormControl id="message" mb={6} isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Write your message here" />
        </FormControl>
        <Button type="submit" colorScheme="blue">Send Message</Button>
      </form>
    </Box>
  );
}
