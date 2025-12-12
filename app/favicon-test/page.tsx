"use client";

export default function FaviconTest() {
  const designs = [
    {
      name: "Option 1: Simple Arrow",
      svg: `<svg width="128" height="128" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="#000000"/>
        <path d="M16 8 L16 24 M9 15 L16 8 L23 15" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </svg>`,
    },
    {
      name: "Option 2: Bold Arrow",
      svg: `<svg width="128" height="128" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="#000000"/>
        <path d="M16 9 L16 23 M10 16 L16 9 L22 16" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </svg>`,
    },
    {
      name: "Option 3: Filled Arrow",
      svg: `<svg width="128" height="128" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="#000000"/>
        <path d="M16 7 L24 16 L19 16 L19 25 L13 25 L13 16 L8 16 Z" fill="#FFFFFF"/>
      </svg>`,
    },
    {
      name: "Option 4: Minimalist Chevron",
      svg: `<svg width="128" height="128" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="#000000"/>
        <path d="M8 20 L16 10 L24 20" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </svg>`,
    },
    {
      name: "Option 5: Arrow with Base",
      svg: `<svg width="128" height="128" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="#000000"/>
        <path d="M16 8 L16 20 M9 15 L16 8 L23 15" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <line x1="10" y1="24" x2="22" y2="24" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
    },
    {
      name: "Option 6: Double Arrow",
      svg: `<svg width="128" height="128" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="#000000"/>
        <path d="M16 12 L16 24 M10 18 L16 12 L22 18" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <path d="M16 7 L16 14 M10 13 L16 7 L22 13" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </svg>`,
    },
    {
      name: "Option 7: Arrow in Circle",
      svg: `<svg width="128" height="128" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="#000000"/>
        <circle cx="16" cy="16" r="10" stroke="#FFFFFF" stroke-width="2" fill="none"/>
        <path d="M16 11 L16 21 M12 15 L16 11 L20 15" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </svg>`,
    },
    {
      name: "Option 8: Geometric Arrow",
      svg: `<svg width="128" height="128" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="#000000"/>
        <path d="M16 6 L8 18 L14 18 L14 26 L18 26 L18 18 L24 18 Z" fill="#FFFFFF"/>
      </svg>`,
    },
    {
      name: "Option 9: Rising Bars",
      svg: `<svg width="128" height="128" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="#000000"/>
        <rect x="8" y="20" width="4" height="6" fill="#FFFFFF" rx="1"/>
        <rect x="14" y="15" width="4" height="11" fill="#FFFFFF" rx="1"/>
        <rect x="20" y="9" width="4" height="17" fill="#FFFFFF" rx="1"/>
      </svg>`,
    },
    {
      name: "Option 10: Rocket Arrow",
      svg: `<svg width="128" height="128" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="#000000"/>
        <path d="M16 6 L18 14 L16 12 L14 14 Z" fill="#FFFFFF"/>
        <rect x="14" y="12" width="4" height="10" fill="#FFFFFF" rx="0.5"/>
        <path d="M12 20 L14 22 L14 18 Z" fill="#FFFFFF"/>
        <path d="M20 20 L18 22 L18 18 Z" fill="#FFFFFF"/>
        <circle cx="16" cy="26" r="1.5" fill="#FFFFFF"/>
      </svg>`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-white">
            Favicon Design Options
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            10 Upward Arrow Designs for DigitRaize
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center space-y-6">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {design.name}
                </h3>
                
                {/* Large Preview */}
                <div 
                  className="w-32 h-32"
                  dangerouslySetInnerHTML={{ __html: design.svg }}
                />

                {/* Small Preview (actual favicon size) */}
                <div className="flex items-center gap-4">
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    Actual size:
                  </div>
                  <div 
                    className="w-8 h-8"
                    dangerouslySetInnerHTML={{ __html: design.svg }}
                  />
                </div>

                {/* Apply Button */}
                <button
                  onClick={() => {
                    // Extract SVG content without the width/height attributes
                    const svgContent = design.svg
                      .replace('width="128" height="128"', '')
                      .replace('<svg', '<svg width="32" height="32"');
                    
                    navigator.clipboard.writeText(svgContent);
                    alert(`${design.name} SVG copied to clipboard!`);
                  }}
                  className="px-6 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors duration-200 font-medium"
                >
                  Copy SVG
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors duration-200 font-medium"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

