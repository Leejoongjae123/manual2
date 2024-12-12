
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <section className="dark:text-gray-800">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-6xl leading-10">
        <h1 className="text-4xl font-bold sm:text-5xl">
          {t("hero_title")} <br />
          <span className="dark:text-violet-600">
            {t("highlighted_text")}
          </span>
        </h1>
        
      </div>
    </section>
  );
}
