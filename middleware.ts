// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { languages, defaultLanguage } from "./app/i18n/settings";

function getLocale(request: NextRequest): string {
  const headers = Object.fromEntries(request.headers.entries());
  const negotiatorHeaders = {
    "accept-language": headers["accept-language"] || "",
  };
  const locales = [...languages];

  try {
    const negotiator = new Negotiator({ headers: negotiatorHeaders });
    return match(negotiator.languages(), locales, defaultLanguage);
  } catch (e) {
    return defaultLanguage;
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Ignorar assets e APIs
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return;
  }

  // Se o pathname já começa com um locale válido, não fazer nada
  if (
    languages.some(
      (locale) =>
        pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    )
  ) {
    return;
  }

  // Se estamos na raiz (/), redirecionar para o locale padrão
  const locale = getLocale(request);
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
