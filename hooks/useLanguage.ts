import { useRouter } from "next/router";

export function useLanguage() {
  const { locale } = useRouter();
  return locale === "it";
}
