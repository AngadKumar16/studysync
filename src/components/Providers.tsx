"use client";

import { ChakraProvider, localStorageManager } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [colorModeManager, setColorModeManager] = useState<typeof localStorageManager | undefined>(undefined);

  useEffect(() => {
    setColorModeManager(localStorageManager);
  }, []);

  if (!colorModeManager) return null;

  return (
    <ChakraProvider colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}
