"use client";

import { startTransition, useState } from "react";
import { ArrowLeft } from "lucide-react";

import { type Language } from "@/content/immigra";
import { Logo } from "@/components/ui/logo";

type Section = { title: string; body: string[] };

type PrivacyCopy = {
  meta: string;
  updated: string;
  intro: string;
  sections: Section[];
};

const copy: Record<"es" | "fr", PrivacyCopy> = {
  es: {
    meta: "Política de privacidad",
    updated: "Última actualización: junio de 2026",
    intro:
      "En Immigra Canada respetamos tu privacidad. Esta política explica qué información recopilamos cuando visitas nuestro sitio, cómo la usamos y cuáles son tus derechos. Importante: este sitio no almacena ningún dato personal en bases de datos.",
    sections: [
      {
        title: "1. Quién es responsable",
        body: [
          "Immigra Canada es una agencia de acompañamiento migratorio que opera en Canadá. Puedes contactarnos en hola@immigracanada.ca para cualquier consulta relacionada con esta política.",
        ],
      },
      {
        title: "2. Qué información recopilamos",
        body: [
          "Este sitio no cuenta con formularios de registro, cuentas de usuario ni bases de datos. No guardamos ningún dato personal en servidores propios.",
          "Almacenamos en tu dispositivo (localStorage) únicamente dos preferencias técnicas: tu idioma seleccionado (ES o FR) y tu decisión sobre el uso de cookies. Estos datos nunca salen de tu navegador.",
          "Si nos escribes directamente al correo electrónico que aparece en el sitio, esa comunicación queda en tu cliente de correo y en el nuestro, sujeta a las políticas de privacidad de tu proveedor de correo.",
        ],
      },
      {
        title: "3. Cookies",
        body: [
          "Usamos cookies estrictamente necesarias para el funcionamiento del sitio (preferencia de idioma y consentimiento). No instalamos cookies de rastreo, publicidad ni analítica de terceros sin tu consentimiento previo.",
          "Puedes revocar tu consentimiento en cualquier momento borrando las cookies del sitio desde la configuración de tu navegador. Al hacerlo, volverá a aparecer el aviso de cookies.",
        ],
      },
      {
        title: "4. Servicios de terceros",
        body: [
          "El sitio puede estar alojado en plataformas de terceros (por ejemplo Vercel). Estos proveedores pueden procesar metadatos técnicos (dirección IP, navegador, sistema operativo) para garantizar el funcionamiento del servicio. Consulta sus propias políticas de privacidad para más detalles.",
          "No integramos herramientas de analítica, píxeles de redes sociales ni publicidad programática.",
        ],
      },
      {
        title: "5. Tus derechos",
        body: [
          "De acuerdo con la Ley de Protección de Información Personal y Documentos Electrónicos (PIPEDA) de Canadá y, para residentes de Quebec, con la Loi 25, tienes derecho a:",
          "• Saber qué información personal tenemos sobre ti.",
          "• Solicitar la corrección de datos inexactos.",
          "• Solicitar la eliminación de tus datos (derecho al olvido).",
          "• Retirar tu consentimiento en cualquier momento.",
          "Como este sitio no almacena datos personales en servidores propios, el ejercicio de estos derechos se limita a las preferencias guardadas en tu propio dispositivo, que puedes eliminar directamente desde tu navegador.",
        ],
      },
      {
        title: "6. Menores de edad",
        body: [
          "Este sitio no está dirigido a personas menores de 14 años y no recopilamos conscientemente información de menores.",
        ],
      },
      {
        title: "7. Cambios a esta política",
        body: [
          "Podemos actualizar esta política ocasionalmente. La fecha de la última actualización aparece al inicio del documento. Te recomendamos revisarla periódicamente.",
        ],
      },
      {
        title: "8. Contacto",
        body: [
          "Si tienes preguntas sobre esta política o deseas ejercer tus derechos, escríbenos a hola@immigracanada.ca. Respondemos en un plazo máximo de 30 días.",
        ],
      },
    ],
  },
  fr: {
    meta: "Politique de confidentialité",
    updated: "Dernière mise à jour : juin 2026",
    intro:
      "Chez Immigra Canada, nous respectons votre vie privée. Cette politique explique quelles informations nous recueillons lorsque vous visitez notre site, comment nous les utilisons et quels sont vos droits. Important : ce site ne stocke aucune donnée personnelle dans des bases de données.",
    sections: [
      {
        title: "1. Responsable du traitement",
        body: [
          "Immigra Canada est une agence d'accompagnement en immigration qui opère au Canada. Vous pouvez nous contacter à bonjour@immigracanada.ca pour toute question relative à cette politique.",
        ],
      },
      {
        title: "2. Informations que nous recueillons",
        body: [
          "Ce site ne dispose pas de formulaires d'inscription, de comptes utilisateurs ni de bases de données. Nous ne stockons aucune donnée personnelle sur nos propres serveurs.",
          "Nous enregistrons sur votre appareil (localStorage) uniquement deux préférences techniques : votre langue sélectionnée (ES ou FR) et votre décision concernant l'utilisation des cookies. Ces données ne quittent jamais votre navigateur.",
          "Si vous nous écrivez directement à l'adresse courriel indiquée sur le site, cette communication reste dans votre client de messagerie et dans le nôtre, soumise aux politiques de confidentialité de votre fournisseur de courriel.",
        ],
      },
      {
        title: "3. Cookies",
        body: [
          "Nous utilisons des cookies strictement nécessaires au fonctionnement du site (préférence de langue et consentement). Nous n'installons pas de cookies de suivi, de publicité ni d'analytique tierce sans votre consentement préalable.",
          "Vous pouvez révoquer votre consentement à tout moment en supprimant les cookies du site depuis les paramètres de votre navigateur. Le bandeau de cookies réapparaîtra alors.",
        ],
      },
      {
        title: "4. Services tiers",
        body: [
          "Le site peut être hébergé sur des plateformes tierces (par exemple Vercel). Ces fournisseurs peuvent traiter des métadonnées techniques (adresse IP, navigateur, système d'exploitation) pour assurer le fonctionnement du service. Consultez leurs propres politiques de confidentialité pour plus de détails.",
          "Nous n'intégrons pas d'outils d'analytique, de pixels de réseaux sociaux ni de publicité programmatique.",
        ],
      },
      {
        title: "5. Vos droits",
        body: [
          "Conformément à la Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE) du Canada et, pour les résidents du Québec, à la Loi 25, vous avez le droit de :",
          "• Savoir quels renseignements personnels nous détenons à votre sujet.",
          "• Demander la correction de données inexactes.",
          "• Demander la suppression de vos données (droit à l'oubli).",
          "• Retirer votre consentement à tout moment.",
          "Comme ce site ne stocke pas de données personnelles sur ses propres serveurs, l'exercice de ces droits se limite aux préférences enregistrées sur votre propre appareil, que vous pouvez supprimer directement depuis votre navigateur.",
        ],
      },
      {
        title: "6. Mineurs",
        body: [
          "Ce site ne s'adresse pas aux personnes de moins de 14 ans et nous ne collectons pas sciemment d'informations les concernant.",
        ],
      },
      {
        title: "7. Modifications de cette politique",
        body: [
          "Nous pouvons mettre à jour cette politique occasionnellement. La date de la dernière mise à jour figure en haut du document. Nous vous recommandons de la consulter régulièrement.",
        ],
      },
      {
        title: "8. Contact",
        body: [
          "Si vous avez des questions sur cette politique ou souhaitez exercer vos droits, écrivez-nous à bonjour@immigracanada.ca. Nous répondons dans un délai maximum de 30 jours.",
        ],
      },
    ],
  },
};

export function PrivacyPage() {
  const [language, setLanguage] = useState<"es" | "fr">(() => {
    if (typeof window === "undefined") return "es";
    const stored = window.localStorage.getItem("ic_lang");
    return stored === "fr" ? "fr" : "es";
  });

  const c = copy[language];

  return (
    <>
      <nav className="priv-nav">
        <div className="wrap priv-nav-inner">
          <Logo />
          <div className="lang" role="group" aria-label="Language">
            {(["es", "fr"] as const).map((item) => (
              <button
                key={item}
                type="button"
                className={language === item ? "active" : ""}
                onClick={() =>
                  startTransition(() => {
                    setLanguage(item);
                    window.localStorage.setItem("ic_lang", item);
                  })
                }
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="priv-main">
        <div className="wrap priv-wrap">
          <a href="/" className="priv-back">
            <ArrowLeft size={16} />
            {language === "es" ? "Volver al inicio" : "Retour à l'accueil"}
          </a>

          <h1 className="priv-title">{c.meta}</h1>
          <p className="priv-updated">{c.updated}</p>
          <p className="priv-intro">{c.intro}</p>

          <div className="priv-sections">
            {c.sections.map((s) => (
              <section key={s.title} className="priv-section">
                <h2>{s.title}</h2>
                {s.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>

      <footer className="priv-footer">
        <div className="wrap">
          <span>© {new Date().getFullYear()} Immigra Canada</span>
          <a href="/">
            {language === "es" ? "Volver al inicio" : "Retour à l'accueil"}
          </a>
        </div>
      </footer>
    </>
  );
}
