"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "COVER", href: "#revista" },
  { label: "CONTENTS", href: "#sumario" },
  { label: "EAT", href: "#comer" },
  { label: "MUSIC", href: "#musica" },
  { label: "CULTURE", href: "#cultura" },
  { label: "PHOTO", href: "#foto" },
];

const contents = [
  { page: "08", section: "EAT", title: "A Spanish table in the heart of Tokyo", copy: "Memory, conversation and dishes made for lingering." },
  { page: "18", section: "ART", title: "Picasso, through the eyes of Paul Smith", copy: "Picasso’s work, reframed through Paul Smith’s eye for color, pattern and play." },
  { page: "30", section: "MUSIC", title: "Tokyo sounds better after dark", copy: "The clubs, sounds and late-night obsessions shaping the city right now." },
  { page: "42", section: "CULTURE", title: "The best part starts after dinner", copy: "Why the conversation matters just as much as what’s on the table." },
  { page: "56", section: "PHOTO", title: "Tokyo is not grey", copy: "Finding color in the corners of the city we usually walk past." },
];

const indexStories = [
  { page: "64", section: "NEIGHBORHOODS", title: "Koenji after dark", copy: "Small shops, crowded counters and streets that still feel like they belong to the neighborhood.", image: "/images/editorial/index-koenji-thumb.jpg" },
  { page: "68", section: "OBJECTS", title: "The details that make the difference", copy: "Five small acts of care that can transform an ordinary moment.", image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1000&q=88" },
  { page: "72", section: "SOUND", title: "What Tokyo is listening to now", copy: "Pop, electronic, guitars and everything currently making its way through our headphones.", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1000&q=88" },
  { page: "76", section: "AGENDA", title: "Eight reasons to go out this week", copy: "Art, food, music and eight good reasons not to stay home.", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=88" },
];

const photoEssayImages = [
  { src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1800&q=92", label: "Two people, one city in motion" },
  { src: "/images/editorial/tokio-no-es-gris-mona-lisa-tanabata.png", label: "Tanabata Mona Lisa" },
  { src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1400&q=90", label: "The city wakes" },
  { src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=90", label: "Urban rhythm" },
  { src: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1400&q=90", label: "A paper pig watches the street" },
  { src: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1800&q=90", label: "Tokyo in bloom" },
];

const coverImage = "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=2400&q=95";
const contentsImage = "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=2000&q=94";
const foodDetailImage = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=92";
const indexFeatureImage = "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=2200&q=94";

function EditorialImage({ src, alt, sizes, priority = false }: { src: string; alt: string; sizes: string; priority?: boolean }) {
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} quality={88} />;
}

export default function EastokyoHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    const main = document.querySelector<HTMLElement>("main");
    const footer = document.querySelector<HTMLElement>("footer");
    document.body.style.overflow = "hidden";
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    menuCloseRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
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
      <a className="mag-skip-link" href="#contenido">Skip to content</a>

      <header className="mag-header">
        <div className="mag-header-rail">
          <p>INDEPENDENT MAGAZINE · TOKYO</p>
          <p>INAUGURAL ISSUE · Nº 01</p>
          <p>01 SEPTEMBER 2026</p>
        </div>
        <nav className="mag-nav" aria-label="Main navigation">
          <div className="mag-nav-links">{navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</div>
          <span>TOKYO · LOUDER THAN IT LOOKS</span>
        </nav>
        <div className="mag-mobile-bar">
          <a className="mag-mobile-logo" href="#top" onClick={closeMenu}>EASTOKYO</a>
          <button ref={menuButtonRef} type="button" className={`mag-menu-button ${menuOpen ? "is-open" : ""}`} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mag-mobile-menu" onClick={() => setMenuOpen((open) => !open)}><span /><span /></button>
        </div>
      </header>

      <div id="mag-mobile-menu" className={`mag-mobile-menu ${menuOpen ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Main menu" aria-hidden={!menuOpen}>
        <button ref={menuCloseRef} type="button" className="mag-mobile-menu-close" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>CLOSE <span aria-hidden="true">×</span></button>
        <nav aria-label="Mobile navigation">{navItems.map((item, index) => <a key={item.label} href={item.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}><span>0{index + 1}</span>{item.label}</a>)}</nav>
        <p>Tokyo, fully alive.</p>
      </div>

      <main id="contenido">
        <section className="mag-cover" id="revista" aria-labelledby="cover-title">
          <div className="mag-cover-media mag-media" aria-hidden="true"><EditorialImage src={coverImage} alt="" sizes="100vw" priority /></div>
          <div className="mag-cover-shade" aria-hidden="true" />
          <div className="mag-cover-grid">
            <div className="mag-cover-topline"><p>EASTOKYO · TOKYO, FULLY ALIVE</p><p>ART · FOOD · MUSIC · CULTURE · PHOTO</p></div>
            <div className="mag-cover-masthead" aria-hidden="true">EASTOKYO</div>
            <div className="mag-cover-story">
              <p className="mag-kicker">COVER STORY · P. 08</p>
              <h1 id="cover-title">Tokyo needs <em>more passion</em></h1>
              <p>We love this city. We just want more of it.</p>
            </div>
            <div className="mag-cover-lines" aria-label="Featured stories in this issue">
              <article className="mag-cover-line"><b>18</b><div><small>ART</small><p>Picasso, through the eyes of Paul Smith</p></div></article>
              <article className="mag-cover-line"><b>30</b><div><small>MUSIC</small><p>Tokyo sounds better after dark.</p></div></article>
              <article className="mag-cover-line"><b>56</b><div><small>PHOTO</small><p>Tokyo is not grey. It never was.</p></div></article>
            </div>
          </div>
          <p className="mag-cover-vertical">Nº 01 · SEPTEMBER 2026 · ¥1,200</p><div className="mag-cover-barcode" aria-hidden="true" />
        </section>

        <section className="mag-section mag-contents" id="sumario" aria-labelledby="contents-title">
          <div className="mag-rule-heading"><h2>ISSUE Nº 01 · CONTENTS</h2></div>
          <div className="mag-contents-grid">
            <div className="mag-contents-title"><p className="mag-kicker">IN THIS ISSUE</p><h2 id="contents-title">Everything that makes us feel alive.</h2></div>
            <figure className="mag-contents-image mag-media"><EditorialImage src={contentsImage} alt="Tokyo in motion, full of color, street life and everyday energy" sizes="(max-width: 640px) 100vw, (max-width: 899px) 58vw, 34vw" /><figcaption className="mag-credit">STREET · EASTOKYO / TOKYO</figcaption></figure>
            <div className="mag-contents-list">{contents.map((story) => <article className="mag-contents-entry" key={story.page}><strong>{story.page}</strong><div><small>{story.section}</small><h3>{story.title}</h3><p>{story.copy}</p></div></article>)}</div>
          </div>
        </section>

        <section className="mag-section mag-front" id="cultura" aria-labelledby="front-title">
          <div className="mag-rule-heading"><h2 id="front-title">FRONT OF BOOK · TOKYO NOW</h2></div>
          <div className="mag-front-grid">
            <article className="mag-front-lead">
              <picture style={{ display: "block", width: "100%", marginBottom: "1rem" }}>
                <source media="(max-width: 640px)" srcSet="/images/editorial/picasso-paul-smith-mobile.png" />
                <img src="/images/editorial/picasso-paul-smith-desktop.png" alt="A visitor studying Picasso ceramics in the Paul Smith exhibition at The National Art Center, Tokyo" style={{ display: "block", width: "100%", height: "auto" }} />
              </picture>
              <p className="mag-kicker">ART · PICASSO IN TOKYO</p><h3>Picasso, through the eyes of Paul Smith</h3><p>At The National Art Center, Tokyo, Picasso’s work meets Paul Smith’s unmistakable eye for color, pattern and surprise.</p>
            </article>
            <div className="mag-front-stack">
              <article className="mag-front-card">
                <picture style={{ display: "block", width: "100%", marginBottom: "1rem" }}>
                  <source media="(max-width: 640px)" srcSet="/images/editorial/picasso-paying-attention-mobile.jpg" />
                  <img src="/images/editorial/picasso-paying-attention-desktop.png" alt="A visitor studying a Picasso work at The National Art Center, Tokyo" style={{ display: "block", width: "100%", height: "auto" }} />
                </picture>
                <p className="mag-kicker">OBJECT OF THE MONTH</p><h3>The art of paying attention</h3><span>↗</span>
              </article>
              <article className="mag-front-card">
                <picture style={{ display: "block", width: "100%", marginBottom: "1rem" }}>
                  <source media="(max-width: 640px)" srcSet="/images/editorial/picasso-striped-installation-mobile.jpg" />
                  <img src="/images/editorial/picasso-striped-installation-desktop.jpg" alt="Blue and white striped shirts suspended in the Picasso exhibition at The National Art Center, Tokyo" style={{ display: "block", width: "100%", height: "auto" }} />
                </picture>
                <p className="mag-kicker">ART · INSTALLATION</p><h3>Picasso in stripes</h3><span>↗</span>
              </article>
            </div>
            <aside className="mag-front-quote"><b>01</b><p>“We do not want to explain Tokyo from a distance. We want to live close enough to argue with it.”</p><span className="mag-kicker">EASTOKYO MANIFESTO</span></aside>
          </div>
        </section>

        <section className="mag-section mag-feature" id="comer" aria-labelledby="food-title">
          <div className="mag-feature-grid">
            <header className="mag-feature-heading"><p className="mag-kicker">COVER STORY · EAT</p><h2 id="food-title">A Spanish table in the heart of Tokyo</h2><span className="mag-page-number">08</span></header>
            <figure className="mag-feature-image-primary mag-media"><EditorialImage src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=95" alt="Restaurant table with plates and glasses" sizes="(max-width: 640px) 100vw, (max-width: 899px) 58vw, 50vw" /><figcaption className="mag-credit">PHOTOGRAPHY · EASTOKYO / P. 08</figcaption></figure>
            <figure className="mag-feature-image-detail mag-media"><EditorialImage src={foodDetailImage} alt="Shared table with colorful plates and conversation" sizes="(max-width: 640px) 100vw, (max-width: 899px) 42vw, 28vw" /><figcaption className="mag-credit">AFTER DINNER · DETAIL / P. 11</figcaption></figure>
            <div className="mag-feature-copy"><p className="mag-deck">A restaurant, a long conversation, and plates filled with memory.</p><p className="mag-feature-columns">We’re not here just to eat. A good table can be a way of finding your way home. In a city where dinner can move quickly, this place asks you to stay: order another glass, keep the conversation going, and let the night take its time. The food matters, of course. But so do the stories that unfold between one plate and the next.</p></div>
            <blockquote className="mag-feature-pullquote">“A table is more than furniture. It’s where food becomes conversation, and strangers stop feeling like strangers.”<span>EASTOKYO · COVER STORY</span></blockquote>
          </div>
        </section>

        <section className="mag-passion-strip" aria-label="Editorial statement"><p>Eat. Dance. Talk. <em>Stay a little longer.</em></p></section>

        <section className="mag-section mag-night" id="musica" aria-labelledby="night-title">
          <div className="mag-night-sideword" aria-hidden="true">NIGHT</div>
          <div className="mag-night-grid">
            <header className="mag-night-heading"><p className="mag-kicker">MUSIC · P. 30</p><h2 id="night-title">Tokyo was never quiet.</h2><p>You just have to know where to listen. We follow the clubs, sounds and late-night obsessions setting the city’s pulse.</p></header>
            <figure className="mag-night-image-main mag-media"><EditorialImage src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=2000&q=94" alt="Singer performing under concert lights" sizes="(max-width: 640px) 100vw, (max-width: 899px) 62vw, 58vw" /><figcaption className="mag-credit">LIVE · TOKYO / 01:14</figcaption></figure>
            <div className="mag-night-copy"><p className="mag-deck">Tokyo sounds better after dark.</p><p>Somewhere between the last train and the first, the city changes register. Basements fill, speakers warm up, and rooms no bigger than living rooms become their own worlds.</p><p>We’re interested in those rooms—and in the people keeping them alive.</p></div>
            <blockquote className="mag-night-quote">“The best nights are the ones you never planned.”</blockquote>
          </div>
        </section>

        <section className="mag-section mag-culture" aria-labelledby="culture-title">
          <div className="mag-rule-heading"><h2>CULTURE · P. 42</h2></div>
          <div className="mag-culture-grid">
            <header><p className="mag-kicker">ESSAY · TABLE TALK</p><h2 id="culture-title">The best part starts after dinner.</h2><p className="mag-deck">The plates are empty. Nobody leaves. That’s when things get interesting.</p></header>
            <figure className="mag-culture-image mag-media"><EditorialImage src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=94" alt="Friends sharing food and conversation at a table" sizes="(max-width: 640px) 100vw, (max-width: 899px) 60vw, 46vw" /><figcaption className="mag-credit">TOKYO · AFTER DINNER</figcaption></figure>
            <div className="mag-culture-body"><p>Tokyo is exceptionally good at the beginning of an evening. Reservations are precise. Trains arrive on time. The first drink appears almost immediately.</p><p>But our favorite part comes later, once the evening has stopped behaving itself.</p><p>The table becomes crowded with empty glasses. Somebody orders something nobody needs. The conversation takes a turn that could never have been scheduled.</p><p>That is the Tokyo we want more of.</p></div>
            <p className="mag-culture-bigword" aria-hidden="true">STAY</p>
          </div>
        </section>

        <section className="mag-section mag-photo" id="foto" aria-labelledby="photo-title">
          <header className="mag-photo-heading"><p className="mag-kicker">PHOTO ESSAY · P. 56</p><h2 id="photo-title">Tokyo is not grey.</h2><p>Color is everywhere. You just have to stop treating the city like background.</p></header>
          <div className="mag-photo-grid">{photoEssayImages.map((image, index) => <figure key={image.src} className={`mag-photo-${index + 1} mag-media`}><EditorialImage src={image.src} alt={image.label} sizes={index === 0 || index === 5 ? "(max-width: 640px) 100vw, 62vw" : "(max-width: 640px) 100vw, 31vw"} /><figcaption className="mag-credit">0{index + 1} · {image.label.toUpperCase()}</figcaption></figure>)}</div>
        </section>

        <section className="mag-section mag-index" aria-labelledby="index-title">
          <div className="mag-index-header"><p className="mag-kicker">THE BACK PAGES · P. 64—79</p><h2 id="index-title">One more thing.</h2></div>
          <figure className="mag-index-feature mag-media"><EditorialImage src={indexFeatureImage} alt="Tokyo street scene at night" sizes="100vw" /><figcaption className="mag-credit">TOKYO · KEEP LOOKING</figcaption></figure>
          <div className="mag-index-grid">{indexStories.map((story) => <article key={story.page}><div className="mag-index-thumb mag-media"><EditorialImage src={story.image} alt="" sizes="(max-width: 640px) 100vw, 25vw" /></div><strong>{story.page}</strong><small>{story.section}</small><h3>{story.title}</h3><p>{story.copy}</p></article>)}</div>
        </section>
      </main>

      <footer className="mag-footer"><div><strong>EASTOKYO</strong><p>Independent magazine · Tokyo</p></div><p>Tokyo, fully alive.</p><a href="#top">BACK TO TOP ↑</a></footer>
    </div>
  );
}