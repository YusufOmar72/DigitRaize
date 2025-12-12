"use client";

export default function BlobPicker() {
  // Pre-made organic blob shapes (like using an icon library)
  const blobs = [
    {
      id: 1,
      name: "Blob 1",
      clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 75% 90%, 50% 100%, 25% 90%, 0% 70%, 0% 30%)",
    },
    {
      id: 2,
      name: "Blob 2",
      clipPath: "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)",
    },
    {
      id: 3,
      name: "Blob 3",
      clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
    },
    {
      id: 4,
      name: "Blob 4",
      clipPath: "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
    },
    {
      id: 5,
      name: "Blob 5",
      clipPath: "polygon(40% 0%, 80% 10%, 100% 35%, 100% 70%, 75% 90%, 35% 100%, 10% 85%, 0% 50%, 15% 10%)",
    },
    {
      id: 6,
      name: "Blob 6",
      clipPath: "polygon(30% 0%, 70% 0%, 95% 25%, 100% 50%, 90% 80%, 60% 100%, 30% 100%, 5% 80%, 0% 50%, 5% 20%)",
    },
    {
      id: 7,
      name: "Blob 7",
      clipPath: "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 95%, 50% 100%, 20% 95%, 0% 70%, 0% 35%, 20% 10%)",
    },
    {
      id: 8,
      name: "Blob 8",
      clipPath: "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
    },
    {
      id: 9,
      name: "Blob 9",
      clipPath: "polygon(45% 0%, 80% 5%, 100% 30%, 100% 65%, 85% 95%, 55% 100%, 20% 95%, 0% 60%, 10% 25%)",
    },
    {
      id: 10,
      name: "Blob 10",
      clipPath: "polygon(35% 0%, 75% 5%, 100% 30%, 95% 70%, 70% 95%, 30% 100%, 5% 75%, 0% 40%, 15% 10%)",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-zinc-900 dark:text-white">
          Pick Your 3 Favorite Blobs
        </h1>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12">
          Choose one for Hero, one for Boost Your Business, and one for Get In Touch
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {blobs.map((blob) => (
            <div
              key={blob.id}
              className="flex flex-col items-center gap-4 p-6 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-white transition-all"
            >
              <div className="text-xl font-bold text-zinc-900 dark:text-white">
                {blob.name}
              </div>
              
              {/* Light Mode Preview */}
              <div className="w-full aspect-square bg-white border border-zinc-200 rounded-xl overflow-hidden relative p-8">
                <div
                  className="w-full h-full bg-zinc-900 opacity-[0.06]"
                  style={{ clipPath: blob.clipPath }}
                />
                <div className="absolute bottom-2 right-2 text-xs text-zinc-500 bg-white px-2 py-1 rounded">
                  Light
                </div>
              </div>

              {/* Dark Mode Preview */}
              <div className="w-full aspect-square bg-black border border-zinc-800 rounded-xl overflow-hidden relative p-8">
                <div
                  className="w-full h-full bg-zinc-100 opacity-[0.06]"
                  style={{ clipPath: blob.clipPath }}
                />
                <div className="absolute bottom-2 right-2 text-xs text-zinc-400 bg-black px-2 py-1 rounded">
                  Dark
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
            Instructions:
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Look at each blob in both light and dark mode. Tell me which 3 numbers you want:
            <br />
            • One for <strong>Hero Section</strong>
            <br />
            • One for <strong>Boost Your Business</strong>
            <br />
            • One for <strong>Get In Touch</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

