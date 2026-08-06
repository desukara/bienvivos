import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100svh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        textAlign: "center",
        background: "#f3eadf",
        color: "#250b14",
      }}
    >
      <div>
        <p style={{ letterSpacing: ".18em", fontWeight: 700 }}>ERROR 404 · TOKIO</p>
        <h1 style={{ fontFamily: "var(--font-bienvivos-display)", fontSize: "clamp(3rem, 10vw, 8rem)", margin: ".3em 0" }}>
          Esta página salió a vivir.
        </h1>
        <p>No está aquí, pero la revista sí.</p>
        <Link href="/" style={{ display: "inline-block", marginTop: "2rem", fontWeight: 700 }}>
          VOLVER A BIEN VIVOS ↑
        </Link>
      </div>
    </main>
  );
}
