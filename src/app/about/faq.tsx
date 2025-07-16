"use client";

import { Box, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text } from "@chakra-ui/react";

export default function FAQPage() {
  const faqs = [
    {
      question: "Who can join StudySync groups?",
      answer: "Any student looking for study groups tailored to support mental wellness and productivity can join.",
    },
    {
      question: "Is StudySync free?",
      answer: "Yes! We offer free and paid plans to best suit your needs.",
    },
    {
      question: "How do I find a study group?",
      answer: "Use the 'Find Your Study Group' button on the home page or join groups listed under the Groups tab.",
    },
  ];

  return (
    <Box px={6} py={10} maxW="4xl" mx="auto">
      <Heading size="2xl" mb={6}>Frequently Asked Questions</Heading>
      <Accordion allowToggle>
        {faqs.map(({ question, answer }, i) => (
          <AccordionItem key={i} border="none" mb={4}>
            <AccordionButton _expanded={{ bg: "blue.50" }}>
              <Text flex="1" textAlign="left" fontWeight="semibold">
                {question}
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>{answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}
