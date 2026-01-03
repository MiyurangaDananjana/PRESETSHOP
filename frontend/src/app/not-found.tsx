import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom text-center px-4">
        <h1 className="text-9xl font-bold text-neutral-950 mb-4">404</h1>
        <h2 className="heading-3 mb-4">Page Not Found</h2>
        <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/products" className="btn-secondary">
            Browse Presets
          </Link>
        </div>
      </div>
    </div>
  );
}
