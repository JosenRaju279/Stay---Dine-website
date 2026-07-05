import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-lg">
        <div className="text-gold/20 text-[150px] md:text-[200px] font-heading font-bold leading-none select-none">
          404
        </div>
        <div className="gold-line-center mb-6 -mt-4" />
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-paragraph text-base leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us guide you back to luxury.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-3 bg-gold text-black text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-gold-hover transition-all duration-300 min-w-[160px]"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border border-white/20 text-white text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-white/10 transition-all duration-300 min-w-[160px]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
