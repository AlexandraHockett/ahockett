import { getDictionary } from "../i18n/dictionary";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default async function HomeEN() {
  const dict = await getDictionary("en");

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="flex justify-end mb-4">
        <LanguageSwitcher />
      </div>

      <h1 className="text-5xl font-display font-bold mb-6">
        {dict.home.title}
      </h1>

      <p className="text-xl mb-8">{dict.home.subtitle}</p>

      <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg">
        {dict.home.cta}
      </button>
    </main>
  );
}
