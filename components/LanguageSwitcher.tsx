"use client";

import { usePathname, useRouter } from "next/navigation";
import { languages } from "../app/i18n/settings";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  // Obter o idioma atual do início do pathname
  const currentLang = pathname.split("/")[1];

  const handleLanguageChange = (newLang: string) => {
    // Para alternar apenas o idioma, ignorando o resto do caminho por enquanto
    // já que estamos usando rotas fixas
    router.push(`/${newLang}`);
  };

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang}
          className={`px-3 py-1 rounded ${
            currentLang === lang ? "bg-indigo-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleLanguageChange(lang)}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
