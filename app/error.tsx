"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-zinc-900 dark:text-white px-4">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight">
            Something went wrong!
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>
        </div>
        <div>
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
