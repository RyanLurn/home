/// <reference types="vite/client" />

import type { ReactNode } from "react";

import {
  createRootRoute,
  HeadContent,
  ScriptOnce,
  Scripts,
} from "@tanstack/react-router";
import { ModeToggle } from "@home/ui/features/theme/components/mode-toggle";
import { ThemeProvider } from "@home/ui/features/theme/components/provider";
import { themeScript } from "@home/ui/features/theme/script";
import { Toaster } from "@home/ui/components/toaster";

import styles from "@/globals.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        content: "width=device-width, initial-scale=1",
        name: "viewport",
      },
      {
        title: "Home",
      },
    ],
    links: [
      { rel: "stylesheet", href: styles },
      { type: "image/svg+xml", href: "/favicon.svg", rel: "icon" },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <ScriptOnce children={themeScript} />
        <ThemeProvider>
          <Toaster position="top-center" closeButton richColors />
          {children}
          <ModeToggle className="fixed top-3 right-3 z-50" />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}
