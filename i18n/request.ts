import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const cookieStore = await cookies();
  const locale = cookieStore.get("language")?.value || "kr";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
