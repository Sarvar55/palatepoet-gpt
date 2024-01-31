"use client";
import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

interface ProvidersProps {
  children: ReactNode;
}

export default function CustomThemeProvider({ children }: ProvidersProps) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class" enableSystem={true}>
      {children}
    </ThemeProvider>
  );
}
