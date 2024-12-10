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
          </span>{" "}
          {t("hero_subtitle")}
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">{t("hero_description")}</p>
        <div className="flex flex-wrap justify-center">
          <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
            {t("get_started_button")}
          </button>
          <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-900 dark:border-gray-300">
            {t("learn_more_button")}
          </button>
        </div>
      </div>
    </section>
  );
}
