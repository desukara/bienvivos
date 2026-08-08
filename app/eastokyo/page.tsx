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
  { page: "08", section: "EAT", title: "A Spanish table that makes Tokyo pulse", copy: "Memory, conversation and dishes in no hurry to disappear." },
  { page: "18", section: "ART", title: "Picasso, through another pair of eyes", copy: "Four views from Picasso — A Rebel in the History of Art." },
  { page: "30", section: "MUSIC", title: "The night has its own accent", copy: "Clubs, playlists and songs for a city that refuses to stand still." },
  { page: "42", section: "CULTURE", title: "Life starts after dinner", copy: "An affectionate and radical defense of lingering at the table." },
  { page: "56", section: "PHOTO", title: "Tokyo is not grey", copy: "Color found when the city thinks nobody is looking." },
];

const indexStories = [
  { page: "64", section: "NEIGHBORHOODS", title: "Koenji after six", copy: "Small shops, long counters and a night that still belongs to its neighbors.", image: "/images/editorial/index-koenji-thumb.jpg" },
  { page: "68", section: "OBJECTS", title: "Detail as a form of respect", copy: "Five Japanese gestures that turn the everyday into something memorable.", image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1000&q=88" },
  { page: "72", section: "SOUND", title: "What Tokyo is listening to now", copy: "An unapologetic mix of pop, electronic music, guitars and volume.", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1000&q=88" },
  { page: "76", section: "AGENDA", title: "Eight reasons to go out this week", copy: "Art, food and music to keep Tokyo from becoming routine.", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=88" },
];

const photoEssayImages = [
  { src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1800&q=92", label: "Two people, one city in motion" },
  { src: "/images/editorial/tokio-no-es-gris-mona-lisa-tanabata.png", label: "Tanabata Mona Lisa" },
  { src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1400&q=90", label: "The city wakes" },
  { src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=90", label: "Urban rhythm" },
  { src: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1400&q=90", label: "A paper pig watches the street" },
  { src: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1800&q=90", label: "Tokyo in bloom" },
];

const contentsImage = "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=2000&q=94";
const foodDetailImage = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=92";
const indexFeatureImage = "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=2200&q=94";

function EditorialImage({ src, alt, sizes, priority = false }: { src: string; alt: string; sizes: string; priority?: boolean }) {
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} quality={88} />;
}

function PicassoPicture({ desktop, mobile, alt }: { desktop: string; mobile: string; alt: string }) {
  return <picture className="picasso-picture"><source media="(max-width: 640px)" srcSet={mobile} /><img src={desktop} alt={alt} loading="lazy" /></picture>;
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
    main?.setAttribute("inert", ""); footer?.setAttribute("inert", ""); menuCloseRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", handleKeyDown);
    return () => { document.body.style.overflow = previousOverflow; main?.removeAttribute("inert"); footer?.removeAttribute("inert"); window.removeEventListener("keydown", handleKeyDown); menuButton?.focus(); };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return <div className="mag-page" id="top">
    <a className="mag-skip-link" href="#contenido">Skip to content</a>
    <header className="mag-header"><div className="mag-header-rail"><p>INDEPENDENT MAGAZINE · TOKYO</p><p>INAUGURAL ISSUE · Nº 01</p><p>01 SEPTEMBER 2026</p></div><nav className="mag-nav" aria-label="Main navigation"><div className="mag-nav-links">{navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</div><span>READ LIKE A MAGAZINE · MOVE LIKE TOKYO</span></nav><div className="mag-mobile-bar"><a className="mag-mobile-logo" href="#top" onClick={closeMenu}>EASTOKYO</a><button ref={menuButtonRef} type="button" className={`mag-menu-button ${menuOpen ? "is-open" : ""}`} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mag-mobile-menu" onClick={() => setMenuOpen((open) => !open)}><span /><span /></button></div></header>
    <div id="mag-mobile-menu" className={`mag-mobile-menu ${menuOpen ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Main menu" aria-hidden={!menuOpen}><button ref={menuCloseRef} type="button" className="mag-mobile-menu-close" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>CLOSE <span aria-hidden="true">×</span></button><nav aria-label="Mobile navigation">{navItems.map((item,index)=><a key={item.label} href={item.href} onClick={closeMenu} tabIndex={menuOpen?0:-1}><span>0{index+1}</span>{item.label}</a>)}</nav><p>Tokyo, fully alive.</p></div>

    <main id="contenido">
      <section className="mag-cover" id="revista" aria-labelledby="cover-title"><picture className="mag-cover-media mag-media" aria-hidden="true"><source media="(max-width: 640px)" srcSet="/images/editorial/picasso-bullfight-01-mobile.png"/><img src="/images/editorial/picasso-bullfight-01-desktop.png" alt="" fetchPriority="high"/></picture><div className="mag-cover-shade" aria-hidden="true" /><div className="mag-cover-grid"><div className="mag-cover-topline"><p>EASTOKYO · TOKYO, FULLY ALIVE</p><p>ART · FOOD · MUSIC · CULTURE · PHOTO</p></div><div className="mag-cover-masthead" aria-hidden="true">EASTOKYO</div><div className="mag-cover-story"><p className="mag-kicker">ART · TOKYO / PICASSO · P. 18</p><h1 id="cover-title">The bull <em>never left him</em></h1><p><strong>Picasso, through the Eyes of Paul Smith · The National Art Center, Tokyo.</strong> Picasso returned to the bullring throughout his life. In Tokyo, the exhibition follows that obsession into his art—where the bull becomes spectacle, violence, myth and something much more personal.</p><a href="#cultura">ENTER THE EXHIBITION ↓</a></div><div className="mag-cover-lines" aria-label="Featured stories in this issue"><article className="mag-cover-line"><b>18</b><div><small>ART · PICASSO</small><p>The bull, the arena and a lifelong obsession.</p></div></article><article className="mag-cover-line"><b>30</b><div><small>MUSIC</small><p>The night has its own accent.</p></div></article><article className="mag-cover-line"><b>56</b><div><small>PHOTO</small><p>Tokyo is not grey. It never was.</p></div></article></div></div><p className="mag-cover-vertical">Nº 01 · SEPTEMBER 2026 · ¥1,200</p><div className="mag-cover-barcode" aria-hidden="true" /></section>

      <section className="mag-section mag-contents" id="sumario" aria-labelledby="contents-title"><div className="mag-rule-heading"><h2>ISSUE Nº 01 · CONTENTS</h2></div><div className="mag-contents-grid"><div className="mag-contents-title"><p className="mag-kicker">IN THIS ISSUE</p><h2 id="contents-title">Everything that makes us feel alive.</h2></div><figure className="mag-contents-image mag-media"><EditorialImage src={contentsImage} alt="Tokyo in motion, full of color, street life and everyday energy" sizes="(max-width: 640px) 100vw, (max-width: 899px) 58vw, 34vw" /><figcaption className="mag-credit">STREET · EASTOKYO / TOKYO</figcaption></figure><div className="mag-contents-list">{contents.map((story)=><article className="mag-contents-entry" key={story.page}><strong>{story.page}</strong><div><small>{story.section}</small><h3>{story.title}</h3><p>{story.copy}</p></div></article>)}</div></div></section>

      <section className="mag-section mag-front picasso-feature" id="cultura" aria-labelledby="front-title">
        <div className="mag-rule-heading"><h2>FRONT OF BOOK · TOKYO NOW</h2></div>
        <div className="picasso-feature-intro"><div className="picasso-feature-title"><p className="mag-kicker">ART · PICASSO IN TOKYO · P. 18</p><h3 id="front-title">Picasso, through another pair of eyes.</h3><p className="mag-deck">At The National Art Center, Tokyo, Picasso meets Paul Smith’s instinct for color, pattern and surprise.</p></div><aside className="picasso-feature-note"><strong>ONE GALLERY · TWO EXHIBITIONS</strong><p>Rather than explaining Picasso from a distance, the exhibition puts his work into conversation with a contemporary designer who has spent a career looking differently.</p></aside></div>
        <div className="picasso-gallery">
          <figure className="picasso-shot picasso-shot-1"><PicassoPicture desktop="/images/editorial/picasso-paul-smith-desktop.png" mobile="/images/editorial/picasso-paul-smith-mobile.png" alt="Visitor studying Picasso ceramics in the Paul Smith exhibition at The National Art Center, Tokyo" /><figcaption><span>01 · PICASSO × PAUL SMITH</span><span>THE NATIONAL ART CENTER, TOKYO</span></figcaption></figure>
          <figure className="picasso-shot picasso-shot-2"><PicassoPicture desktop="/images/editorial/picasso-paying-attention-desktop.png" mobile="/images/editorial/picasso-paying-attention-mobile.jpg" alt="Visitor looking closely at a Picasso work in Tokyo" /><figcaption><span>02 · THE ART OF PAYING ATTENTION</span><span>EASTOKYO / P.18</span></figcaption></figure>
          <figure className="picasso-shot picasso-shot-3"><PicassoPicture desktop="/images/editorial/picasso-striped-installation-desktop.jpg" mobile="/images/editorial/picasso-striped-installation-mobile.jpg" alt="Blue and white striped installation in the Picasso exhibition" /><figcaption><span>03 · PICASSO IN STRIPES</span><span>EXHIBITION VIEW</span></figcaption></figure>
        </div>
        <div className="picasso-gallery-secondary"><figure className="picasso-shot picasso-shot-4"><PicassoPicture desktop="/images/editorial/picasso-portrait-desktop.png" mobile="/images/editorial/picasso-portrait-mobile.png" alt="Picasso portrait work displayed at the Tokyo exhibition" /><figcaption><span>04 · PORTRAIT</span><span>PICASSO / TOKYO</span></figcaption></figure><div className="picasso-feature-outro"><div className="picasso-meta">PICASSO × PAUL SMITH<br/>THE NATIONAL ART CENTER, TOKYO<br/>EASTOKYO · ART · P.18</div><p>The result is less a lesson than an invitation: slow down, notice the collisions, and see familiar work with fresh eyes. Four moments from an exhibition built around the pleasure of looking again.</p></div></div>
      </section>

      <section className="mag-section mag-feature" id="comer" aria-labelledby="food-title"><div className="mag-feature-grid"><header className="mag-feature-heading"><p className="mag-kicker">COVER STORY · EAT</p><h2 id="food-title">A Spanish table that makes Tokyo pulse</h2><span className="mag-page-number">08</span></header><figure className="mag-feature-image-primary mag-media"><EditorialImage src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=95" alt="Restaurant table with plates and glasses" sizes="(max-width: 640px) 100vw, (max-width: 899px) 58vw, 50vw" /><figcaption className="mag-credit">PHOTOGRAPHY · EASTOKYO / P. 08</figcaption></figure><figure className="mag-feature-image-detail mag-media"><EditorialImage src={foodDetailImage} alt="Shared table with colorful plates and conversation" sizes="(max-width: 640px) 100vw, (max-width: 899px) 42vw, 28vw" /><figcaption className="mag-credit">AFTER DINNER · DETAIL / P. 11</figcaption></figure><div className="mag-feature-copy"><p className="mag-deck">A restaurant, a long conversation and plates full of memory and character.</p><p className="mag-feature-columns">We are not here only to eat. We are here to remember that a good table can also be a way home. In Tokyo, where finishing dinner often means giving up the table, this place argues for another idea of time: stay, listen, order another glass and let the night find its own rhythm. The food matters, of course. But so do the stories that appear between one plate and the next.</p></div><blockquote className="mag-feature-pullquote">“A table is not furniture. It is where a city learns to speak with another accent.”<span>EASTOKYO · COVER STORY</span></blockquote></div></section>
      <section className="mag-passion-strip" aria-label="Editorial statement"><p>Eat. Dance. Talk. <em>Stay a little longer.</em></p></section>
      <section className="mag-section mag-night" id="musica" aria-labelledby="night-title"><div className="mag-night-sideword" aria-hidden="true">NIGHT</div><div className="mag-night-grid"><header className="mag-night-heading"><p className="mag-kicker">MUSIC · P. 30</p><h2 id="night-title">Tokyo does not know how to be quiet.</h2><p>Even when it seems that way. We follow the playlists, clubs and obsessions that set the pulse of the city.</p></header><figure className="mag-night-image-main mag-media"><EditorialImage src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=2200&q=95" alt="Singer performing under red stage light" sizes="(max-width: 640px) 100vw, (max-width: 899px) 62vw, 50vw" /><figcaption className="mag-credit">LIVE · TOKYO / 00:47</figcaption></figure><div className="mag-night-playlist"><p>PLAYLIST · Nº 01</p>{["Shibuya at 1:17", "Last train, first chorus", "Neon without nostalgia", "One more before home"].map((track,index)=><div key={track}><span>0{index+1}</span><strong>{track}</strong><small>{["03:42","04:18","05:07","03:56"][index]}</small></div>)}</div><blockquote>“The best nights do not ask permission to become mornings.”</blockquote></div></section>
      <section className="mag-section mag-photo" id="foto" aria-labelledby="photo-title"><header className="mag-photo-heading"><p className="mag-kicker">PHOTO ESSAY · P. 56</p><h2 id="photo-title">Tokyo is not grey.</h2><p>Six frames. No explanations. The city has enough color to defend itself.</p></header><div className="mag-photo-grid">{photoEssayImages.map((image,index)=><figure className={`mag-photo-item mag-photo-item-${index+1} mag-media`} key={image.src}><EditorialImage src={image.src} alt={image.label} sizes={index===0||index===5?"(max-width: 640px) 100vw, 64vw":"(max-width: 640px) 100vw, 32vw"}/><figcaption><span>0{index+1}</span>{image.label}</figcaption></figure>)}</div></section>
      <section className="mag-section mag-index" id="guia" aria-labelledby="index-title"><div className="mag-rule-heading"><h2>BACK OF BOOK · TOKYO INDEX</h2></div><div className="mag-index-header"><div><p className="mag-kicker">KEEP THIS PAGE</p><h2 id="index-title">Four reasons to leave the house.</h2></div><p>Addresses, sounds, objects and places worth making room for this month.</p></div><figure className="mag-index-feature mag-media"><EditorialImage src={indexFeatureImage} alt="Tokyo street glowing with signs after dark" sizes="100vw"/><figcaption className="mag-credit">TOKYO INDEX · SEPTEMBER 2026</figcaption></figure><div className="mag-index-list">{indexStories.map((story)=><article key={story.page}><div className="mag-index-thumb mag-media"><EditorialImage src={story.image} alt="" sizes="(max-width: 640px) 30vw, 14vw"/></div><strong>{story.page}</strong><div><small>{story.section}</small><h3>{story.title}</h3><p>{story.copy}</p></div><span>↗</span></article>)}</div></section>
      <section className="mag-closing" aria-label="Closing statement"><p className="mag-closing-small">EASTOKYO · INDEPENDENT MAGAZINE · Nº 01</p><p className="mag-closing-big">Tokyo is already alive.<br/><em>We are here to notice.</em></p><a href="#top">BACK TO THE TOP ↑</a></section>
    </main>
    <footer className="mag-footer"><p>© 2026 EASTOKYO</p><p>MADE BETWEEN TOKYO AND EVERYWHERE ELSE</p><p>NEXT ISSUE · OCTOBER 2026</p></footer>
  </div>;
}
