"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "REVISTA", href: "#revista" },
  { label: "ARTE", href: "#arte" },
  { label: "COMER", href: "#comer" },
  { label: "MÚSICA", href: "#musica" },
  { label: "CULTURA", href: "#cultura" },
  { label: "FOTO", href: "#foto" },
];

const photoEssayImages = [
  { src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=85", label: "Noche eléctrica" },
  { src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=85", label: "Color en movimiento" },
  { src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1000&q=85", label: "La ciudad despierta" },
  { src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=85", label: "Ritmo urbano" },
  { src: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=85", label: "Después del anochecer" },
  { src: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1000&q=85", label: "Tokio en flor" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    const main = document.querySelector<HTMLElement>("main");
    const footer = document.querySelector<HTMLElement>("footer");
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    document.body.style.overflow = "hidden";
    firstMenuLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = [
        menuButton,
        ...Array.from(document.querySelectorAll<HTMLAnchorElement>("#mobile-menu a")),
      ].filter(Boolean) as HTMLElement[];
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      window.removeEventListener("keydown", handleKeyDown);
      menuButton?.focus();
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>

      <header className="site-header">
        <div className="ticker" aria-label="Bien Vivos, Tokio se vive mejor en español">
          <div className="ticker-track">
            {Array.from({ length: 6 }).map((_, index) => (
              <span key={index}>BIEN VIVOS <b>✦</b> TOKIO SE VIVE MEJOR EN ESPAÑOL <b>✦</b></span>
            ))}
          </div>
        </div>

        <div className="desktop-brand" aria-label="Cabecera de Bien Vivos">
          <p className="brand-meta">Nº 01<br />01.09.2026</p>
          <a className="masthead" href="#top" aria-label="Bien Vivos, inicio">BIENVIVOS</a>
          <p className="brand-meta brand-meta-right">TOKIO<br />EN ESPAÑOL</p>
        </div>

        <nav className="desktop-nav" aria-label="Navegación principal">
          <div className="desktop-nav-links">
            {navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
          </div>
          <span className="desktop-nav-status">Nº 01 · 1 DE SEPTIEMBRE DE 2026</span>
        </nav>

        <div className="mobile-header">
          <a className="mobile-logo" href="#top" onClick={closeMenu}>BIENVIVOS</a>
          <button
            ref={menuButtonRef}
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Menú principal"
      >
        <div className="mobile-menu-inner">
          <p className="mobile-menu-issue">Nº 01 · SEPTIEMBRE 2026 · TOKIO</p>
          <nav aria-label="Navegación móvil">
            {navItems.map((item, index) => (
              <a
                ref={index === 0 ? firstMenuLinkRef : undefined}
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                style={{ transitionDelay: menuOpen ? `${index * 45}ms` : "0ms" }}
                tabIndex={menuOpen ? 0 : -1}
              >
                <span>0{index + 1}</span>{item.label}
              </a>
            ))}
          </nav>
          <p className="mobile-menu-line">Japón es lo que miramos.<br />El mundo hispanohablante es nuestra mirada.</p>
        </div>
      </div>

      <main id="contenido">
        <section className="hero" id="revista" aria-labelledby="hero-title">
          <div className="hero-image" role="img" aria-label="Imagen provisional de una calle nocturna de Tokio" style={{ backgroundImage: 'linear-gradient(110deg, rgba(24, 9, 19, .14), rgba(24, 9, 19, .62)), url("https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=2200&q=90")' }} />
          <div className="hero-bloom hero-bloom-one" aria-hidden="true" />
          <div className="hero-bloom hero-bloom-two" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow">PORTADA · EDICIÓN INAUGURAL</p>
            <h1 className="hero-title" id="hero-title"><span>Tokio</span><span>necesita</span><span>más pasión</span></h1>
            <div className="hero-bottom">
              <p>Amamos Tokio. Precisamente por eso hemos venido a subirle el volumen.</p>
              <span className="story-cta story-cta-light">PRÓXIMAMENTE ↗</span>
            </div>
          </div>
          <p className="hero-date">BIEN VIVOS<br />01 · 09 · 26</p>
          <a className="hero-scroll" href="#bienvivos-manifiesto">BAJAR <span>↓</span></a>
        </section>

        <section className="manifesto-strip" id="bienvivos-manifiesto" aria-label="Manifiesto de Bien Vivos">
          <p><span>Japón es lo que miramos.</span><em>El mundo hispanohablante es nuestra mirada.</em></p>
        </section>

        <section className="story-section restaurant-section reveal" id="comer">
          <div className="section-heading-row"><p className="section-kicker">01 · COMER</p><p className="section-note">RESTAURANTE DE PORTADA</p></div>
          <div className="restaurant-grid">
            <div className="editorial-image restaurant-image" role="img" aria-label="Imagen provisional de una mesa de restaurante" style={{ backgroundImage: 'linear-gradient(180deg, rgba(24, 9, 19, .02), rgba(24, 9, 19, .22)), url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=90")' }}><span className="image-label">IMAGEN PROVISIONAL</span><span className="image-number">01</span></div>
            <div className="story-copy restaurant-copy">
              <p className="story-overline">UNA HISTORIA PARA COMERSE ENTERA</p>
              <h2>Una mesa española que hace latir Tokio</h2>
              <p className="story-deck">Un restaurante, una conversación larga y platos llenos de memoria y carácter, pensados para quedarse en la conversación.</p>
              <p className="editorial-pullquote">Aquí no venimos solamente a cenar. Venimos a recordar que una buena mesa también puede ser una forma de volver a casa.</p>
              <span className="story-cta">REPORTAJE EN PREPARACIÓN ↗</span>
            </div>
          </div>
        </section>

        <section className="story-section art-section reveal" id="arte">
          <div className="art-word" aria-hidden="true">ARTE</div>
          <div className="section-heading-row section-heading-light"><p className="section-kicker">02 · ARTE</p><p className="section-note">UNA GALERÍA · UNA HISTORIA VISUAL</p></div>
          <div className="art-layout">
            <div className="art-copy">
              <p className="story-overline">EL ARTE NO PIDE PERMISO</p>
              <h2>Una galería. Dos exposiciones. Cero indiferencia.</h2>
              <p className="story-deck">Miraremos de cerca, elegiremos con criterio y diremos lo que sentimos sin convertir la experiencia en una clase de historia.</p>
              <span className="story-cta story-cta-light">PRÓXIMAMENTE ↗</span>
            </div>
            <div className="editorial-image art-image-main" role="img" aria-label="Imagen provisional de una exposición de arte" style={{ backgroundImage: 'linear-gradient(180deg, rgba(26, 8, 34, .02), rgba(26, 8, 34, .15)), url("https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1500&q=90")' }}><span className="image-label image-label-light">IMAGEN PROVISIONAL</span></div>
            <div className="editorial-image art-image-detail" role="img" aria-label="Detalle provisional de una obra de arte" style={{ backgroundImage: 'linear-gradient(180deg, rgba(26, 8, 34, .04), rgba(26, 8, 34, .2)), url("https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1100&q=90")' }}><span className="art-caption">DETALLE / EXPOSICIÓN 01</span></div>
          </div>
        </section>

        <section className="story-section music-section reveal" id="musica">
          <div className="section-heading-row section-heading-light"><p className="section-kicker">03 · MÚSICA</p><p className="section-note">LO QUE SUENA AHORA</p></div>
          <div className="music-intro">
            <h2>Tokio<br />no sabe<br />estar en silencio.</h2>
            <p>Aunque a veces lo parezca. Exploramos las listas, los clubes, las tendencias y las obsesiones que están marcando el ritmo de la ciudad.</p>
          </div>
          <div className="music-cards">
            <article className="music-card music-card-primary"><div className="music-card-image" role="img" aria-label="Imagen provisional de un concierto" style={{ backgroundImage: 'linear-gradient(180deg, rgba(5, 10, 63, .04), rgba(5, 10, 63, .72)), url("https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1500&q=90")' }} /><div className="music-card-copy"><p>ARTÍCULO 01</p><h3>Qué está escuchando Tokio ahora</h3><span>PRÓXIMAMENTE ↗</span></div></article>
            <article className="music-card music-card-secondary"><div className="music-card-image" role="img" aria-label="Imagen provisional de una pista de baile" style={{ backgroundImage: 'linear-gradient(180deg, rgba(5, 10, 63, .02), rgba(5, 10, 63, .72)), url("https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1300&q=90")' }} /><div className="music-card-copy"><p>ARTÍCULO 02 · OPCIONAL</p><h3>La noche también tiene acento</h3><span>EN DESARROLLO ↗</span></div></article>
          </div>
        </section>

        <section className="culture-feature reveal" id="cultura">
          <div className="culture-title-wrap"><p className="section-kicker">04 · CULTURA</p><h2>Después de comer<em>empieza la vida.</em></h2></div>
          <div className="culture-grid">
            <div className="editorial-image culture-image" role="img" aria-label="Imagen provisional de una sobremesa" style={{ backgroundImage: 'linear-gradient(180deg, rgba(81, 12, 34, .02), rgba(81, 12, 34, .18)), url("https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1700&q=90")' }}><span className="image-label">IMAGEN PROVISIONAL</span></div>
            <div className="culture-copy">
              <p className="story-overline">TOKIO FRENTE A LA SOBREMESA</p>
              <p className="story-deck">A menudo, en Tokio, terminar de comer significa que ha llegado el momento de dejar libre la mesa. En buena parte del mundo hispanohablante, puede significar que la conversación apenas comienza.</p>
              <p>Un reportaje largo, visual, divertido y afectuoso sobre el tiempo, la compañía y el pequeño escándalo de no tener prisa.</p>
              <span className="story-cta">HISTORIA EN PREPARACIÓN ↗</span>
            </div>
          </div>
        </section>

        <section className="detail-feature reveal">
          <div className="detail-intro"><p className="section-kicker">05 · UNA IDEA DE JAPÓN</p><h2>La belleza de cuidar los detalles</h2><p>Bien Vivos viene a mirar Tokio con pasión, pero también con los ojos abiertos. Hay gestos pequeños que aquí se convierten en una forma completa de respeto.</p></div>
          <div className="detail-layout">
            <div className="editorial-image detail-image-main" role="img" aria-label="Imagen provisional de un detalle artesanal" style={{ backgroundImage: 'linear-gradient(180deg, rgba(47, 26, 3, .02), rgba(47, 26, 3, .14)), url("https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1500&q=90")' }} />
            <div className="detail-quote"><span>05</span><p>La emoción también vive en la precisión, cuando la precisión nace del cuidado.</p><small>REPORTAJE EN DESARROLLO</small></div>
            <div className="editorial-image detail-image-small" role="img" aria-label="Imagen provisional de objetos cuidadosamente presentados" style={{ backgroundImage: 'linear-gradient(180deg, rgba(47, 26, 3, .02), rgba(47, 26, 3, .15)), url("https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1000&q=90")' }} />
          </div>
        </section>

        <section className="photo-essay reveal" id="foto">
          <div className="photo-essay-heading"><p className="section-kicker">06 · ENSAYO FOTOGRÁFICO</p><h2>Tokio no es gris</h2><p>Color encontrado, color inventado, color que aparece cuando la ciudad cree que nadie la está mirando.</p></div>
          <div className="photo-grid" aria-label="Galería provisional">
            {photoEssayImages.map((image, index) => (
              <figure className={`photo-tile photo-tile-${index + 1}`} key={image.src}>
                <div role="img" aria-label={`Imagen provisional: ${image.label}`} style={{ backgroundImage: `linear-gradient(180deg, rgba(24, 9, 19, .01), rgba(24, 9, 19, .12)), url("${image.src}")` }} />
                <figcaption><span>0{index + 1}</span>{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="launch-note reveal" aria-label="Anuncio de lanzamiento"><p>01 · 09 · 2026</p><h2>Muy pronto:<br />Tokio, completamente despierto.</h2><span>BIEN VIVOS · EDICIÓN INAUGURAL</span></section>
      </main>

      <footer className="site-footer">
        <div className="footer-top"><div><p className="footer-kicker">TOKIO SE VIVE MEJOR EN ESPAÑOL</p><h2>Nos vemos donde pasa la vida.</h2></div><div className="newsletter-placeholder"><p>LA CARTA DE BIEN VIVOS</p><span>Muy pronto, la carta de Bien Vivos</span></div></div>
        <div className="footer-links"><nav aria-label="Navegación del pie">{navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</nav><div className="social-placeholder" aria-label="Redes sociales próximamente"><span>INSTAGRAM</span><span>TIKTOK</span><span>YOUTUBE</span></div></div>
        <a className="footer-masthead" href="#top" aria-label="Volver arriba">BIENVIVOS</a>
        <div className="footer-bottom"><p>© 2026 BIEN VIVOS</p><p>HECHO EN TOKIO · CONTADO EN ESPAÑOL</p><a href="#top">VOLVER ARRIBA ↑</a></div>
      </footer>
    </div>
  );
}
