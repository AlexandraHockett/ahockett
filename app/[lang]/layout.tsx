// app/[lang]/layout.tsx
import { getDictionary } from "@/app/i18n/dictionary";
import { getValidatedLocale } from "@/app/i18n/handleParams";
import { Metadata } from "next";

type Props = {
  params: {
    lang: string;
  };
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const locale = getValidatedLocale(props.params.lang);
  const dict = await getDictionary(locale);

  return {
    title: `AHockett | ${dict.home.title}`,
    description: dict.home.subtitle,
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return <>{children}</>;
}
