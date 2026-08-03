"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "PORTADA", href: "#revista" },
  { label: "SUMARIO", href: "#sumario" },
  { label: "COMER", href: "#comer" },
  { label: "MÚSICA", href: "#musica" },
  { label: "CULTURA", href: "#cultura" },
  { label: "FOTO", href: "#foto" },
];

const contents = [
  { page: "08", section: "COMER", title: "Una mesa española que hace latir Tokio", copy: "Memoria, conversación y platos que no tienen ninguna prisa por desaparecer." },
  { page: "18", section: "ARTE", title: "Una galería. Dos exposiciones. Cero indiferencia.", copy: "Mirar de cerca, sentir primero y explicar después." },
  { page: "30", section: "MÚSICA", title: "La noche también tiene acento", copy: "Clubes, listas y canciones para una ciudad incapaz de quedarse quieta." },
  { page: "42", section: "CULTURA", title: "Después de comer empieza la vida", copy: "Una defensa afectuosa y radical de la sobremesa." },
  { page: "56", section: "FOTO", title: "Tokio no es gris", copy: "Color encontrado cuando la ciudad cree que nadie la está mirando." },
];

const indexStories = [
  { page: "64", section: "BARRIOS", title: "Koenji después de las seis", copy: "Tiendas pequeñas, barras largas y una noche que todavía pertenece a sus vecinos.", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=88" },
  { page: "68", section: "OBJETOS", title: "El detalle como forma de respeto", copy: "Cinco gestos japoneses que convierten lo cotidiano en algo memorable.", image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1000&q=88" },
  { page: "72", section: "SONIDO", title: "Qué está escuchando Tokio ahora", copy: "Una lista sin complejos: pop, electrónica, guitarras y mucho volumen.", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1000&q=88" },
  { page: "76", section: "AGENDA", title: "Ocho razones para salir esta semana", copy: "Arte, comida y música para no dejar que Tokio se convierta en rutina.", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=88" },
];

const photoEssayImages = [
  { src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1800&q=92", label: "Noche eléctrica" },
  { src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=90", label: "Color en movimiento" },
  { src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1400&q=90", label: "La ciudad despierta" },
  { src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=90", label: "Ritmo urbano" },
  { src: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1400&q=90", label: "Después del anochecer" },
  { src: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1800&q=90", label: "Tokio en flor" },
];

const coverImage = "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=2400&q=95";

function EditorialImage({
  src,
  alt,
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      quality={88}
    />
  );
}

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
    document.body.style.overflow = "hidden";
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    firstMenuLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
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
    <div className="mag-page" id="top">
      <a className="mag-skip-link" href="#contenido">Saltar al contenido</a>

      <header className="mag-header">
        <div className="mag-header-rail">
          <p>REVISTA INDEPENDIENTE · TOKIO</p>
          <p>EDICIÓN INAUGURAL · Nº 01</p>
          <p>01 SEPTIEMBRE 2026</p>
        </div>

        <div className="mag-header-main">
          <p className="mag-header-note">JAPÓN ES LO QUE MIRAMOS.<br />EL MUNDO HISPANOHABLANTE ES NUESTRA MIRADA.</p>
          <a className="mag-header-wordmark" href="#top" aria-label="Bien Vivos, inicio">BIENVIVOS</a>
          <p className="mag-header-note">ARTE · COMIDA · MÚSICA<br />CULTURA · FOTO · CALLE</p>
        </div>

        <nav className="mag-nav" aria-label="Navegación principal">
          <div className="mag-nav-links">
            {navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
          </div>
          <span>LEER COMO REVISTA · DESLIZAR COMO TOKIO</span>
        </nav>

        <div className="mag-mobile-bar">
          <a className="mag-mobile-logo" href="#top" onClick={closeMenu}>BIENVIVOS</a>
          <button
            ref={menuButtonRef}
            type="button"
            className={`mag-menu-button ${menuOpen ? "is-open" : ""}`}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mag-mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span />
          </button>
        </div>
      </header>

      <div
        id="mag-mobile-menu"
        className={`mag-mobile-menu ${menuOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú principal"
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Navegación móvil">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              ref={index === 0 ? firstMenuLinkRef : undefined}
              href={item.href}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span>0{index + 1}</span>{item.label}
            </a>
          ))}
        </nav>
        <p>Tokio se vive mejor en español.</p>
      </div>

      <main id="contenido">
        <section className="mag-cover" id="revista" aria-labelledby="cover-title">
          <div className="mag-cover-media mag-media" aria-hidden="true">
            <EditorialImage src={coverImage} alt="" sizes="100vw" priority />
          </div>
          <div className="mag-cover-shade" aria-hidden="true" />
          <div className="mag-cover-grid">
            <div className="mag-cover-topline">
              <p>BIEN VIVOS · TOKIO EN ESPAÑOL</p>
              <p>ARTE · COMIDA · MÚSICA · CULTURA · FOTO</p>
            </div>

            <div className="mag-cover-masthead" aria-hidden="true">BIENVIVOS</div>

            <div className="mag-cover-story">
              <p className="mag-kicker">HISTORIA DE PORTADA · PÁG. 08</p>
              <h1 id="cover-title">Tokio necesita <em>más pasión</em></h1>
              <p>Amamos esta ciudad. Precisamente por eso hemos venido a subirle el volumen.</p>
            </div>

            <div className="mag-cover-lines" aria-label="Historias destacadas de la edición">
              <article className="mag-cover-line">
                <b>18</b>
                <div><small>ARTE</small><p>Una galería. Dos exposiciones. Cero indiferencia.</p></div>
              </article>
              <article className="mag-cover-line">
                <b>30</b>
                <div><small>MÚSICA</small><p>La noche también tiene acento.</p></div>
              </article>
              <article className="mag-cover-line">
                <b>56</b>
                <div><small>FOTO</small><p>Tokio no es gris. Nunca lo fue.</p></div>
              </article>
            </div>
          </div>
          <p className="mag-cover-vertical">Nº 01 · SEPTIEMBRE 2026 · ¥1,200</p>
          <div className="mag-cover-barcode" aria-hidden="true" />
        </section>

        <section className="mag-section mag-contents" id="sumario" aria-labelledby="contents-title">
          <div className="mag-rule-heading"><h2>EDICIÓN Nº 01 · SUMARIO</h2></div>
          <div className="mag-contents-grid">
            <div className="mag-contents-title">
              <p className="mag-kicker">EN ESTE NÚMERO</p>
              <h2 id="contents-title">Todo lo que nos hace sentir vivos.</h2>
            </div>

            <figure className="mag-contents-image mag-media">
              <EditorialImage
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=94"
                alt="Mesa de restaurante preparada para una comida larga"
                sizes="(max-width: 640px) 100vw, (max-width: 899px) 58vw, 58vw"
              />
              <figcaption className="mag-credit">FOTO · BIEN VIVOS / TOKIO</figcaption>
            </figure>

            <div className="mag-contents-list">
              {contents.map((story) => (
                <article className="mag-contents-entry" key={story.page}>
                  <strong>{story.page}</strong>
                  <div>
                    <small>{story.section}</small>
                    <h3>{story.title}</h3>
                    <p>{story.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mag-section mag-front" id="cultura" aria-labelledby="front-title">
          <div className="mag-rule-heading"><h2 id="front-title">PRIMERAS PÁGINAS · TOKIO AHORA</h2></div>
          <div className="mag-front-grid">
            <article className="mag-front-lead">
              <div className="mag-front-lead-image mag-media">
                <EditorialImage
                  src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1800&q=92"
                  alt="Visitantes observando una exposición de arte"
                  sizes="(max-width: 640px) 100vw, (max-width: 899px) 58vw, 50vw"
                />
              </div>
              <p className="mag-kicker">ARTE · MIRAR SIN PEDIR PERMISO</p>
              <h3>Una galería. Dos exposiciones. Cero indiferencia.</h3>
              <p>Entramos sin un manual y salimos con demasiadas preguntas. Exactamente como debería ocurrir.</p>
            </article>

            <div className="mag-front-stack">
              <article className="mag-front-card">
                <p className="mag-kicker">OBJETO DEL MES</p>
                <h3>La belleza de cuidar los detalles</h3>
                <span>↗</span>
              </article>
              <article className="mag-front-card">
                <p className="mag-kicker">BARRIO · KOENJI</p>
                <h3>Después de las seis, la ciudad cambia de dueño</h3>
                <span>↗</span>
              </article>
            </div>

            <aside className="mag-front-quote">
              <b>01</b>
              <p>“No queremos explicar Tokio desde lejos. Queremos vivirlo lo bastante cerca como para discutir con él.”</p>
              <span className="mag-kicker">MANIFIESTO BIEN VIVOS</span>
            </aside>
          </div>
        </section>

        <section className="mag-section mag-feature" id="comer" aria-labelledby="food-title">
          <div className="mag-feature-grid">
            <header className="mag-feature-heading">
              <p className="mag-kicker">HISTORIA DE PORTADA · COMER</p>
              <h2 id="food-title">Una mesa española que hace latir Tokio</h2>
              <span className="mag-page-number">08</span>
            </header>

            <figure className="mag-feature-image-primary mag-media">
              <EditorialImage
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=95"
                alt="Mesa de restaurante con platos y copas"
                sizes="(max-width: 640px) 100vw, (max-width: 899px) 58vw, 58vw"
              />
              <figcaption className="mag-credit">FOTOGRAFÍA · BIEN VIVOS / PÁG. 08</figcaption>
            </figure>

            <div className="mag-feature-copy">
              <p className="mag-deck">Un restaurante, una conversación larga y platos llenos de memoria y carácter.</p>
              <p className="mag-feature-columns">Aquí no venimos solamente a cenar. Venimos a recordar que una buena mesa también puede ser una forma de volver a casa. En Tokio, donde terminar de comer suele significar liberar la mesa, este lugar defiende otra idea del tiempo: quedarse, escuchar, pedir una copa más y permitir que la noche encuentre su propio ritmo. La comida importa, por supuesto. Pero importa tanto como las historias que aparecen entre un plato y el siguiente.</p>
            </div>

            <blockquote className="mag-feature-pullquote">
              “Una mesa no es un mueble. Es el lugar donde una ciudad aprende a hablar con otro acento.”
              <span>BIEN VIVOS · HISTORIA DE PORTADA</span>
            </blockquote>
          </div>
        </section>

        <section className="mag-passion-strip" aria-label="Declaración editorial">
          <p>Comer. Bailar. Conversar. <em>Quedarse un poco más.</em></p>
        </section>

        <section className="mag-section mag-night" id="musica" aria-labelledby="night-title">
          <div className="mag-night-sideword" aria-hidden="true">NOCHE</div>
          <div className="mag-night-grid">
            <header className="mag-night-heading">
              <p className="mag-kicker">MÚSICA · PÁG. 30</p>
              <h2 id="night-title">Tokio no sabe estar en silencio.</h2>
              <p>Aunque a veces lo parezca. Seguimos las listas, los clubes y las obsesiones que marcan el pulso de la ciudad.</p>
            </header>

            <figure className="mag-night-image-main mag-media">
              <EditorialImage
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=2000&q=94"
                alt="Cantante actuando bajo luces de concierto"
                sizes="(max-width: 640px) 100vw, (max-width: 899px) 58vw, 58vw"
              />
              <figcaption className="mag-credit">DIRECTO · TOKIO / PÁG. 30</figcaption>
            </figure>

            <figure className="mag-night-image-small mag-media">
              <EditorialImage
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1500&q=92"
                alt="Pista de baile llena de luz y movimiento"
                sizes="(max-width: 640px) 84vw, 36vw"
              />
              <figcaption className="mag-credit">03:17 · LA NOCHE SIGUE</figcaption>
            </figure>
          </div>
        </section>

        <section className="mag-section mag-index" aria-labelledby="index-title">
          <div className="mag-index-head">
            <div>
              <p className="mag-kicker">GUÍA BIEN VIVOS</p>
              <h2 id="index-title">Más Tokio. Menos rutina.</h2>
            </div>
            <p>Cuatro historias breves para leer entre una estación y la siguiente. Rápidas, visuales y con ganas de sacarte de casa.</p>
          </div>

          <div className="mag-index-list">
            {indexStories.map((story) => (
              <article className="mag-index-row" key={story.page}>
                <strong>{story.page}</strong>
                <div><small>{story.section}</small><h3>{story.title}</h3></div>
                <p>{story.copy}</p>
                <div className="mag-index-thumb mag-media" aria-hidden="true">
                  <EditorialImage src={story.image} alt="" sizes="112px" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mag-section mag-photo" id="foto" aria-labelledby="photo-title">
          <div className="mag-photo-head">
            <p className="mag-kicker">ENSAYO FOTOGRÁFICO · PÁG. 56</p>
            <h2 id="photo-title">Tokio no es gris</h2>
            <p>Color encontrado, color inventado, color que aparece cuando la ciudad cree que nadie la está mirando.</p>
          </div>

          <div className="mag-photo-grid" aria-label="Ensayo fotográfico de Tokio">
            {photoEssayImages.map((image, index) => (
              <figure className="mag-photo-item" key={image.src}>
                <div className="mag-media">
                  <EditorialImage
                    src={image.src}
                    alt={image.label}
                    sizes={index === 0 || index === 5 ? "(max-width: 640px) 86vw, 70vw" : "(max-width: 640px) 86vw, 28vw"}
                  />
                </div>
                <figcaption><span>0{index + 1}</span><span>{image.label}</span></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mag-back-cover" aria-labelledby="launch-title">
          <div className="mag-back-inner">
            <div className="mag-mini-cover" aria-label="Vista previa de la edición inaugural de Bien Vivos">
              <EditorialImage src={coverImage} alt="" sizes="(max-width: 640px) 70vw, 20rem" />
              <strong>BIENVIVOS</strong>
              <h3>Tokio necesita más pasión</h3>
              <p>Nº 01 · SEPTIEMBRE 2026</p>
            </div>
            <div className="mag-back-copy">
              <p className="mag-kicker">LA REVISTA EMPIEZA AQUÍ</p>
              <h2 id="launch-title">Tokio, completamente despierto.</h2>
              <p>Una revista hecha con criterio, color, calle y ganas de vivir. Japón es lo que miramos. El mundo hispanohablante es nuestra mirada.</p>
              <span className="mag-back-date">01 · 09 · 2026 · EDICIÓN INAUGURAL</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="mag-footer">
        <div className="mag-footer-top">
          <div>
            <p className="mag-kicker">TOKIO SE VIVE MEJOR EN ESPAÑOL</p>
            <h2>Nos vemos donde pasa la vida.</h2>
          </div>
          <div className="mag-newsletter">
            <p>LA CARTA DE BIEN VIVOS</p>
            <strong>Muy pronto, historias para abrir despacio.</strong>
          </div>
        </div>

        <div className="mag-footer-links">
          <nav aria-label="Navegación del pie">
            {navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
          </nav>
          <div className="social-placeholder" aria-label="Redes sociales próximamente">
            <span>INSTAGRAM</span><span>TIKTOK</span><span>PINTEREST</span>
          </div>
        </div>

        <a className="mag-footer-wordmark" href="#top" aria-label="Volver arriba">BIENVIVOS</a>

        <div className="mag-footer-bottom">
          <p>© 2026 BIEN VIVOS</p>
          <p>HECHO EN TOKIO · CONTADO EN ESPAÑOL</p>
          <a href="#top">VOLVER ARRIBA ↑</a>
        </div>
      </footer>
    </div>
  );
}
