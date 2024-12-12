import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { NextUIProvider } from "@nextui-org/react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextUIProvider>
          <NextIntlClientProvider messages={messages}>
            <Navbar>{children}</Navbar>
          </NextIntlClientProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
