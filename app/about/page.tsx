import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold md:text-5xl">{t("title")}</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          {/* Features Item */}
          <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
            <h3 className="text-xl font-semibold">{t("features.0.title")}</h3>
            <p className="text-sm text-gray-500">
              {t("features.0.description")}
            </p>
          </div>
          {/* Features Item */}
          <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
            <h3 className="text-xl font-semibold">{t("features.1.title")}</h3>
            <p className="text-sm text-gray-500">
              {t("features.1.description")}
            </p>
          </div>
          {/* Features Item */}
          <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
            <h3 className="text-xl font-semibold">{t("features.2.title")}</h3>
            <p className="text-sm text-gray-500">
              {t("features.2.description")}
            </p>
          </div>
          {/* Features Item */}
          <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
            <h3 className="text-xl font-semibold">{t("features.3.title")}</h3>
            <p className="text-sm text-gray-500">
              {t("features.3.description")}
            </p>
          </div>
          {/* Features Item */}
          <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
            <h3 className="text-xl font-semibold">{t("features.4.title")}</h3>
            <p className="text-sm text-gray-500">
              {t("features.4.description")}
            </p>
          </div>
          {/* Features Item */}
          <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
            <h3 className="text-xl font-semibold">{t("features.5.title")}</h3>
            <p className="text-sm text-gray-500">
              {t("features.5.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
