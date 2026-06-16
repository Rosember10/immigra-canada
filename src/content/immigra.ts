export type Language = "es" | "en" | "fr";

type ServiceKey =
  | "visitor"
  | "residency"
  | "refugee"
  | "work"
  | "study"
  | "citizenship"
  | "passport"
  | "travel";

type Translation = {
  code: string;
  cookies: {
    title: string;
    desc: string;
    accept: string;
    essential: string;
    policy: string;
  };
  nav: {
    story: string;
    services: string;
    process: string;
    why: string;
    faq: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    sub: string;
    cta1: string;
    cta2: string;
    t1: string;
    t2: string;
    t3: string;
    loc: string;
  };
  founder: {
    eyebrow: string;
    quote: string;
    b1: string;
    b2: string;
    name: string;
    role: string;
  };
  services: {
    eyebrow: string;
    title: string;
    sub: string;
    items: Array<{
      k: ServiceKey;
      t: string;
      d: string;
    }>;
  };
  process: {
    eyebrow: string;
    title: string;
    sub: string;
    steps: Array<{
      t: string;
      d: string;
    }>;
  };
  why: {
    eyebrow: string;
    title: string;
    items: Array<{
      t: string;
      d: string;
    }>;
  };
  assess: {
    eyebrow: string;
    title: string;
    sub: string;
    cta: string;
    points: string[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    sub: string;
    items: Array<{
      q: string;
      n: string;
      m: string;
    }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{
      q: string;
      a: string;
    }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    sub: string;
    name: string;
    email: string;
    phone: string;
    interest: string;
    message: string;
    send: string;
    sent: string;
    ways: string;
    whatsapp: string;
    emailLabel: string;
    book: string;
    whatsappVal: string;
    emailVal: string;
    bookVal: string;
  };
  footer: {
    tagline: string;
    colServ: string;
    colCompany: string;
    colContact: string;
    company: string[];
    disclaimer: string;
    rights: string;
  };
};

export const translations: Record<Language, Translation> = {
  es: {
    code: "ES",
    cookies: {
      title: "Usamos cookies",
      desc: "Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y personalizar el contenido conforme a nuestra política de privacidad.",
      accept: "Aceptar todo",
      essential: "Solo esenciales",
      policy: "Política de privacidad",
    },
    nav: {
      story: "Nuestra historia",
      services: "Servicios",
      process: "Cómo trabajamos",
      why: "Por qué elegirnos",
      faq: "Preguntas",
      contact: "Contacto",
      cta: "Evaluación gratuita",
    },
    hero: {
      eyebrow: "Acompañamiento migratorio · Canadá",
      title: "Tu proyecto migratorio merece una guía clara y bien estructurada.",
      sub: "Te ayudamos a preparar una solicitud completa, organizada y profesional para inmigrar a Canadá.",
      cta1: "Evaluación gratuita",
      cta2: "Contáctanos",
      t1: "Atención en español y francés",
      t2: "Acompañamiento humano",
      t3: "Documentación organizada",
      loc: "Atendemos a familias en toda Canadá",
    },
    founder: {
      eyebrow: "Nuestra historia",
      quote: "Llegué a Canadá con muchas preguntas y sin una guía clara.",
      b1: "Sé lo que se siente empezar de cero en un país nuevo: los formularios, los plazos, el miedo a un error que retrase todo. Nadie debería atravesar ese proceso en soledad.",
      b2: "Por eso creé Immigra Canada: para ofrecer el acompañamiento ordenado, humano y honesto que a mí me hubiera gustado tener. Hoy ayudamos a familias, estudiantes y trabajadores a presentar su mejor solicitud, con confianza.",
      name: "Fundador de Immigra Canada",
      role: "Llegó como inmigrante, hoy guía a otros",
    },
    services: {
      eyebrow: "Servicios",
      title: "Apoyo para cada etapa de tu camino",
      sub: "No somos un bufete de abogados. Somos tu equipo de organización y preparación, paso a paso.",
      items: [
        {
          k: "visitor",
          t: "Visa de visitante",
          d: "Para visitar familia, turismo o negocios temporales en Canadá.",
        },
        {
          k: "residency",
          t: "Residencia permanente",
          d: "Programas federales y provinciales para construir tu futuro aquí.",
        },
        {
          k: "refugee",
          t: "Solicitudes de refugio",
          d: "Acompañamiento sensible y confidencial en cada paso del proceso.",
        },
        {
          k: "work",
          t: "Permiso de trabajo",
          d: "Prepara tu solicitud laboral de forma sólida y profesional.",
        },
        {
          k: "study",
          t: "Permiso de estudios",
          d: "Para estudiantes internacionales que eligen Canadá.",
        },
        {
          k: "citizenship",
          t: "Ciudadanía",
          d: "Da el último paso hacia tu vida como ciudadano canadiense.",
        },
        {
          k: "passport",
          t: "Pasaporte canadiense",
          d: "Trámite ordenado de tu pasaporte una vez obtienes la ciudadanía.",
        },
        {
          k: "travel",
          t: "Documento de viaje",
          d: "Apoyo con documentos de viaje para residentes y refugiados.",
        },
      ],
    },
    process: {
      eyebrow: "Cómo trabajamos",
      title: "Un proceso claro, en tres pasos",
      sub: "Sin sorpresas. Sabes exactamente dónde estás y qué sigue.",
      steps: [
        {
          t: "Consulta",
          d: "Escuchamos tu historia y revisamos tu situación para entender tus opciones reales.",
        },
        {
          t: "Preparación",
          d: "Organizamos cada documento y formulario con cuidado, revisando cada detalle contigo.",
        },
        {
          t: "Presentación",
          d: "Presentamos una solicitud completa y profesional, y te acompañamos hasta la respuesta.",
        },
      ],
    },
    why: {
      eyebrow: "Por qué elegirnos",
      title: "Acompañamiento en el que puedes confiar",
      items: [
        {
          t: "Apoyo personalizado",
          d: "Cada caso es único. Te escuchamos y adaptamos el proceso a tu familia.",
        },
        {
          t: "Organización profesional",
          d: "Documentación clara, ordenada y lista para presentar, sin errores evitables.",
        },
        {
          t: "Comunicación transparente",
          d: "Te explicamos todo con honestidad: tiempos, costos y posibilidades reales.",
        },
        {
          t: "Servicio en español y francés",
          d: "Hablamos tu idioma, para que nada se pierda en la traducción.",
        },
      ],
    },
    assess: {
      eyebrow: "Evaluación gratuita",
      title: "Descubre tus opciones.",
      sub: "En una primera conversación sin costo, revisamos tu situación y te decimos con honestidad qué caminos tienes hacia Canadá.",
      cta: "Solicitar mi evaluación gratuita",
      points: ["Sin compromiso", "Confidencial", "Respuesta clara en 48h"],
    },
    testimonials: {
      eyebrow: "Familias acompañadas",
      title: "Historias de quienes ya dieron el paso",
      sub: "Sus palabras reflejan nuestro compromiso con la honestidad, la cercanía y los resultados que perduran.",
      items: [
        {
          q: "Por fin sentí que alguien entendía mi situación. Todo estuvo ordenado y nunca me sentí sola en el proceso.",
          n: "Mariana G.",
          m: "Residencia permanente · de Colombia",
        },
        {
          q: "Me explicaron cada documento con paciencia. Llegué a Canadá con mi familia y con mucha tranquilidad.",
          n: "Yassine B.",
          m: "Permiso de trabajo · de Marruecos",
        },
        {
          q: "Como estudiante estaba perdido con los formularios. Su acompañamiento hizo que todo fuera claro.",
          n: "Diego R.",
          m: "Permiso de estudios · de Perú",
        },
        {
          q: "Guiaron la residencia de toda nuestra familia. Hoy estamos juntos en Canadá, profundamente agradecidos.",
          n: "Familia Okonkwo",
          m: "Residencia familiar · de Nigeria",
        },
      ],
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Lo que probablemente te estás preguntando",
      items: [
        {
          q: "¿Son abogados?",
          a: "No. Immigra Canada es una agencia de acompañamiento y organización migratoria. Te ayudamos a preparar una solicitud completa, ordenada y profesional. Para asesoría legal específica, podemos orientarte hacia un profesional regulado.",
        },
        {
          q: "¿En qué idiomas atienden?",
          a: "Atendemos en español, francés e inglés, para que entiendas cada paso del proceso en tu propio idioma.",
        },
        {
          q: "¿Cuánto cuesta empezar?",
          a: "La primera evaluación es gratuita y sin compromiso. Después te presentamos un plan claro con costos transparentes, sin sorpresas.",
        },
        {
          q: "¿Cuánto tarda el proceso?",
          a: "Depende del programa y de tu situación. En la evaluación te damos tiempos realistas según tu caso, con total honestidad.",
        },
        {
          q: "¿Trabajan con familias completas?",
          a: "Sí. Acompañamos a familias, parejas, estudiantes y trabajadores. Organizamos la documentación de todos los integrantes.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos de tu futuro en Canadá",
      sub: "Cuéntanos tu situación. Te respondemos con un plan claro y los siguientes pasos.",
      name: "Nombre completo",
      email: "Correo electrónico",
      phone: "Teléfono / WhatsApp",
      interest: "Servicio de interés",
      message: "Cuéntanos brevemente tu situación",
      send: "Enviar y solicitar evaluación",
      sent: "¡Gracias! Te contactaremos muy pronto.",
      ways: "Otras formas de contacto",
      whatsapp: "WhatsApp",
      emailLabel: "Correo",
      book: "Agenda una consulta",
      whatsappVal: "+1 (000) 000-0000",
      emailVal: "hola@immigracanada.ca",
      bookVal: "Reserva en línea · 30 min",
    },
    footer: {
      tagline: "Acompañamiento migratorio humano, claro y profesional para tu nueva vida en Canadá.",
      colServ: "Servicios",
      colCompany: "Agencia",
      colContact: "Contacto",
      company: [
        "Nuestra historia",
        "Por qué elegirnos",
        "Preguntas frecuentes",
        "Evaluación gratuita",
      ],
      disclaimer:
        "Immigra Canada es una agencia de acompañamiento y preparación migratoria. No es un bufete de abogados ni una entidad gubernamental.",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    code: "EN",
    cookies: {
      title: "We use cookies",
      desc: "We use first-party and third-party cookies to improve your experience, analyze traffic and personalize content in accordance with our privacy policy.",
      accept: "Accept all",
      essential: "Essential only",
      policy: "Privacy policy",
    },
    nav: {
      story: "Our story",
      services: "Services",
      process: "How we work",
      why: "Why us",
      faq: "FAQ",
      contact: "Contact",
      cta: "Free assessment",
    },
    hero: {
      eyebrow: "Immigration support · Canada",
      title: "Your immigration project deserves clear, structured guidance.",
      sub: "We help you prepare a complete, organized and professional immigration application for Canada.",
      cta1: "Free assessment",
      cta2: "Contact us",
      t1: "Service in Spanish & French",
      t2: "Human guidance",
      t3: "Organized paperwork",
      loc: "Helping families across Canada",
    },
    founder: {
      eyebrow: "Our story",
      quote: "I arrived in Canada with many questions and no clear guidance.",
      b1: "I know what it feels like to start over in a new country — the forms, the deadlines, the fear of one mistake delaying everything. No one should go through that alone.",
      b2: "That's why I created Immigra Canada: to offer the orderly, human and honest support I wish I'd had. Today we help families, students and workers submit their strongest application, with confidence.",
      name: "Founder of Immigra Canada",
      role: "Arrived as an immigrant, now guides others",
    },
    services: {
      eyebrow: "Services",
      title: "Support for every stage of your journey",
      sub: "We're not a law firm. We're your organization and preparation team, step by step.",
      items: [
        {
          k: "visitor",
          t: "Visitor visa",
          d: "To visit family, for tourism or temporary business in Canada.",
        },
        {
          k: "residency",
          t: "Permanent residency",
          d: "Federal and provincial programs to build your future here.",
        },
        {
          k: "refugee",
          t: "Refugee claims",
          d: "Sensitive, confidential support at every step of the process.",
        },
        {
          k: "work",
          t: "Work permit",
          d: "Prepare a solid, professional work application.",
        },
        {
          k: "study",
          t: "Study permit",
          d: "For international students choosing Canada.",
        },
        {
          k: "citizenship",
          t: "Citizenship",
          d: "Take the final step toward life as a Canadian citizen.",
        },
        {
          k: "passport",
          t: "Canadian passport",
          d: "An orderly passport process once you obtain citizenship.",
        },
        {
          k: "travel",
          t: "Travel document",
          d: "Support with travel documents for residents and refugees.",
        },
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "A clear process, in three steps",
      sub: "No surprises. You always know where you stand and what comes next.",
      steps: [
        {
          t: "Consultation",
          d: "We listen to your story and review your situation to understand your real options.",
        },
        {
          t: "Preparation",
          d: "We organize every document and form with care, reviewing each detail with you.",
        },
        {
          t: "Submission",
          d: "We submit a complete, professional application and stay with you until the response.",
        },
      ],
    },
    why: {
      eyebrow: "Why choose us",
      title: "Guidance you can trust",
      items: [
        {
          t: "Personalized support",
          d: "Every case is unique. We listen and adapt the process to your family.",
        },
        {
          t: "Professional organization",
          d: "Clear, orderly paperwork ready to submit — without avoidable errors.",
        },
        {
          t: "Transparent communication",
          d: "We explain everything honestly: timelines, costs and real possibilities.",
        },
        {
          t: "Spanish & French service",
          d: "We speak your language, so nothing gets lost in translation.",
        },
      ],
    },
    assess: {
      eyebrow: "Free assessment",
      title: "Discover your options.",
      sub: "In a first no-cost conversation, we review your situation and tell you honestly which paths to Canada are open to you.",
      cta: "Request my free assessment",
      points: ["No obligation", "Confidential", "Clear answer in 48h"],
    },
    testimonials: {
      eyebrow: "Families we've guided",
      title: "Stories from those who took the step",
      sub: "Their words reflect our commitment to honesty, closeness and lasting results.",
      items: [
        {
          q: "I finally felt someone understood my situation. Everything was organized and I never felt alone in the process.",
          n: "Mariana G.",
          m: "Permanent residency · from Colombia",
        },
        {
          q: "They explained every document patiently. I arrived in Canada with my family and total peace of mind.",
          n: "Yassine B.",
          m: "Work permit · from Morocco",
        },
        {
          q: "As a student I was lost with the forms. Their guidance made everything clear.",
          n: "Diego R.",
          m: "Study permit · from Peru",
        },
        {
          q: "They guided our whole family's residency. Today we are together in Canada, deeply grateful.",
          n: "The Okonkwo family",
          m: "Family residency · from Nigeria",
        },
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "What you're probably wondering",
      items: [
        {
          q: "Are you lawyers?",
          a: "No. Immigra Canada is an immigration support and organization agency. We help you prepare a complete, orderly and professional application. For specific legal advice, we can point you to a regulated professional.",
        },
        {
          q: "What languages do you serve in?",
          a: "We serve in Spanish, French and English, so you understand every step of the process in your own language.",
        },
        {
          q: "How much does it cost to start?",
          a: "The first assessment is free and with no obligation. After that we present a clear plan with transparent costs — no surprises.",
        },
        {
          q: "How long does the process take?",
          a: "It depends on the program and your situation. In the assessment we give you realistic timelines for your case, with full honesty.",
        },
        {
          q: "Do you work with whole families?",
          a: "Yes. We guide families, couples, students and workers, and organize documentation for every member.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk about your future in Canada",
      sub: "Tell us your situation. We'll respond with a clear plan and the next steps.",
      name: "Full name",
      email: "Email",
      phone: "Phone / WhatsApp",
      interest: "Service of interest",
      message: "Briefly tell us your situation",
      send: "Send & request assessment",
      sent: "Thank you! We'll be in touch very soon.",
      ways: "Other ways to reach us",
      whatsapp: "WhatsApp",
      emailLabel: "Email",
      book: "Book a consultation",
      whatsappVal: "+1 (000) 000-0000",
      emailVal: "hello@immigracanada.ca",
      bookVal: "Book online · 30 min",
    },
    footer: {
      tagline: "Human, clear and professional immigration support for your new life in Canada.",
      colServ: "Services",
      colCompany: "Agency",
      colContact: "Contact",
      company: ["Our story", "Why choose us", "FAQ", "Free assessment"],
      disclaimer:
        "Immigra Canada is an immigration support and preparation agency. It is not a law firm or a government entity.",
      rights: "All rights reserved.",
    },
  },
  fr: {
    code: "FR",
    cookies: {
      title: "Nous utilisons des cookies",
      desc: "Nous utilisons des cookies propres et tiers pour améliorer votre expérience, analyser le trafic et personnaliser le contenu conformément à notre politique de confidentialité.",
      accept: "Tout accepter",
      essential: "Essentiels seulement",
      policy: "Politique de confidentialité",
    },
    nav: {
      story: "Notre histoire",
      services: "Services",
      process: "Notre méthode",
      why: "Pourquoi nous",
      faq: "Questions",
      contact: "Contact",
      cta: "Évaluation gratuite",
    },
    hero: {
      eyebrow: "Accompagnement en immigration · Canada",
      title: "Votre projet d'immigration mérite un accompagnement clair et structuré.",
      sub: "Nous vous aidons à préparer une demande d'immigration complète, organisée et professionnelle pour le Canada.",
      cta1: "Évaluation gratuite",
      cta2: "Contactez-nous",
      t1: "Service en espagnol et en français",
      t2: "Accompagnement humain",
      t3: "Dossiers organisés",
      loc: "Au service des familles partout au Canada",
    },
    founder: {
      eyebrow: "Notre histoire",
      quote: "Je suis arrivé au Canada avec beaucoup de questions et aucun repère clair.",
      b1: "Je sais ce que c'est de tout recommencer dans un nouveau pays : les formulaires, les délais, la peur qu'une erreur retarde tout. Personne ne devrait traverser cela seul.",
      b2: "C'est pourquoi j'ai créé Immigra Canada : pour offrir l'accompagnement structuré, humain et honnête que j'aurais aimé avoir. Aujourd'hui, nous aidons familles, étudiants et travailleurs à déposer leur meilleure demande, en confiance.",
      name: "Fondateur d'Immigra Canada",
      role: "Arrivé comme immigrant, guide aujourd'hui",
    },
    services: {
      eyebrow: "Services",
      title: "Un appui à chaque étape de votre parcours",
      sub: "Nous ne sommes pas un cabinet d'avocats. Nous sommes votre équipe d'organisation et de préparation, étape par étape.",
      items: [
        {
          k: "visitor",
          t: "Visa de visiteur",
          d: "Pour visiter la famille, le tourisme ou des affaires temporaires au Canada.",
        },
        {
          k: "residency",
          t: "Résidence permanente",
          d: "Programmes fédéraux et provinciaux pour bâtir votre avenir ici.",
        },
        {
          k: "refugee",
          t: "Demandes d'asile",
          d: "Un accompagnement sensible et confidentiel à chaque étape.",
        },
        {
          k: "work",
          t: "Permis de travail",
          d: "Préparez une demande de travail solide et professionnelle.",
        },
        {
          k: "study",
          t: "Permis d'études",
          d: "Pour les étudiants internationaux qui choisissent le Canada.",
        },
        {
          k: "citizenship",
          t: "Citoyenneté",
          d: "Faites le dernier pas vers votre vie de citoyen canadien.",
        },
        {
          k: "passport",
          t: "Passeport canadien",
          d: "Une démarche ordonnée de passeport après l'obtention de la citoyenneté.",
        },
        {
          k: "travel",
          t: "Titre de voyage",
          d: "Appui pour les titres de voyage des résidents et réfugiés.",
        },
      ],
    },
    process: {
      eyebrow: "Notre méthode",
      title: "Un processus clair, en trois étapes",
      sub: "Aucune surprise. Vous savez toujours où vous en êtes et ce qui suit.",
      steps: [
        {
          t: "Consultation",
          d: "Nous écoutons votre histoire et examinons votre situation pour comprendre vos vraies options.",
        },
        {
          t: "Préparation",
          d: "Nous organisons chaque document et formulaire avec soin, en révisant chaque détail avec vous.",
        },
        {
          t: "Dépôt",
          d: "Nous déposons une demande complète et professionnelle, et restons à vos côtés jusqu'à la réponse.",
        },
      ],
    },
    why: {
      eyebrow: "Pourquoi nous choisir",
      title: "Un accompagnement digne de confiance",
      items: [
        {
          t: "Appui personnalisé",
          d: "Chaque dossier est unique. Nous écoutons et adaptons le processus à votre famille.",
        },
        {
          t: "Organisation professionnelle",
          d: "Des dossiers clairs et ordonnés, prêts à déposer, sans erreurs évitables.",
        },
        {
          t: "Communication transparente",
          d: "Nous expliquons tout honnêtement : délais, coûts et possibilités réelles.",
        },
        {
          t: "Service en espagnol et français",
          d: "Nous parlons votre langue, pour que rien ne se perde en traduction.",
        },
      ],
    },
    assess: {
      eyebrow: "Évaluation gratuite",
      title: "Découvrez vos options.",
      sub: "Lors d'un premier échange sans frais, nous examinons votre situation et vous disons honnêtement quels chemins vers le Canada s'offrent à vous.",
      cta: "Demander mon évaluation gratuite",
      points: ["Sans engagement", "Confidentiel", "Réponse claire en 48h"],
    },
    testimonials: {
      eyebrow: "Familles accompagnées",
      title: "Témoignages de ceux qui ont franchi le pas",
      sub: "Leurs mots reflètent notre engagement envers l'honnêteté, la proximité et des résultats durables.",
      items: [
        {
          q: "J'ai enfin senti qu'on comprenait ma situation. Tout était organisé et je ne me suis jamais sentie seule.",
          n: "Mariana G.",
          m: "Résidence permanente · de Colombie",
        },
        {
          q: "Ils m'ont expliqué chaque document avec patience. Je suis arrivé au Canada avec ma famille, l'esprit tranquille.",
          n: "Yassine B.",
          m: "Permis de travail · du Maroc",
        },
        {
          q: "Étudiant, j'étais perdu avec les formulaires. Leur accompagnement a tout rendu clair.",
          n: "Diego R.",
          m: "Permis d'études · du Pérou",
        },
        {
          q: "Ils ont guidé la résidence de toute notre famille. Aujourd'hui nous sommes réunis au Canada, reconnaissants.",
          n: "Famille Okonkwo",
          m: "Résidence familiale · du Nigéria",
        },
      ],
    },
    faq: {
      eyebrow: "Questions fréquentes",
      title: "Ce que vous vous demandez sûrement",
      items: [
        {
          q: "Êtes-vous des avocats ?",
          a: "Non. Immigra Canada est une agence d'accompagnement et d'organisation en immigration. Nous vous aidons à préparer une demande complète, ordonnée et professionnelle. Pour un avis juridique précis, nous pouvons vous orienter vers un professionnel réglementé.",
        },
        {
          q: "Dans quelles langues servez-vous ?",
          a: "Nous servons en espagnol, en français et en anglais, pour que vous compreniez chaque étape dans votre langue.",
        },
        {
          q: "Combien coûte le démarrage ?",
          a: "La première évaluation est gratuite et sans engagement. Ensuite, nous présentons un plan clair aux coûts transparents, sans surprise.",
        },
        {
          q: "Combien de temps dure le processus ?",
          a: "Cela dépend du programme et de votre situation. Lors de l'évaluation, nous donnons des délais réalistes pour votre dossier, en toute honnêteté.",
        },
        {
          q: "Travaillez-vous avec des familles entières ?",
          a: "Oui. Nous accompagnons familles, couples, étudiants et travailleurs, et organisons les documents de chaque membre.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Parlons de votre avenir au Canada",
      sub: "Racontez-nous votre situation. Nous répondons avec un plan clair et les prochaines étapes.",
      name: "Nom complet",
      email: "Courriel",
      phone: "Téléphone / WhatsApp",
      interest: "Service souhaité",
      message: "Décrivez brièvement votre situation",
      send: "Envoyer et demander l'évaluation",
      sent: "Merci ! Nous vous contacterons très bientôt.",
      ways: "Autres façons de nous joindre",
      whatsapp: "WhatsApp",
      emailLabel: "Courriel",
      book: "Réserver une consultation",
      whatsappVal: "+1 (000) 000-0000",
      emailVal: "bonjour@immigracanada.ca",
      bookVal: "Réserver en ligne · 30 min",
    },
    footer: {
      tagline: "Un accompagnement en immigration humain, clair et professionnel pour votre nouvelle vie au Canada.",
      colServ: "Services",
      colCompany: "Agence",
      colContact: "Contact",
      company: [
        "Notre histoire",
        "Pourquoi nous choisir",
        "Questions fréquentes",
        "Évaluation gratuite",
      ],
      disclaimer:
        "Immigra Canada est une agence d'accompagnement et de préparation en immigration. Ce n'est pas un cabinet d'avocats ni une entité gouvernementale.",
      rights: "Tous droits réservés.",
    },
  },
};

export const companyAnchors = ["#story", "#why", "#faq", "#assessment"] as const;
