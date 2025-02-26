"use client";

import ActiveSectionContextProvider from "./active-section";
import ThemeContextProvider from "./theme-context";
import React from "react";

type ProvidersProps = {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        {children}
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
}