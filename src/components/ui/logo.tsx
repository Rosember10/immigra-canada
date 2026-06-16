export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="/" className="logo" aria-label="Immigra Canada">
      <span className="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 28 28" width="28" height="28">
          <path d="M14 2.5l3 3-3 3-3-3 3-3z" fill="var(--accent)" />
          <path
            d="M5 13.5l3-3 3 3-3 3-3-3zM23 13.5l-3-3-3 3 3 3 3-3zM14 24.5l3-3-3-3-3 3 3 3z"
            fill={light ? "rgba(255,255,255,.9)" : "var(--ink)"}
          />
        </svg>
      </span>
      <span
        className="logo-text"
        style={{ color: light ? "#fff" : "var(--ink)" }}
      >
        Immigra<span className="logo-text-muted"> Canada</span>
      </span>
    </a>
  );
}
