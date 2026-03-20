import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white/5 backdrop-blur-sm border-t border-white/10 py-3 mt-auto">
      <div className="container mx-auto px-6 text-center">
        <p className="text-white/60 text-sm mb-1">
          Not affiliated with Spotify AB or any of its affiliates.
        </p>
        <div className="flex justify-center gap-3 text-sm">
          <Link href="/privacy" className="text-white/60 hover:text-white transition">
            Privacy Policy
          </Link>
          <span className="text-white/40">•</span>
          <a 
            href="https://www.spotify.com/legal/privacy-policy/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition"
          >
            Spotify Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}