"use client";

import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import MotionEffects from "./motion";

type Locale = "uz" | "en" | "ru";

const translations = {
  uz: {
    nav: { about: "Biz haqimizda", services: "Xizmatlar", process: "Jarayon", contact: "Bog'lanish" },
    hero: {
      badge: "Digital product studio · Uzbekistan",
      titleA: "Millat uchun",
      titleB: "zamonaviy",
      titleC: "yechimlar.",
      text: "HIKMA — texnologiya, dizayn va sun'iy intellektni birlashtirib, odamlar va bizneslar uchun sodda, foydali digital mahsulotlar quradi.",
      ctaPrimary: "Xizmatlarni ko'rish",
      ctaSecondary: "HIKMA haqida",
      meta1: "Product thinking",
      meta2: "Mobile-first UX",
      meta3: "Fast execution",
    },
    about: {
      kicker: "Biz haqimizda",
      titleA: "Texnologiya murakkab bo'lishi mumkin.",
      titleB: "Mahsulot esa bo'lmasligi kerak.",
      text1: "Biz foydalanuvchiga ortiqcha yuk bermaydigan, tez tushuniladigan va real muammoni hal qiladigan mahsulotlar yaratamiz.",
      text2: "HIKMA uchun “easy use first” — shunchaki dizayn prinsipi emas. Bu product qarorlarimizning markazi.",
    },
    services: {
      kicker: "Xizmatlar",
      title: "G'oyadan ishlaydigan mahsulotgacha.",
      text: "Web, automation va marketingni alohida xizmat emas, bitta ekotizim sifatida ko'ramiz.",
      items: [
        { number: "01", title: "Web saytlar", text: "Premium landing page va product website'lar. Tez, responsive va konversiyaga yo'naltirilgan.", icon: "↗" },
        { number: "02", title: "Telegram bot", text: "Konsultant, servis, marketplace va avtomatlashtirish botlari — real biznes oqimlari uchun.", icon: "✦" },
        { number: "03", title: "AI & Automation", text: "AI agentlar, ichki workflow va kundalik jarayonlarni avtomatlashtiruvchi yechimlar.", icon: "⌁" },
        { number: "04", title: "Digital marketing", text: "Instagram Ads va Telegram Ads uchun kreativ, funnel va texnik landing infratuzilmasi.", icon: "◎" },
      ],
    },
    dimension: {
      kicker: "Bir ekotizim",
      title: "Design, technology va AI — bitta yo'nalishda.",
      text: "Biz interface'ni alohida, texnologiyani alohida o'ylamaymiz. Foydalanuvchi ko'radigan experience va uning ortidagi tizim bir-biriga mos ishlashi kerak.",
    },
    principles: {
      kicker: "Bizning prinsip",
      title: "Kamroq element. Kamroq tap. Ko'proq natija.",
      text: "Har bir flow'da cognitive load, hierarchy, mobile usability va real user goal'ni birinchi o'ringa qo'yamiz.",
    },
    process: {
      kicker: "Jarayon",
      title: "Tezlik — shoshilish emas.",
      text: "Keraksiz bosqichlarni olib tashlaymiz, muhim qarorlarni esa aniq qilamiz.",
      items: ["Muammoni tushunamiz", "Aniq yechim chizamiz", "Tez quramiz", "O'lchaymiz va yaxshilaymiz"],
    },
    cta: {
      kicker: "Biror narsa quramizmi?",
      titleA: "G'oyani gapdan",
      titleB: "mahsulotga",
      titleC: "aylantiramiz.",
      telegram: "Telegram bot",
      instagram: "Instagram",
    },
    footer: "Millat uchun zamonaviy yechimlar.",
  },
  en: {
    nav: { about: "About", services: "Services", process: "Process", contact: "Contact" },
    hero: {
      badge: "Digital product studio · Uzbekistan",
      titleA: "Modern",
      titleB: "solutions",
      titleC: "for the nation.",
      text: "HIKMA combines technology, design and artificial intelligence to build simple, useful digital products for people and businesses.",
      ctaPrimary: "Explore services",
      ctaSecondary: "About HIKMA",
      meta1: "Product thinking",
      meta2: "Mobile-first UX",
      meta3: "Fast execution",
    },
    about: {
      kicker: "About",
      titleA: "Technology can be complex.",
      titleB: "The product should not be.",
      text1: "We create products that do not overload users, are easy to understand and solve real problems.",
      text2: "For HIKMA, “easy use first” is not just a design principle. It is at the center of our product decisions.",
    },
    services: {
      kicker: "Services",
      title: "From idea to working product.",
      text: "We see web, automation and marketing not as separate services, but as one ecosystem.",
      items: [
        { number: "01", title: "Websites", text: "Premium landing pages and product websites. Fast, responsive and conversion-oriented.", icon: "↗" },
        { number: "02", title: "Telegram bots", text: "Consultant, service, marketplace and automation bots for real business flows.", icon: "✦" },
        { number: "03", title: "AI & Automation", text: "AI agents, internal workflows and automation systems for everyday operations.", icon: "⌁" },
        { number: "04", title: "Digital marketing", text: "Creative, funnel and landing infrastructure for Instagram Ads and Telegram Ads.", icon: "◎" },
      ],
    },
    dimension: {
      kicker: "One ecosystem",
      title: "Design, technology and AI — moving in one direction.",
      text: "We do not treat interface and technology separately. The experience users see and the system behind it should work together.",
    },
    principles: {
      kicker: "Our principle",
      title: "Less clutter. Fewer taps. More results.",
      text: "In every flow, we prioritize cognitive load, hierarchy, mobile usability and the real user goal.",
    },
    process: {
      kicker: "Process",
      title: "Speed is not rushing.",
      text: "We remove unnecessary steps and make the important decisions clear.",
      items: ["Understand the problem", "Design the right solution", "Build fast", "Measure and improve"],
    },
    cta: {
      kicker: "Shall we build something?",
      titleA: "We turn ideas",
      titleB: "into products",
      titleC: "that work.",
      telegram: "Telegram bot",
      instagram: "Instagram",
    },
    footer: "Modern solutions for the nation.",
  },
  ru: {
    nav: { about: "О нас", services: "Услуги", process: "Процесс", contact: "Связаться" },
    hero: {
      badge: "Digital product studio · Uzbekistan",
      titleA: "Современные",
      titleB: "решения",
      titleC: "для нации.",
      text: "HIKMA объединяет технологии, дизайн и искусственный интеллект, создавая простые и полезные цифровые продукты для людей и бизнеса.",
      ctaPrimary: "Посмотреть услуги",
      ctaSecondary: "О HIKMA",
      meta1: "Product thinking",
      meta2: "Mobile-first UX",
      meta3: "Fast execution",
    },
    about: {
      kicker: "О нас",
      titleA: "Технологии могут быть сложными.",
      titleB: "Продукт — нет.",
      text1: "Мы создаём продукты, которые не перегружают пользователя, легко понимаются и решают реальные проблемы.",
      text2: "Для HIKMA принцип “easy use first” — это не просто подход к дизайну. Это основа наших продуктовых решений.",
    },
    services: {
      kicker: "Услуги",
      title: "От идеи до работающего продукта.",
      text: "Мы рассматриваем web, automation и marketing не как отдельные услуги, а как единую экосистему.",
      items: [
        { number: "01", title: "Веб-сайты", text: "Премиальные landing page и product websites. Быстро, адаптивно и с фокусом на конверсию.", icon: "↗" },
        { number: "02", title: "Telegram-боты", text: "Консультанты, сервисные, marketplace и automation-боты для реальных бизнес-процессов.", icon: "✦" },
        { number: "03", title: "AI & Automation", text: "AI-агенты, внутренние workflows и автоматизация ежедневных процессов.", icon: "⌁" },
        { number: "04", title: "Digital marketing", text: "Креативы, funnel и landing-инфраструктура для Instagram Ads и Telegram Ads.", icon: "◎" },
      ],
    },
    dimension: {
      kicker: "Единая экосистема",
      title: "Design, technology и AI — в одном направлении.",
      text: "Мы не разделяем интерфейс и технологию. Пользовательский experience и система за ним должны работать вместе.",
    },
    principles: {
      kicker: "Наш принцип",
      title: "Меньше лишнего. Меньше кликов. Больше результата.",
      text: "В каждом flow мы ставим на первое место cognitive load, hierarchy, mobile usability и реальную цель пользователя.",
    },
    process: {
      kicker: "Процесс",
      title: "Скорость — не спешка.",
      text: "Мы убираем лишние шаги и чётко определяем важные решения.",
      items: ["Понимаем проблему", "Проектируем решение", "Быстро создаём", "Измеряем и улучшаем"],
    },
    cta: {
      kicker: "Создадим что-то вместе?",
      titleA: "Превращаем идеи",
      titleB: "в продукты",
      titleC: "которые работают.",
      telegram: "Telegram бот",
      instagram: "Instagram",
    },
    footer: "Современные решения для нации.",
  },
} as const;

const locales: Locale[] = ["uz", "en", "ru"];

function effectStyle(index: number): CSSProperties {
  return { "--i": index } as CSSProperties;
}

function AnimatedBackground() {
  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="blackhole-wrap">
        <div className="blackhole-disc" />
        <div className="blackhole-ring bh-ring-a" />
        <div className="blackhole-ring bh-ring-b" />
        <div className="blackhole-core" />
      </div>
      <div className="triangle-field">
        {Array.from({ length: 9 }, (_, i) => <span className="tri" style={effectStyle(i)} key={`tri-${i}`} />)}
      </div>
      <div className="star-rain">
        {Array.from({ length: 18 }, (_, i) => <span className="star-drop" style={effectStyle(i)} key={`star-${i}`} />)}
      </div>
      <div className="spark-layer">
        {Array.from({ length: 12 }, (_, i) => <span className="spark" style={effectStyle(i)} key={`spark-${i}`} />)}
      </div>
    </div>
  );
}

export default function SiteShell() {
  const [locale, setLocale] = useState<Locale>("uz");
  const t = useMemo(() => translations[locale], [locale]);

  useEffect(() => {
    const saved = window.localStorage.getItem("hikma-locale");
    if (saved === "uz" || saved === "en" || saved === "ru") {
      setLocale(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const changeLocale = (nextLocale: Locale) => {
    setLocale(nextLocale);
    window.localStorage.setItem("hikma-locale", nextLocale);
    document.documentElement.lang = nextLocale;
  };

  return (
    <main key={locale}>
      <MotionEffects />
      <AnimatedBackground />

      <header className="nav shell reveal">
        <a className="brand" href="#top" aria-label="HIKMA">
          <span className="brand-mark" aria-hidden="true"><i /><b /><em /></span>
          <span>HIKMA</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#about">{t.nav.about}</a>
          <a href="#services">{t.nav.services}</a>
          <a href="#process">{t.nav.process}</a>
        </nav>

        <div className="nav-actions">
          <div className="lang-switcher" role="group" aria-label="Language">
            {locales.map((item) => (
              <button
                className={item === locale ? "lang-btn active" : "lang-btn"}
                key={item}
                type="button"
                onClick={() => changeLocale(item)}
                aria-pressed={item === locale}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="nav-cta" href="https://t.me/Hikma_servicebot" target="_blank" rel="noreferrer">
            {t.nav.contact} <span>↗</span>
          </a>
        </div>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy reveal">
          <span className="eyebrow text-pop"><span className="status-dot" /> {t.hero.badge}</span>
          <h1 className="hero-motion-title">
            <span className="title-line text-up delay-1">{t.hero.titleA}</span>
            <span className="title-line title-green text-up delay-2">{t.hero.titleB}</span>
            <span className="title-line text-up delay-3">{t.hero.titleC}</span>
          </h1>
          <p className="text-fade delay-4">{t.hero.text}</p>
          <div className="hero-actions text-fade delay-5">
            <a className="primary-btn magnetic" href="#services">{t.hero.ctaPrimary} <span>↘</span></a>
            <a className="text-link" href="#about">{t.hero.ctaSecondary} <span>↘</span></a>
          </div>
          <div className="hero-meta text-fade delay-6">
            <div><strong>01</strong><span>{t.hero.meta1}</span></div>
            <div><strong>02</strong><span>{t.hero.meta2}</span></div>
            <div><strong>03</strong><span>{t.hero.meta3}</span></div>
          </div>
        </div>

        <div className="hero-visual reveal" data-parallax>
          <div className="orb orb-a" />
          <div className="orb orb-b" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="shape prism" aria-hidden="true"><i /><b /><em /></div>
          <div className="shape glass-cube" aria-hidden="true"><i /><b /><em /></div>
          <div className="shape mint-sphere" aria-hidden="true" />
          <div className="scene">
            <div className="plate plate-back" />
            <div className="plate plate-mid" />
            <div className="plate plate-front">
              <div className="h3d">
                <span className="bar left" />
                <span className="bar right" />
                <span className="bridge" />
              </div>
              <div className="mini-label">HIKMA / 2026</div>
            </div>
          </div>
          <div className="float-card float-one"><span>✦</span><div><small>Design system</small><strong>Premium / Clean</strong></div></div>
          <div className="float-card float-two"><span>⌁</span><div><small>Built for</small><strong>Web · Bot · AI</strong></div></div>
          <div className="float-pill float-three">AI × DESIGN</div>
        </div>
      </section>

      <section className="manifesto shell reveal" id="about">
        <p className="section-kicker text-pop">{t.about.kicker}</p>
        <div className="manifesto-grid">
          <h2 className="text-up">{t.about.titleA} <span>{t.about.titleB}</span></h2>
          <div className="text-fade">
            <p>{t.about.text1}</p>
            <p>{t.about.text2}</p>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="shell section-head reveal">
          <div><p className="section-kicker text-pop">{t.services.kicker}</p><h2 className="text-up">{t.services.title}</h2></div>
          <p className="text-fade">{t.services.text}</p>
        </div>
        <div className="service-track shell" role="list">
          {t.services.items.map((service, index) => (
            <article className="service-card reveal" style={{ transitionDelay: `${index * 70}ms` }} key={service.number} role="listitem">
              <div className="service-depth" aria-hidden="true" />
              <div className="service-top"><span>{service.number}</span><b>{service.icon}</b></div>
              <div><h3 className="text-up">{service.title}</h3><p className="text-fade">{service.text}</p></div>
              <div className="card-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="dimension shell reveal">
        <div className="dimension-copy">
          <p className="section-kicker text-pop">{t.dimension.kicker}</p>
          <h2 className="text-up">{t.dimension.title}</h2>
          <p className="text-fade">{t.dimension.text}</p>
          <div className="dimension-tags text-fade"><span>Web</span><span>Automation</span><span>AI</span><span>UX</span></div>
        </div>
        <div className="dimension-visual" data-parallax>
          <div className="stack-card stack-a"><span>01</span><strong>DESIGN</strong></div>
          <div className="stack-card stack-b"><span>02</span><strong>TECH</strong></div>
          <div className="stack-card stack-c"><span>03</span><strong>AI</strong></div>
          <div className="core-orb"><i /></div>
          <div className="wire-ring ring-a" />
          <div className="wire-ring ring-b" />
        </div>
      </section>

      <section className="principles">
        <div className="shell principles-grid">
          <div className="principles-copy reveal">
            <p className="section-kicker light text-pop">{t.principles.kicker}</p>
            <h2 className="text-up">{t.principles.title}</h2>
            <p className="text-fade">{t.principles.text}</p>
          </div>
          <div className="metric-stack reveal">
            <div className="metric-card"><span>Mobile-first</span><strong>01</strong></div>
            <div className="metric-card"><span>Easy use first</span><strong>02</strong></div>
            <div className="metric-card"><span>Production-ready</span><strong>03</strong></div>
          </div>
        </div>
        <div className="principle-orbit principle-orbit-a" aria-hidden="true" />
        <div className="principle-orbit principle-orbit-b" aria-hidden="true" />
      </section>

      <section className="process shell reveal" id="process">
        <div className="section-head">
          <div><p className="section-kicker text-pop">{t.process.kicker}</p><h2 className="text-up">{t.process.title}</h2></div>
          <p className="text-fade">{t.process.text}</p>
        </div>
        <div className="process-list">
          {t.process.items.map((item, index) => (
            <div key={item} className="process-row">
              <span>0{index + 1}</span><strong>{item}</strong><i>↗</i>
            </div>
          ))}
        </div>
      </section>

      <section className="cta shell reveal">
        <div className="cta-panel">
          <div className="cta-glow" />
          <div className="cta-object cta-object-a" aria-hidden="true" />
          <div className="cta-object cta-object-b" aria-hidden="true" />
          <div className="cta-grid" aria-hidden="true" />
          <p className="section-kicker light text-pop">{t.cta.kicker}</p>
          <h2 className="text-up">{t.cta.titleA} <span>{t.cta.titleB}</span> {t.cta.titleC}</h2>
          <div className="cta-actions text-fade">
            <a className="cta-white magnetic" href="https://t.me/Hikma_servicebot" target="_blank" rel="noreferrer">{t.cta.telegram} <span>↗</span></a>
            <a className="cta-ghost" href="https://instagram.com/hikma.service" target="_blank" rel="noreferrer">{t.cta.instagram} <span>↗</span></a>
          </div>
        </div>
      </section>

      <footer className="footer shell reveal">
        <a className="brand" href="#top"><span className="brand-mark" aria-hidden="true"><i /><b /><em /></span><span>HIKMA</span></a>
        <p>{t.footer}</p>
        <span>© 2026 HIKMA</span>
      </footer>
    </main>
  );
}
