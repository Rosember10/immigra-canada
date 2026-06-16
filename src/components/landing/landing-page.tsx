"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  FileBadge2,
  Files,
  Globe,
  GraduationCap,
  HeartHandshake,
  House,
  IdCard,
  Menu,
  MessageCircleMore,
  Plane,
  Plus,
  Shield,
  UserRound,
  Users,
  X,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { startTransition, useEffect, useLayoutEffect, useState } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

import {
  companyAnchors,
  translations,
  type Language,
} from "@/content/immigra";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { Logo } from "@/components/ui/logo";

const serviceIcons = {
  visitor: Plane,
  residency: House,
  refugee: Shield,
  work: BriefcaseBusiness,
  study: GraduationCap,
  citizenship: Users,
  passport: IdCard,
  travel: FileBadge2,
} as const;

const whyIcons = [HeartHandshake, Files, MessageCircleMore, Globe] as const;

function Placeholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`ph ${className}`.trim()}>
      <span className="ph-tag">{label}</span>
    </div>
  );
}


function FaqItem({
  answer,
  isOpen,
  onToggle,
  question,
}: {
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  question: string;
}) {
  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button
        type="button"
        className="faq-q"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className="faq-ic">
          <Plus size={16} />
        </span>
      </button>
      <div className="faq-a" style={{ maxHeight: isOpen ? 240 : 0 }}>
        <div className="faq-a-inner">{answer}</div>
      </div>
    </div>
  );
}

export function LandingPage() {
  const [language, setLanguage] = useState<Language>("es");
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const copy = translations[language];
  const contactHref = `mailto:${copy.contact.emailVal}`;

  useIsomorphicLayoutEffect(() => {
    const stored = window.localStorage.getItem("ic_lang");
    if (stored === "es" || stored === "en" || stored === "fr") {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("ic_lang", language);
  }, [language]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1040) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-item]",
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
        },
      );

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        const delay = Number(element.dataset.delay ?? 0) / 1000;
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 32 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, [language]);

  const handleLanguageChange = (nextLanguage: Language) => {
    startTransition(() => {
      setLanguage(nextLanguage);
      setOpenFaq(0);
    });
  };

  return (
    <>
      <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
        <div className="wrap nav-inner">
          <Logo light={!isScrolled} />
          <div className="nav-links">
            <a href="#story">{copy.nav.story}</a>
            <a href="#services">{copy.nav.services}</a>
            <a href="#process">{copy.nav.process}</a>
            <a href="#why">{copy.nav.why}</a>
            <a href="#faq">{copy.nav.faq}</a>
          </div>
          <div className="nav-right">
            <div className="lang" role="group" aria-label="Language">
              {(["es", "fr"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  className={language === item ? "active" : ""}
                  onClick={() => handleLanguageChange(item)}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
            <a href="#contact" className="btn btn-primary btn-mini">
              {copy.nav.cta}
            </a>
            <button
              type="button"
              className="nav-hamburger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-menu-links">
          {(
            [
              { href: "#story", label: copy.nav.story },
              { href: "#services", label: copy.nav.services },
              { href: "#process", label: copy.nav.process },
              { href: "#why", label: copy.nav.why },
              { href: "#faq", label: copy.nav.faq },
            ] as const
          ).map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-foot">
          <div className="lang" role="group" aria-label="Language">
            {(["es", "fr"] as const).map((item) => (
              <button
                key={item}
                type="button"
                className={language === item ? "active" : ""}
                onClick={() => {
                  handleLanguageChange(item);
                  setMenuOpen(false);
                }}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={() => setMenuOpen(false)}
          >
            {copy.nav.cta}
            <span className="arr">
              <ArrowRight size={18} />
            </span>
          </a>
        </div>
      </div>

      <header className="hero" id="top">
        <div className="hero-photo" />
        <div className="hero-overlay" />
        <div className="wrap hero-inner">
          <span className="eyebrow hero-eyebrow" data-hero-item>
            {copy.hero.eyebrow}
          </span>
          <h1 data-hero-item>{copy.hero.title}</h1>
          <p className="hero-sub" data-hero-item>
            {copy.hero.sub}
          </p>
          <div className="hero-cta" data-hero-item>
            <a href="#assessment" className="btn btn-primary">
              {copy.hero.cta1}
              <span className="arr">
                <ArrowRight size={18} />
              </span>
            </a>
            <a href="#contact" className="btn btn-ghost">
              {copy.hero.cta2}
            </a>
          </div>
        </div>
        <div className="hero-foot">
          <div className="wrap">
            <div className="hero-foot-main">
              <div className="hero-trust">
                <div className="ht">
                  <Globe size={19} />
                  {copy.hero.t1}
                </div>
                <div className="ht">
                  <UserRound size={19} />
                  {copy.hero.t2}
                </div>
                <div className="ht">
                  <Files size={19} />
                  {copy.hero.t3}
                </div>
              </div>
              <span>{copy.hero.loc}</span>
            </div>
            <span className="scroll-hint">
              <span className="dot" />
            </span>
          </div>
        </div>
      </header>

      <main>
        <section className="section founder" id="story">
          <div className="wrap founder-grid">
            <div data-reveal>
              <Placeholder label="retrato · fundador/a" className="founder-photo" />
            </div>
            <div data-reveal data-delay="100">
              <span className="eyebrow">{copy.founder.eyebrow}</span>
              <p className="founder-quote">
                <span className="mark">“</span>
                {copy.founder.quote}
                <span className="mark">”</span>
              </p>
              <div className="founder-body">
                <p>{copy.founder.b1}</p>
                <p>{copy.founder.b2}</p>
              </div>
              <div className="founder-sign">
                <span className="av">
                  <UserRound size={24} />
                </span>
                <div>
                  <div className="nm">{copy.founder.name}</div>
                  <div className="rl">{copy.founder.role}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section ed-expertise" id="services">
          <div className="wrap">
            <div className="ed-exp-head" data-reveal>
              <span className="eyebrow">{copy.services.eyebrow}</span>
              <h2 className="h-sec">{copy.services.title}</h2>
            </div>
            <div className="ed-card-grid">
              {copy.services.items.map((service, index) => {
                const Icon = serviceIcons[service.k];
                return (
                  <article
                    key={service.k}
                    className="ed-imgcard"
                    data-reveal
                    data-delay={(index % 4) * 70}
                  >
                    <Placeholder
                      label={`foto · ${service.t.toLowerCase()}`}
                      className="ph-dark"
                    />
                    <div className="ed-imgcard-grad" />
                    <div className="ed-imgcard-body">
                      <span className="ed-imgcard-icon">
                        <Icon size={20} />
                      </span>
                      <h3>{service.t}</h3>
                      <p>{service.d}</p>
                      <a href="#contact" className="ed-learn">
                        {copy.nav.contact}
                        <ArrowRight size={15} />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section ed-process" id="process">
          <div className="ed-process-photo">
            <Placeholder label="foto · asesor en consulta" className="hero-photo-fill" />
          </div>
          <div className="ed-process-ov" />
          <div className="wrap ed-process-grid">
            <div className="ed-process-left" data-reveal>
              <span className="eyebrow">{copy.process.eyebrow}</span>
              <h2 className="h-sec">{copy.process.title}</h2>
              <p className="lead">{copy.process.sub}</p>
            </div>
            <div className="ed-process-cards">
              {copy.process.steps.map((step, index) => (
                <article
                  key={step.t}
                  className="ed-step-card"
                  data-reveal
                  data-delay={index * 110}
                >
                  <div className="ed-step-num">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3>{step.t}</h3>
                  <p>{step.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section why" id="why">
          <div className="wrap">
            <div className="sec-head" data-reveal>
              <span className="eyebrow">{copy.why.eyebrow}</span>
              <h2 className="h-sec">{copy.why.title}</h2>
            </div>
            <div className="why-grid">
              {copy.why.items.map((item, index) => {
                const Icon = whyIcons[index];
                return (
                  <article
                    key={item.t}
                    className="why-card"
                    data-reveal
                    data-delay={(index % 2) * 90}
                  >
                    <div className="why-ic">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3>{item.t}</h3>
                      <p>{item.d}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section assess" id="assessment">
          <div className="wrap">
            <div className="assess-card" data-reveal>
              <div className="assess-copy">
                <span className="eyebrow">{copy.assess.eyebrow}</span>
                <h2>{copy.assess.title}</h2>
                <p>{copy.assess.sub}</p>
                <div className="assess-points">
                  {copy.assess.points.map((point) => (
                    <span key={point}>
                      <Check size={16} />
                      {point}
                    </span>
                  ))}
                </div>
                <div className="assess-actions">
                  <a href="#contact" className="btn btn-white">
                    {copy.assess.cta}
                    <span className="arr">
                      <ArrowRight size={18} />
                    </span>
                  </a>
                </div>
              </div>
              <div className="assess-right">
                <Placeholder label="foto · consulta familiar" className="assess-photo" />
              </div>
            </div>
          </div>
        </section>

        <section className="section ed-testi" id="testimonials">
          <div className="wrap">
            <div className="ed-testi-head" data-reveal>
              <div>
                <span className="eyebrow">{copy.testimonials.eyebrow}</span>
                <h2 className="h-sec">{copy.testimonials.title}</h2>
              </div>
              <p className="ed-testi-sub">{copy.testimonials.sub}</p>
            </div>
            <div className="ed-testi-grid">
              {copy.testimonials.items.map((item, index) => (
                <article
                  key={`${item.n}-${index}`}
                  className="ed-testi-card"
                  tabIndex={0}
                  data-reveal
                  data-delay={(index % 4) * 80}
                >
                  <span className="ed-testi-av">{item.n.charAt(0)}</span>
                  <span className="ed-quote-mark">“</span>
                  <p className="ed-testi-q">{item.q}</p>
                  <div className="ed-testi-by">
                    <div className="nm">{item.n}</div>
                    <div className="mt">{item.m}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="wrap faq-wrap">
            <div data-reveal>
              <span className="eyebrow">{copy.faq.eyebrow}</span>
              <h2 className="h-sec faq-title">{copy.faq.title}</h2>
            </div>
            <div className="faq-list" data-reveal data-delay="100">
              {copy.faq.items.map((item, index) => (
                <FaqItem
                  key={item.q}
                  answer={item.a}
                  isOpen={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                  question={item.q}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="wrap">
            <div className="contact-cta" data-reveal>
              <div className="contact-cta-inner">
                <span className="contact-kicker">{copy.contact.eyebrow}</span>
                <h2>{copy.contact.title}</h2>
                <p>{copy.contact.sub}</p>
                <a href={contactHref} className="btn contact-cta-button">
                  {copy.contact.send}
                </a>
                {/* <span className="contact-cta-email">
                  <Mail size={16} />
                  {copy.contact.emailVal}
                </span> */}
              </div>
            </div>
          </div>
        </section>
      </main>

      <CookieBanner language={language} />

      <footer className="footer">
        <div className="wrap">
          <div className="footer-top">
            <div>
              <Logo light />
              <p className="footer-tag">{copy.footer.tagline}</p>
            </div>

            <div>
              <h4>{copy.footer.colServ}</h4>
              <ul>
                {copy.services.items.slice(0, 5).map((service) => (
                  <li key={service.k}>
                    <a href="#services">{service.t}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4>{copy.footer.colCompany}</h4>
              <ul>
                {copy.footer.company.map((item, index) => (
                  <li key={item}>
                    <a href={companyAnchors[index]}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4>{copy.footer.colContact}</h4>
              <ul>
                <li>
                  <a href={contactHref}>{copy.contact.whatsappVal}</a>
                </li>
                <li>
                  <a href={contactHref}>{copy.contact.emailVal}</a>
                </li>
                <li>
                  <a href={contactHref}>{copy.contact.book}</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-disclaimer">{copy.footer.disclaimer}</span>
            <span>
              © {new Date().getFullYear()} Immigra Canada · {copy.footer.rights}{" "}
              <a href="/privacidad" style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>
                {language === "fr" ? "Politique de confidentialité" : "Política de privacidad"}
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
