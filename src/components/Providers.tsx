"use client";

import { ChakraProvider, localStorageManager } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [colorModeManager, setColorModeManager] = useState(undefined);

  useEffect(() => {
    //Local Storage Wait
    setColorModeManager(localStorageManager);
  }, []);

  // Don't render anything until we know how to manage color mode
  if (!colorModeManager) return null;

  return (
    <ChakraProvider colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}
