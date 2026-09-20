import MotionEffects from "./motion";

const services = [
  { number: "01", title: "Web saytlar", text: "Premium landing page va product website'lar. Tez, responsive va konversiyaga yo'naltirilgan.", icon: "↗" },
  { number: "02", title: "Telegram bot", text: "Konsultant, servis, marketplace va avtomatlashtirish botlari — real biznes oqimlari uchun.", icon: "✦" },
  { number: "03", title: "AI & Automation", text: "AI agentlar, ichki workflow va kundalik jarayonlarni avtomatlashtiruvchi yechimlar.", icon: "⌁" },
  { number: "04", title: "Digital marketing", text: "Instagram Ads va Telegram Ads uchun kreativ, funnel va texnik landing infratuzilmasi.", icon: "◎" },
];

const process = ["Muammoni tushunamiz", "Aniq yechim chizamiz", "Tez quramiz", "O'lchaymiz va yaxshilaymiz"];

export default function Home() {
  return (
    <main>
      <MotionEffects />

      <header className="nav shell reveal">
        <a className="brand" href="#top" aria-label="HIKMA bosh sahifa">
          <span className="brand-mark" aria-hidden="true"><i /><b /><em /></span>
          <span>HIKMA</span>
        </a>
        <nav className="desktop-nav" aria-label="Asosiy navigatsiya">
          <a href="#about">Biz haqimizda</a>
          <a href="#services">Xizmatlar</a>
          <a href="#process">Jarayon</a>
        </nav>
        <a className="nav-cta" href="https://t.me/Hikma_servicebot" target="_blank" rel="noreferrer">
          Bog'lanish <span>↗</span>
        </a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy reveal">
          <span className="eyebrow"><span className="status-dot" /> Digital product studio · Uzbekistan</span>
          <h1>Millat uchun <span>zamonaviy</span> yechimlar.</h1>
          <p>HIKMA — texnologiya, dizayn va sun'iy intellektni birlashtirib, odamlar va bizneslar uchun sodda, foydali digital mahsulotlar quradi.</p>
          <div className="hero-actions">
            <a className="primary-btn magnetic" href="#services">Xizmatlarni ko'rish <span>↘</span></a>
            <a className="text-link" href="#about">HIKMA haqida <span>↘</span></a>
          </div>
          <div className="hero-meta">
            <div><strong>01</strong><span>Product thinking</span></div>
            <div><strong>02</strong><span>Mobile-first UX</span></div>
            <div><strong>03</strong><span>Fast execution</span></div>
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
        <p className="section-kicker">Biz haqimizda</p>
        <div className="manifesto-grid">
          <h2>Texnologiya murakkab bo'lishi mumkin. <span>Mahsulot esa bo'lmasligi kerak.</span></h2>
          <div>
            <p>Biz foydalanuvchiga ortiqcha yuk bermaydigan, tez tushuniladigan va real muammoni hal qiladigan mahsulotlar yaratamiz.</p>
            <p>HIKMA uchun “easy use first” — shunchaki dizayn prinsipi emas. Bu product qarorlarimizning markazi.</p>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="shell section-head reveal">
          <div><p className="section-kicker">Xizmatlar</p><h2>G'oyadan ishlaydigan mahsulotgacha.</h2></div>
          <p>Web, automation va marketingni alohida xizmat emas, bitta ekotizim sifatida ko'ramiz.</p>
        </div>

        <div className="service-track shell" role="list">
          {services.map((service, index) => (
            <article className="service-card reveal" style={{ transitionDelay: `${index * 70}ms` }} key={service.number} role="listitem">
              <div className="service-depth" aria-hidden="true" />
              <div className="service-top"><span>{service.number}</span><b>{service.icon}</b></div>
              <div><h3>{service.title}</h3><p>{service.text}</p></div>
              <div className="card-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="dimension shell reveal" aria-label="HIKMA imkoniyatlari">
        <div className="dimension-copy">
          <p className="section-kicker">Bir ekotizim</p>
          <h2>Design, technology va AI — bitta yo'nalishda.</h2>
          <p>Biz interface'ni alohida, texnologiyani alohida o'ylamaymiz. Foydalanuvchi ko'radigan experience va uning ortidagi tizim bir-biriga mos ishlashi kerak.</p>
          <div className="dimension-tags">
            <span>Web</span><span>Automation</span><span>AI</span><span>UX</span>
          </div>
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
            <p className="section-kicker light">Bizning prinsip</p>
            <h2>Kamroq element. Kamroq tap. Ko'proq natija.</h2>
            <p>Har bir flow'da cognitive load, hierarchy, mobile usability va real user goal'ni birinchi o'ringa qo'yamiz.</p>
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
          <div><p className="section-kicker">Jarayon</p><h2>Tezlik — shoshilish emas.</h2></div>
          <p>Keraksiz bosqichlarni olib tashlaymiz, muhim qarorlarni esa aniq qilamiz.</p>
        </div>
        <div className="process-list">
          {process.map((item, index) => (
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
          <p className="section-kicker light">Biror narsa quramizmi?</p>
          <h2>G'oyani gapdan <span>mahsulotga</span> aylantiramiz.</h2>
          <div className="cta-actions">
            <a className="cta-white magnetic" href="https://t.me/Hikma_servicebot" target="_blank" rel="noreferrer">Telegram bot <span>↗</span></a>
            <a className="cta-ghost" href="https://instagram.com/hikma.service" target="_blank" rel="noreferrer">Instagram <span>↗</span></a>
          </div>
        </div>
      </section>

      <footer className="footer shell reveal">
        <a className="brand" href="#top"><span className="brand-mark" aria-hidden="true"><i /><b /><em /></span><span>HIKMA</span></a>
        <p>Millat uchun zamonaviy yechimlar.</p>
        <span>© 2026 HIKMA</span>
      </footer>
    </main>
  );
}
