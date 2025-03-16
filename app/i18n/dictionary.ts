// app/i18n/dictionary.ts
import "server-only";

type Dictionary = {
  [key: string]: any;
};

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  pt: () => import("./dictionaries/pt.json").then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  return dictionaries[locale]?.() ?? dictionaries.pt();
};
