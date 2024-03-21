import "./globals.css";
import type { Metadata } from "next";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { AppStateProvider } from "@/store/store";
import Init from "@/components/Init";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Isaiah Wright | Portfolio",
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
          <ThemeRegistry>
            <Toaster position="bottom-right" />
            <Init>{children}</Init>
          </ThemeRegistry>
        </AppStateProvider>
      </body>
    </html>
  );
}
