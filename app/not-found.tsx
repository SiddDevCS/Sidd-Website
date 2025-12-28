import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center pt-16 pb-16 animate-fadeInUp px-4">
      <div className="w-full glass-dark rounded-3xl shadow-2xl p-8 md:p-12 text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gradient-green mb-4">
            404
          </h1>
          <p className="text-2xl text-neutral-300 mb-6">
            Hi there! Looks like you couldn&apos;t find what you were looking for :(
          </p>
        </div>

        <div className="mb-8">
          <p className="text-neutral-400 text-lg mb-6">
            Don&apos;t worry, it happens to the best of us! Let&apos;s get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Go Home
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-700">
          <p className="text-neutral-500 text-sm">
            If you think this is an error, feel free to{' '}
            <Link href="/contact" className="text-blue-400 hover:text-blue-300 underline">
              contact me
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
} 