import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center">
        <Link href="/" className="font-serif text-lg tracking-wide">
          Evan Streater
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
          <Link
            href="/about"
            className="transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/concerts"
            className="transition-colors hover:text-foreground"
          >
            Concerts
          </Link>
          <Link
            href="/recordings"
            className="transition-colors hover:text-foreground"
          >
            Recordings
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Evan Streater. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
