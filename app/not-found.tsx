import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-zinc-900 dark:text-white px-4">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold tracking-tighter text-zinc-200 dark:text-zinc-800">
          404
        </h1>
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight">
            Page not found
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        <div>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
