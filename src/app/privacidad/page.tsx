import type { Metadata } from "next";

import { PrivacyPage } from "@/components/landing/privacy-page";

export const metadata: Metadata = {
  title: "Política de privacidad · Immigra Canada",
  description:
    "Política de privacidad de Immigra Canada. Conoce cómo gestionamos tu información y tus derechos según la PIPEDA y la Loi 25 de Quebec.",
};

export default function Page() {
  return <PrivacyPage />;
}
