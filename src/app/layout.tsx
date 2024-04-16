import "./globals.css";
import type { Metadata } from "next";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { AppStateProvider } from "@/store/store";
import Init from "@/components/Init";
import { Toaster } from "react-hot-toast";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
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
