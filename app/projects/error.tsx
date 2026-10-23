"use client";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <p>Failed to load projects: {error.message}</p>
      <button onClick={reset} className="border rounded px-2 py-1 mt-2">
        Retry
      </button>
    </div>
  );
}
