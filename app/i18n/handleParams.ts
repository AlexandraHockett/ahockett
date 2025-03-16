// app/i18n/handleParams.ts
import { languages, defaultLanguage } from "./settings";

export function getValidatedLocale(langParam: string | undefined): string {
  if (!langParam || !languages.includes(langParam)) {
    return defaultLanguage;
  }
  return langParam;
}
