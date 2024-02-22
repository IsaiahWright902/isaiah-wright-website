import "./globals.css";
import type { Metadata } from "next";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { AppStateProvider } from "@/store/store";

export const metadata: Metadata = {
  title: "Isaiah Wright - Portfolio",
  description: "Isaiah Wright Portfolio!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppStateProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </AppStateProvider>
      </body>
    </html>
  );
}
