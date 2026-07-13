<!-- Your Personalized Nan Experience -->
<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Nan Beyond - Storytelling Itinerary</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&amp;family=Hanken+Grotesk:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        /* Base typography defaults referencing Tailwind config fonts */
        body {
            font-family: 'Hanken Grotesk', sans-serif;
        }
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Playfair Display', serif;
        }
        /* Custom scrollbar for a cleaner look */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background-color: rgba(114, 121, 115, 0.3); /* outline color with opacity */
            border-radius: 20px;
        }
        /* Timeline line */
        .timeline-line::before {
            content: '';
            position: absolute;
            top: 24px;
            bottom: -40px;
            left: 20px;
            width: 1px;
            background-color: #c2c8c1; /* outline-variant */
            z-index: 0;
        }
        @media (min-width: 768px) {
            .timeline-line::before {
                left: 50%;
                transform: translateX(-50%);
            }
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "error-container": "#ffdad6",
                      "surface-dim": "#dbdad5",
                      "on-surface": "#1b1c19",
                      "on-secondary-fixed-variant": "#623f18",
                      "on-primary-fixed": "#052013",
                      "primary-container": "#1e392a",
                      "surface-container-lowest": "#ffffff",
                      "surface-tint": "#496553",
                      "secondary-container": "#ffca98",
                      "surface-variant": "#e4e2dd",
                      "on-secondary": "#ffffff",
                      "on-surface-variant": "#424843",
                      "inverse-surface": "#30312e",
                      "outline": "#727973",
                      "on-tertiary-fixed": "#131f0d",
                      "tertiary": "#162210",
                      "error": "#ba1a1a",
                      "on-tertiary": "#ffffff",
                      "on-error-container": "#93000a",
                      "on-secondary-fixed": "#2c1600",
                      "on-primary-container": "#85a38f",
                      "on-tertiary-fixed-variant": "#3e4a36",
                      "inverse-on-surface": "#f2f1ec",
                      "surface-container": "#f0eee9",
                      "surface-container-high": "#eae8e3",
                      "surface-bright": "#fbf9f4",
                      "on-tertiary-container": "#92a087",
                      "on-primary-fixed-variant": "#314d3c",
                      "primary": "#072316",
                      "tertiary-container": "#2b3724",
                      "surface-container-highest": "#e4e2dd",
                      "surface-container-low": "#f5f3ee",
                      "on-background": "#1b1c19",
                      "primary-fixed": "#cbead4",
                      "tertiary-fixed": "#d8e7cb",
                      "on-primary": "#ffffff",
                      "tertiary-fixed-dim": "#bccbb0",
                      "primary-fixed-dim": "#afceb9",
                      "outline-variant": "#c2c8c1",
                      "on-error": "#ffffff",
                      "secondary": "#7d562d",
                      "inverse-primary": "#afceb9",
                      "secondary-fixed": "#ffdcbd",
                      "secondary-fixed-dim": "#f0bd8b",
                      "background": "#fbf9f4",
                      "on-secondary-container": "#7a532a",
                      "surface": "#fbf9f4"
              },
              "borderRadius": {
                      "DEFAULT": "0.25rem",
                      "lg": "0.5rem",
                      "xl": "0.75rem",
                      "full": "9999px"
              },
              "spacing": {
                      "margin-mobile": "20px",
                      "gutter": "24px",
                      "margin-desktop": "64px",
                      "container-max": "1280px",
                      "section-gap": "120px",
                      "unit": "8px"
              },
              "fontFamily": {
                      "display-lg": ["Playfair Display"],
                      "headline-md": ["Playfair Display"],
                      "headline-sm": ["Playfair Display"],
                      "display-lg-mobile": ["Playfair Display"],
                      "label-caps": ["Hanken Grotesk"],
                      "body-lg": ["Hanken Grotesk"],
                      "body-md": ["Hanken Grotesk"],
                      "data-mono": ["Hanken Grotesk"]
              },
              "fontSize": {
                      "display-lg": ["64px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                      "headline-md": ["32px", { "lineHeight": "1.3", "fontWeight": "600" }],
                      "headline-sm": ["24px", { "lineHeight": "1.4", "fontWeight": "600" }],
                      "display-lg-mobile": ["40px", { "lineHeight": "1.2", "fontWeight": "700" }],
                      "label-caps": ["12px", { "lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "700" }],
                      "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
                      "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
                      "data-mono": ["14px", { "lineHeight": "1.4", "fontWeight": "500" }]
              }
            }
          }
        }
    </script>
</head>
<body class="bg-background text-on-background antialiased selection:bg-primary-fixed selection:text-on-primary-fixed pb-32">
<!-- Contextual Top Action Bar (Replacing JSON Global Nav for focused task flow) -->
<header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 backdrop-blur-xl bg-background/70 border-b border-outline-variant/10">
<button class="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined text-on-surface" style="font-variation-settings: 'FILL' 0;">arrow_back</span>
</button>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">cloudy_snowing</span>
<span class="font-data-mono text-data-mono text-on-surface-variant">Cloudy, Light Rain</span>
</div>
<button class="flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant hover:bg-surface-container-low transition-colors">
<span class="material-symbols-outlined text-on-surface text-[18px]">map</span>
<span class="font-label-caps text-label-caps text-on-surface hidden md:block uppercase tracking-wider">Map View</span>
</button>
</header>
<main class="pt-32 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<!-- Header Section -->
<section class="mb-16 md:mb-section-gap text-center md:text-left max-w-3xl mx-auto md:mx-0">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/20 mb-6">
<span class="material-symbols-outlined text-secondary text-[16px]">eco</span>
<span class="font-label-caps text-label-caps text-secondary uppercase tracking-wider">Generated for You</span>
</div>
<h1 class="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-6">
                Your 3-Day Emerald Journey
            </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant">
                August 15-17 · A curated exploration of Nan's vibrant green season, blending quiet luxury with deep local heritage.
            </p>
</section>
<!-- Vertical Storytelling Timeline -->
<section class="relative timeline-line">
<!-- Day 1 Header -->
<div class="relative z-10 flex items-center gap-4 mb-12 md:justify-center">
<div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-headline-sm text-headline-sm">1</div>
<h2 class="font-headline-md text-headline-md text-on-surface">Arrival &amp; The Valleys</h2>
</div>
<!-- Stop 1 -->
<article class="relative z-10 mb-24 md:grid md:grid-cols-12 md:gap-gutter items-center">
<!-- Timeline Node Marker (Mobile Left, Desktop Center) -->
<div class="absolute left-[-4px] md:left-[50%] md:-translate-x-1/2 top-10 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border-4 border-background z-20">
<span class="material-symbols-outlined text-primary">location_on</span>
</div>
<!-- Content Card (Left on Desktop) -->
<div class="pl-14 md:pl-0 md:col-span-5 md:text-right">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant mb-4">
<span class="font-label-caps text-label-caps uppercase tracking-wider">10:00 AM</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-primary mb-2">Sapan Rice Terraces</h3>
<!-- AI Insight Glass Card -->
<div class="mt-6 text-left inline-block backdrop-blur-xl bg-surface-container-highest/60 border border-outline-variant/30 rounded-2xl p-5 shadow-sm">
<div class="flex items-center gap-2 mb-2">
<span class="material-symbols-outlined text-secondary text-[18px]">auto_awesome</span>
<span class="font-label-caps text-label-caps text-secondary uppercase tracking-wider">Why Now</span>
</div>
<p class="font-body-md text-body-md text-on-surface">
                            The rice fields at Sapan are at their most vibrant emerald green this week following the recent light rains. The morning mist creates an ethereal atmosphere perfect for photography.
                        </p>
</div>
</div>
<!-- Image (Right on Desktop) -->
<div class="pl-14 mt-6 md:mt-0 md:pl-0 md:col-start-7 md:col-span-6">
<div class="rounded-[24px] overflow-hidden shadow-sm aspect-[4/3] relative group">
<img alt="Sapan Rice Terraces" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="An immersive, eye-level shot of the vibrant green rice terraces in Sapan village, Nan. A narrow, muddy path winds through the fields, leading towards traditional wooden stilt houses in the distance. The sky is overcast with heavy, dramatic rain clouds, casting a soft, even light over the landscape. The image evokes a sense of deep tranquility and connection to nature, fitting a premium, authentic travel aesthetic with high contrast and saturated natural colors." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR5rgtBBksw-MRlcaqcMA37hGuB1MWXFI7Qwjs0K3cz2oPFWoie82KACEkofqk6Do6-r15IFXlWScwvVWVlZsSB-JDGoBGVXUd2mxCORnfg06sHEcS8NqLQGXFErOG9vCMYZEpEjcaN2KXwq5JXyi4ui9cW1XCsQ9yuI5nxNUHrUvLmuMjpfZk6WVfZrhwdEVPPxEX3KeW1to7hQqtEORnVqlCA_ShkS8h7muU988uUZWxxQDb0v72_qqupliWA9p3TWKmhE6mn-M"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
<div class="absolute bottom-4 left-4 right-4">
<p class="font-body-md text-body-md text-on-primary">
<span class="font-bold">Local Insight:</span> Sapan remains an agrarian community where traditional 'ลงแขก' (community harvesting) is still occasionally practiced during the green season.
                            </p>
</div>
</div>
</div>
</article>
<!-- Stop 2 -->
<article class="relative z-10 mb-24 md:grid md:grid-cols-12 md:gap-gutter items-center">
<!-- Timeline Node Marker -->
<div class="absolute left-[-4px] md:left-[50%] md:-translate-x-1/2 top-10 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border-4 border-background z-20">
<span class="material-symbols-outlined text-secondary">diamond</span>
</div>
<!-- Image (Left on Desktop - Alternating layout) -->
<div class="pl-14 md:pl-0 md:col-span-6 order-2 md:order-1 mt-6 md:mt-0">
<div class="rounded-[24px] overflow-hidden shadow-sm aspect-[4/3] relative group">
<img alt="Bo Kluea Ancient Salt Wells" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A close-up, highly textured photograph of the ancient rock salt boiling process in Bo Kluea, Nan. Steam rises organically from large, rustic woven baskets suspended over a crackling wood fire. The scene is illuminated by the warm, flickering glow of the flames against the dark, earthy interior of a traditional wooden hut. The image conveys a rich sense of history, local craftsmanship, and authenticity, composed with a shallow depth of field to highlight the tactile details of the salt and woven textures." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo-zb8UPT2a-A--IKK1vBf94V506sSQBL-eu9ueVL0aIui9gkHIPmcMV5cqhBBP95oNxLrIsa57Yh53a9GHmp1kaD19lj6Lomx0iAY8X3PUJJ_ammQRn9lT33jBRYPcwWZipkE_6aNKxa5r4STZK02LtiTscXikJRNPAkkyKxEwXhvzhB9doqTgj7Azh68Y1HpnkagEEX-UCGTCgUH70REUX-ag-SJGEceYAMkSajIaasV_h9FyOeTA11DLaZM2NHeOLPnOQfzzSE"/>
<!-- Hidden Gem Badge over Image -->
<div class="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-on-secondary backdrop-blur-md shadow-sm">
<span class="material-symbols-outlined text-[16px]">visibility</span>
<span class="font-label-caps text-label-caps uppercase tracking-wider">Hidden Gem</span>
</div>
</div>
</div>
<!-- Content Card (Right on Desktop) -->
<div class="pl-14 md:pl-0 md:col-start-8 md:col-span-5 order-1 md:order-2">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant mb-4">
<span class="font-label-caps text-label-caps uppercase tracking-wider">2:30 PM</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-primary mb-2">Bo Kluea Ancient Salt Wells</h3>
<p class="font-body-md text-body-md text-on-surface-variant mt-4">
<span class="font-bold text-on-surface">Local Insight:</span> One of the only places in the world where salt is extracted from mountain wells. The traditional boiling method over wood fires has remained unchanged for 800 years.
                    </p>
<!-- AI Insight Glass Card -->
<div class="mt-6 text-left inline-block backdrop-blur-xl bg-surface-container-highest/60 border border-outline-variant/30 rounded-2xl p-5 shadow-sm w-full">
<div class="flex items-center gap-2 mb-2">
<span class="material-symbols-outlined text-secondary text-[18px]">auto_awesome</span>
<span class="font-label-caps text-label-caps text-secondary uppercase tracking-wider">Why Now</span>
</div>
<p class="font-body-md text-body-md text-on-surface">
                            The cooler, damp weather makes observing the hot steam and open fires of the salt boiling process much more comfortable and atmospheric today.
                        </p>
</div>
</div>
</article>
</section>
</main>
<!-- Contextual Bottom Action Bar -->
<footer class="fixed bottom-0 left-0 w-full z-50 bg-background/90 backdrop-blur-xl border-t border-outline-variant/20 px-4 py-4 pb-safe">
<div class="max-w-container-max mx-auto flex justify-between items-center gap-4">
<div class="flex gap-2">
<button aria-label="Save to Favorites" class="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface transition-colors">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">favorite</span>
</button>
<button aria-label="Share Itinerary" class="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface transition-colors">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">share</span>
</button>
</div>
<button class="flex-1 max-w-[240px] bg-primary text-on-primary rounded-lg py-3.5 px-6 font-label-caps text-label-caps uppercase tracking-wider hover:bg-primary-container transition-colors text-center">
                Book Stays
            </button>
</div>
</footer>
</body></html>

<!-- Twelve Months of Nan Discovery -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Nan Beyond - Seasonal Discovery</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&amp;family=Hanken+Grotesk:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "error-container": "#ffdad6",
                    "surface-dim": "#dbdad5",
                    "on-surface": "#1b1c19",
                    "on-secondary-fixed-variant": "#623f18",
                    "on-primary-fixed": "#052013",
                    "primary-container": "#1e392a",
                    "surface-container-lowest": "#ffffff",
                    "surface-tint": "#496553",
                    "secondary-container": "#ffca98",
                    "surface-variant": "#e4e2dd",
                    "on-secondary": "#ffffff",
                    "on-surface-variant": "#424843",
                    "inverse-surface": "#30312e",
                    "outline": "#727973",
                    "on-tertiary-fixed": "#131f0d",
                    "tertiary": "#162210",
                    "error": "#ba1a1a",
                    "on-tertiary": "#ffffff",
                    "on-error-container": "#93000a",
                    "on-secondary-fixed": "#2c1600",
                    "on-primary-container": "#85a38f",
                    "on-tertiary-fixed-variant": "#3e4a36",
                    "inverse-on-surface": "#f2f1ec",
                    "surface-container": "#f0eee9",
                    "surface-container-high": "#eae8e3",
                    "surface-bright": "#fbf9f4",
                    "on-tertiary-container": "#92a087",
                    "on-primary-fixed-variant": "#314d3c",
                    "primary": "#072316",
                    "tertiary-container": "#2b3724",
                    "surface-container-highest": "#e4e2dd",
                    "surface-container-low": "#f5f3ee",
                    "on-background": "#1b1c19",
                    "primary-fixed": "#cbead4",
                    "tertiary-fixed": "#d8e7cb",
                    "on-primary": "#ffffff",
                    "tertiary-fixed-dim": "#bccbb0",
                    "primary-fixed-dim": "#afceb9",
                    "outline-variant": "#c2c8c1",
                    "on-error": "#ffffff",
                    "secondary": "#7d562d",
                    "inverse-primary": "#afceb9",
                    "secondary-fixed": "#ffdcbd",
                    "secondary-fixed-dim": "#f0bd8b",
                    "background": "#fbf9f4",
                    "on-secondary-container": "#7a532a",
                    "surface": "#fbf9f4"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "margin-mobile": "20px",
                    "gutter": "24px",
                    "margin-desktop": "64px",
                    "container-max": "1280px",
                    "section-gap": "120px",
                    "unit": "8px"
            },
            "fontFamily": {
                    "display-lg": [
                            "Playfair Display"
                    ],
                    "headline-md": [
                            "Playfair Display"
                    ],
                    "headline-sm": [
                            "Playfair Display"
                    ],
                    "display-lg-mobile": [
                            "Playfair Display"
                    ],
                    "label-caps": [
                            "Hanken Grotesk"
                    ],
                    "body-lg": [
                            "Hanken Grotesk"
                    ],
                    "body-md": [
                            "Hanken Grotesk"
                    ],
                    "data-mono": [
                            "Hanken Grotesk"
                    ]
            },
            "fontSize": {
                    "display-lg": [
                            "64px",
                            {
                                    "lineHeight": "1.1",
                                    "letterSpacing": "-0.02em",
                                    "fontWeight": "700"
                            }
                    ],
                    "headline-md": [
                            "32px",
                            {
                                    "lineHeight": "1.3",
                                    "fontWeight": "600"
                            }
                    ],
                    "headline-sm": [
                            "24px",
                            {
                                    "lineHeight": "1.4",
                                    "fontWeight": "600"
                            }
                    ],
                    "display-lg-mobile": [
                            "40px",
                            {
                                    "lineHeight": "1.2",
                                    "fontWeight": "700"
                            }
                    ],
                    "label-caps": [
                            "12px",
                            {
                                    "lineHeight": "1",
                                    "letterSpacing": "0.1em",
                                    "fontWeight": "700"
                            }
                    ],
                    "body-lg": [
                            "18px",
                            {
                                    "lineHeight": "1.6",
                                    "fontWeight": "400"
                            }
                    ],
                    "body-md": [
                            "16px",
                            {
                                    "lineHeight": "1.6",
                                    "fontWeight": "400"
                            }
                    ],
                    "data-mono": [
                            "14px",
                            {
                                    "lineHeight": "1.4",
                                    "fontWeight": "500"
                            }
                    ]
            }
          },
        }
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .material-symbols-outlined.fill-icon {
            font-variation-settings: 'FILL' 1;
        }
        /* Custom scrollbar for horizontal scrolling area */
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        
        .season-card:hover .season-overlay {
            opacity: 1;
        }
        .season-card:hover .season-title {
            transform: translateY(-10px);
        }
    </style>
</head>
<body class="bg-background text-on-background antialiased min-h-screen">
<!-- TopAppBar -->
<header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 bg-background/80 dark:bg-background/80 backdrop-blur-xl bg-background/70 text-primary dark:text-primary-fixed font-display-lg text-display-lg-mobile md:text-display-lg full-width top-0">
<!-- Brand Logo -->
<div class="font-display-lg text-headline-sm text-primary dark:text-primary-fixed tracking-tight">
            Nan Beyond
        </div>
<!-- Navigation Links (Web) -->
<nav class="hidden md:flex gap-8 items-center">
<a class="text-primary dark:text-primary-fixed font-bold border-b-2 border-primary dark:border-primary-fixed pb-1" href="#">Seasons</a>
<a class="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Map</a>
<a class="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Stories</a>
</nav>
<!-- Trailing Icons -->
<div class="flex gap-4 items-center">
<button class="text-primary dark:text-primary-fixed hover:text-primary dark:hover:text-primary-fixed transition-colors">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="text-primary dark:text-primary-fixed hover:text-primary dark:hover:text-primary-fixed transition-colors">
<span class="material-symbols-outlined">person</span>
</button>
</div>
</header>
<!-- Main Content -->
<main class="pt-32 pb-32 md:pb-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<!-- Header Section -->
<section class="mb-section-gap text-center md:text-left mt-12 md:mt-24">
<h1 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4 md:w-2/3">
                Twelve Months, Twelve Souls. Which Nan is Yours?
            </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant md:w-1/2">
                Discover the shifting atmospheres of Northern Thailand. From the vibrant pink blooms of February to the misty, tranquil mornings of December, Nan transforms with every passing month.
            </p>
</section>
<!-- Seasonal Grid / Bento Layout -->
<section class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter auto-rows-[400px]">
<!-- Month 1: Jan -->
<div class="season-card relative rounded-[24px] overflow-hidden group cursor-pointer border border-outline-variant/20 shadow-sm md:col-span-1 row-span-1">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A cool, crisp morning in Nan, Thailand during January. Soft winter sunlight filtering through tall pine trees. A serene, minimalist aesthetic with a color palette of deep greens, muted blues, and bright whites. High-end editorial photography style." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFYAziXrs-hKRP_0cVIv_HDUY_8xtGvq7gbNWlBquvzipYkle-PFzsT1A788O7hltbOJ3o26TbWOf5OE2Ry8SAVtM7nEmeUYNw1TQLqHuoxxA5TU89zYb-oemctKwfqiA5teLOQ0wm2loTVWWBqNbTf4deQkZVIvthdgfNSuWcmYsfl0n3oUhSaTB2aSB9mzJwvAdpSolqkkocX6GZPbdybK_1qauw6GWibspM-6s_RCaMPQ43M_Yb7yXaMgodaN79DztwC4b7FsU')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<!-- Default Content -->
<div class="absolute bottom-6 left-6 right-6 season-title transition-transform duration-300">
<span class="font-label-caps text-label-caps text-on-primary bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full mb-2 inline-block">January</span>
<h3 class="font-headline-sm text-headline-sm text-on-primary mt-1">Winter's Breath</h3>
</div>
<!-- Hover Overlay (Glassmorphism) -->
<div class="season-overlay absolute inset-0 bg-primary/80 backdrop-blur-md opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
<span class="material-symbols-outlined text-on-primary mb-4 text-4xl">ac_unit</span>
<p class="font-body-md text-body-md text-on-primary">Perfect for crisp mountain air and cozy local cafes.</p>
</div>
</div>
<!-- Month 2: Feb -->
<div class="season-card relative rounded-[24px] overflow-hidden group cursor-pointer border border-outline-variant/20 shadow-sm md:col-span-2 row-span-1">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Vibrant pink Tecoma flowers in full bloom along a winding road in Nan, Thailand during February. The scene is bathed in warm, romantic sunlight. A sophisticated editorial composition highlighting the organic curves of the road and the striking pink blossoms against a clear blue sky." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBEKEFeUSN3KY4efwhru4RUcYSkPTs6y4lGm32XkUVELtLJaGfdkXPOo_TCQacaAivbuSb-IPwDmuIcdc4mlqf0LOdNXkQLVIrPUtM4Mt-lcXTMQyKFo3vd3FOXz14dYJOLVTIJ9cXri8NNGoPqvcR9UTyPqdlh52AlzWlyISPY_2Z4OXWAPfh-MHDvDMvkKeLeagVuXGQXEFTvJ5f14AsS7cVrZmPPWF2N1maL0ncF3PY1vYJmYeszaYhb-ZZMMBcHDNUMk5Wp1qI')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<div class="absolute bottom-6 left-6 right-6 season-title transition-transform duration-300">
<span class="font-label-caps text-label-caps text-on-primary bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full mb-2 inline-block">February</span>
<h3 class="font-headline-sm text-headline-sm text-on-primary mt-1">The Pink Blossom</h3>
</div>
<div class="season-overlay absolute inset-0 bg-primary/80 backdrop-blur-md opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
<span class="material-symbols-outlined text-on-primary mb-4 text-4xl">local_florist</span>
<p class="font-body-md text-body-md text-on-primary">Ideal for romantic drives through the pink Tecoma tunnels.</p>
</div>
</div>
<!-- Month 3: March -->
<div class="season-card relative rounded-[24px] overflow-hidden group cursor-pointer border border-outline-variant/20 shadow-sm md:col-span-1 row-span-1">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A tranquil scene of the Nan River in March, with low water levels revealing sandy banks. Traditional wooden longboats are moored gently. The lighting is golden hour, casting long, elegant shadows. The color palette focuses on earthy browns, golden yellows, and the deep green of the river." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuChkvfbPOIOIBcjisHfy9BMYqwsHaczCBSxcogk5T2Ft3PJLhY6gJVSlUdZx4DSe4tiDJPS4rCIlZHwmoYzWTW5ZADo0oxLXqfGlYr2ELGdva1kYJ_Ai9grXSWoIaC83ZCWaviqxdjNwDLBXJRHsv64WR9VqSbheUpGr8yJx8F6Dshzoj4qx5u61QiW5-xrjRD6ypB8uoVIsoJc853dUWWyZKfG8-zD6eq3sv0sf9FYenZMUmiPkXeCBfRLgWH9QMtsWCHuLtmlumk')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<div class="absolute bottom-6 left-6 right-6 season-title transition-transform duration-300">
<span class="font-label-caps text-label-caps text-on-primary bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full mb-2 inline-block">March</span>
<h3 class="font-headline-sm text-headline-sm text-on-primary mt-1">River's Ebb</h3>
</div>
<div class="season-overlay absolute inset-0 bg-primary/80 backdrop-blur-md opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
<span class="material-symbols-outlined text-on-primary mb-4 text-4xl">sailing</span>
<p class="font-body-md text-body-md text-on-primary">Explore the revealed riverbanks and quiet riverside communities.</p>
</div>
</div>
<!-- Month 4: April (Songkran) -->
<div class="season-card relative rounded-[24px] overflow-hidden group cursor-pointer border border-outline-variant/20 shadow-sm md:col-span-1 row-span-1">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A festive and vibrant scene capturing the essence of Songkran in Nan, Thailand during April. Water splashing playfully in the bright, intense sunlight. Traditional Lanna flags fluttering in the background. A dynamic, high-contrast editorial shot with vivid blues, yellows, and warm skin tones." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFnZ0S50nXpa-P7yPZgIBhIAaI2BCQSoD2h0u4GuEH-i1fLl3a4TetyOJ46HUUguRC6fthtkXNSRLO6cexu6jQxKY4KG6HTEBtBaTNMuO0Q2W18HnqMJ4T4R7-TjQ6Cr1TtQrhTyaiHwCtAhiV1cf4Czh9Xzo04jGs8YeeyOzOlPP4SY2biILZ5o_UAM9OcpxNCIDPUdjqGE474OyElm9tmWXnh1mi2r0enhUsa697gifh-GejD4kO6wM5R3s0S5OekbIwSjNlpiA')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<div class="absolute bottom-6 left-6 right-6 season-title transition-transform duration-300">
<span class="font-label-caps text-label-caps text-on-primary bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full mb-2 inline-block">April</span>
<h3 class="font-headline-sm text-headline-sm text-on-primary mt-1">Water &amp; Light</h3>
</div>
<div class="season-overlay absolute inset-0 bg-primary/80 backdrop-blur-md opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
<span class="material-symbols-outlined text-on-primary mb-4 text-4xl">water_drop</span>
<p class="font-body-md text-body-md text-on-primary">Experience the joyous Songkran festival and local temple rituals.</p>
</div>
</div>
<!-- Month 8: August (Highlight) -->
<div class="season-card relative rounded-[24px] overflow-hidden group cursor-pointer border border-outline-variant/20 shadow-sm md:col-span-2 row-span-1">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Expansive, lush green rice terraces in Nan, Thailand during the rainy season in August. Heavy, dramatic rain clouds contrast with the intensely vibrant green of the young rice plants. A moody, atmospheric, high-end landscape photograph capturing the raw power and beauty of the monsoon." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2LNfTLC7nkNkgzAfwam5AM3J5nJTctMgDevP9hg8Z4tcAqzCwBk_cRGs0ldC9R6M7FjmBIliDNQXsTzVCbNLFY6dxT7fJ5Bm_D4K5UJ06rx2nnaQOhV-vicQoPRUasnkZjF1YOoUbzcy6GwHc4DY9vtm-yJK1j6L6vcDhNyvh4B0vEKqtUOcjqKLW_Hfk3YXtq9jVta4TNDXITs9DZG5UANF1i4IxDCtKD9Y8PYlxWwnPT3s4uG-FsLUFmZxVf41_C6-YK9WXMng')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<div class="absolute bottom-6 left-6 right-6 season-title transition-transform duration-300">
<span class="font-label-caps text-label-caps text-on-primary bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full mb-2 inline-block">August</span>
<h3 class="font-headline-sm text-headline-sm text-on-primary mt-1">The Green Season</h3>
</div>
<div class="season-overlay absolute inset-0 bg-primary/80 backdrop-blur-md opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
<span class="material-symbols-outlined text-on-primary mb-4 text-4xl">grass</span>
<p class="font-body-md text-body-md text-on-primary">A photographer's dream: vibrant rice terraces and dramatic skies.</p>
</div>
</div>
<!-- Month 12: December -->
<div class="season-card relative rounded-[24px] overflow-hidden group cursor-pointer border border-outline-variant/20 shadow-sm md:col-span-1 row-span-1">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A breathtaking view of the 'Sea of Mist' over the mountains of Nan, Thailand in December. The early morning sun creates a soft, pastel glow over the rolling clouds in the valleys. A tranquil, ethereal, and majestic landscape shot with soft pinks, purples, and cool blues." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqlaoTrcO96G8S7svgj75vs0_ipZku6_ZcKDd1alqM-HXqSOA6q7u0tEGtVtuFD3yCyjqkG6lxDadKiStwFTG0YtvlsIcRL9RWDy0VzmEo2EswWcZIYkRCAvUCSIAYZAYMkE1BWsccabuSFXA6KC9owjJyYDt9ptAfXvdwzp_XeIJnn_4A79huccjtc7UoIOAmrSs8eqdfLQVD5DDoglTL2TnFZHBc2QkjIfQU0ccYUPbwcJfFBilVkeg35gDIUN-2rmkfS0945_8')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<div class="absolute bottom-6 left-6 right-6 season-title transition-transform duration-300">
<span class="font-label-caps text-label-caps text-on-primary bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full mb-2 inline-block">December</span>
<h3 class="font-headline-sm text-headline-sm text-on-primary mt-1">Sea of Mist</h3>
</div>
<div class="season-overlay absolute inset-0 bg-primary/80 backdrop-blur-md opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
<span class="material-symbols-outlined text-on-primary mb-4 text-4xl">cloudy</span>
<p class="font-body-md text-body-md text-on-primary">Wake up early for spectacular views above the clouds.</p>
</div>
</div>
</section>
</main>
<!-- BottomNavBar (Mobile Only) -->
<nav class="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-safe h-20 bg-background/90 dark:bg-background/90 backdrop-blur-xl border-t border-outline-variant/20 text-primary dark:text-primary-fixed font-label-caps text-label-caps full-width bottom-0 rounded-t-xl">
<a class="flex flex-col items-center justify-center text-primary dark:text-primary-fixed-dim bg-primary-fixed/20 rounded-xl px-4 py-2" href="#">
<span class="material-symbols-outlined mb-1">explore</span>
            Discover
        </a>
<a class="flex flex-col items-center justify-center text-on-surface-variant/70 dark:text-surface-variant/70 px-4 py-2 hover:bg-surface-container-low transition-all" href="#">
<span class="material-symbols-outlined mb-1">auto_awesome</span>
            Plan
        </a>
<a class="flex flex-col items-center justify-center text-on-surface-variant/70 dark:text-surface-variant/70 px-4 py-2 hover:bg-surface-container-low transition-all" href="#">
<span class="material-symbols-outlined mb-1">map</span>
            Map
        </a>
<a class="flex flex-col items-center justify-center text-on-surface-variant/70 dark:text-surface-variant/70 px-4 py-2 hover:bg-surface-container-low transition-all" href="#">
<span class="material-symbols-outlined mb-1">account_circle</span>
            Profile
        </a>
</nav>
</body></html>

<!-- AI Seasonal Journey Planner -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>AI Personalization Planner - Nan Beyond</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "error-container": "#ffdad6",
                      "surface-dim": "#dbdad5",
                      "on-surface": "#1b1c19",
                      "on-secondary-fixed-variant": "#623f18",
                      "on-primary-fixed": "#052013",
                      "primary-container": "#1e392a",
                      "surface-container-lowest": "#ffffff",
                      "surface-tint": "#496553",
                      "secondary-container": "#ffca98",
                      "surface-variant": "#e4e2dd",
                      "on-secondary": "#ffffff",
                      "on-surface-variant": "#424843",
                      "inverse-surface": "#30312e",
                      "outline": "#727973",
                      "on-tertiary-fixed": "#131f0d",
                      "tertiary": "#162210",
                      "error": "#ba1a1a",
                      "on-tertiary": "#ffffff",
                      "on-error-container": "#93000a",
                      "on-secondary-fixed": "#2c1600",
                      "on-primary-container": "#85a38f",
                      "on-tertiary-fixed-variant": "#3e4a36",
                      "inverse-on-surface": "#f2f1ec",
                      "surface-container": "#f0eee9",
                      "surface-container-high": "#eae8e3",
                      "surface-bright": "#fbf9f4",
                      "on-tertiary-container": "#92a087",
                      "on-primary-fixed-variant": "#314d3c",
                      "primary": "#072316",
                      "tertiary-container": "#2b3724",
                      "surface-container-highest": "#e4e2dd",
                      "surface-container-low": "#f5f3ee",
                      "on-background": "#1b1c19",
                      "primary-fixed": "#cbead4",
                      "tertiary-fixed": "#d8e7cb",
                      "on-primary": "#ffffff",
                      "tertiary-fixed-dim": "#bccbb0",
                      "primary-fixed-dim": "#afceb9",
                      "outline-variant": "#c2c8c1",
                      "on-error": "#ffffff",
                      "secondary": "#7d562d",
                      "inverse-primary": "#afceb9",
                      "secondary-fixed": "#ffdcbd",
                      "secondary-fixed-dim": "#f0bd8b",
                      "background": "#fbf9f4",
                      "on-secondary-container": "#7a532a",
                      "surface": "#fbf9f4"
              },
              "borderRadius": {
                      "DEFAULT": "0.25rem",
                      "lg": "0.5rem",
                      "xl": "0.75rem",
                      "full": "9999px"
              },
              "spacing": {
                      "margin-mobile": "20px",
                      "gutter": "24px",
                      "margin-desktop": "64px",
                      "container-max": "1280px",
                      "section-gap": "120px",
                      "unit": "8px"
              },
              "fontFamily": {
                      "display-lg": [
                              "Playfair Display"
                      ],
                      "headline-md": [
                              "Playfair Display"
                      ],
                      "headline-sm": [
                              "Playfair Display"
                      ],
                      "display-lg-mobile": [
                              "Playfair Display"
                      ],
                      "label-caps": [
                              "Hanken Grotesk"
                      ],
                      "body-lg": [
                              "Hanken Grotesk"
                      ],
                      "body-md": [
                              "Hanken Grotesk"
                      ],
                      "data-mono": [
                              "Hanken Grotesk"
                      ]
              },
              "fontSize": {
                      "display-lg": [
                              "64px",
                              {
                                      "lineHeight": "1.1",
                                      "letterSpacing": "-0.02em",
                                      "fontWeight": "700"
                              }
                      ],
                      "headline-md": [
                              "32px",
                              {
                                      "lineHeight": "1.3",
                                      "fontWeight": "600"
                              }
                      ],
                      "headline-sm": [
                              "24px",
                              {
                                      "lineHeight": "1.4",
                                      "fontWeight": "600"
                              }
                      ],
                      "display-lg-mobile": [
                              "40px",
                              {
                                      "lineHeight": "1.2",
                                      "fontWeight": "700"
                              }
                      ],
                      "label-caps": [
                              "12px",
                              {
                                      "lineHeight": "1",
                                      "letterSpacing": "0.1em",
                                      "fontWeight": "700"
                              }
                      ],
                      "body-lg": [
                              "18px",
                              {
                                      "lineHeight": "1.6",
                                      "fontWeight": "400"
                              }
                      ],
                      "body-md": [
                              "16px",
                              {
                                      "lineHeight": "1.6",
                                      "fontWeight": "400"
                              }
                      ],
                      "data-mono": [
                              "14px",
                              {
                                      "lineHeight": "1.4",
                                      "fontWeight": "500"
                              }
                      ]
              }
      },
          },
        }
    </script>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&amp;family=Hanken+Grotesk:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        .glass-panel {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(0,0,0,0.05);
        }
        .ai-shimmer {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            background-size: 200% 100%;
            animation: shimmer 2s infinite linear;
        }
        @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }
    </style>
</head>
<body class="bg-background text-on-background min-h-screen font-body-md antialiased overflow-x-hidden selection:bg-primary-fixed selection:text-on-primary-fixed">
<!-- Content Canvas -->
<main class="w-full pt-8 pb-32 md:pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<header class="mb-12 md:mb-16 text-center md:text-left max-w-2xl">
<h1 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">Crafting Your Nan Journey</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant/80">Tell us about your Nan dream. Our AI guide will weave a personalized itinerary reflecting the true spirit of the North.</p>
</header>
<form class="space-y-section-gap">
<!-- Section 1: Time -->
<section class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
<div class="md:col-span-4 sticky top-24">
<h2 class="font-headline-sm text-headline-sm text-primary mb-2 flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">calendar_month</span>
                        When
                    </h2>
<p class="text-on-surface-variant/70 text-sm">Select the month for your journey to experience the unique seasonal rhythms of Nan.</p>
</div>
<div class="md:col-span-8">
<div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
<!-- Month Picker Grid -->
<label class="relative cursor-pointer group">
<input class="peer sr-only" name="month" type="radio" value="Jan"/>
<div class="glass-panel p-6 rounded-2xl text-center border border-transparent peer-checked:border-primary peer-checked:bg-primary-fixed/20 transition-all duration-300 hover:shadow-sm">
<span class="block font-headline-sm text-headline-sm text-primary mb-1">Jan</span>
<span class="block font-label-caps text-label-caps text-secondary">Cool &amp; Misty</span>
</div>
</label>
<label class="relative cursor-pointer group">
<input class="peer sr-only" name="month" type="radio" value="Feb"/>
<div class="glass-panel p-6 rounded-2xl text-center border border-transparent peer-checked:border-primary peer-checked:bg-primary-fixed/20 transition-all duration-300 hover:shadow-sm">
<span class="block font-headline-sm text-headline-sm text-primary mb-1">Feb</span>
<span class="block font-label-caps text-label-caps text-secondary">Cool Breeze</span>
</div>
</label>
<label class="relative cursor-pointer group">
<input class="peer sr-only" name="month" type="radio" value="Mar"/>
<div class="glass-panel p-6 rounded-2xl text-center border border-transparent peer-checked:border-primary peer-checked:bg-primary-fixed/20 transition-all duration-300 hover:shadow-sm">
<span class="block font-headline-sm text-headline-sm text-primary mb-1">Mar</span>
<span class="block font-label-caps text-label-caps text-secondary">Dry Warmth</span>
</div>
</label>
<!-- Add more months as needed for visual density -->
</div>
</div>
</section>
<hr class="border-outline-variant/30"/>
<!-- Section 2: Vibe -->
<section class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
<div class="md:col-span-4 sticky top-24">
<h2 class="font-headline-sm text-headline-sm text-primary mb-2 flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">spa</span>
                        The Vibe
                    </h2>
<p class="text-on-surface-variant/70 text-sm">What calls to you? Select multiple interests to shape your days.</p>
</div>
<div class="md:col-span-8 flex flex-wrap gap-3">
<label class="cursor-pointer">
<input class="peer sr-only" type="checkbox" value="Photography"/>
<div class="px-6 py-3 rounded-full border border-outline-variant/50 flex items-center gap-2 peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary transition-colors">
<span class="material-symbols-outlined text-[20px]">photo_camera</span>
<span class="font-data-mono text-data-mono">Photography</span>
</div>
</label>
<label class="cursor-pointer">
<input class="peer sr-only" type="checkbox" value="Peace"/>
<div class="px-6 py-3 rounded-full border border-outline-variant/50 flex items-center gap-2 peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary transition-colors">
<span class="material-symbols-outlined text-[20px]">self_improvement</span>
<span class="font-data-mono text-data-mono">Peace &amp; Quiet</span>
</div>
</label>
<label class="cursor-pointer">
<input class="peer sr-only" type="checkbox" value="Crafts"/>
<div class="px-6 py-3 rounded-full border border-outline-variant/50 flex items-center gap-2 peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary transition-colors">
<span class="material-symbols-outlined text-[20px]">brush</span>
<span class="font-data-mono text-data-mono">Local Crafts</span>
</div>
</label>
<label class="cursor-pointer">
<input class="peer sr-only" type="checkbox" value="Trekking"/>
<div class="px-6 py-3 rounded-full border border-outline-variant/50 flex items-center gap-2 peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary transition-colors">
<span class="material-symbols-outlined text-[20px]">hiking</span>
<span class="font-data-mono text-data-mono">Trekking</span>
</div>
</label>
<label class="cursor-pointer">
<input class="peer sr-only" type="checkbox" value="Cafe"/>
<div class="px-6 py-3 rounded-full border border-outline-variant/50 flex items-center gap-2 peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary transition-colors">
<span class="material-symbols-outlined text-[20px]">local_cafe</span>
<span class="font-data-mono text-data-mono">Cafe Hopping</span>
</div>
</label>
</div>
</section>
<hr class="border-outline-variant/30"/>
<!-- Section 3: Pace & Group -->
<section class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
<div class="md:col-span-4 sticky top-24">
<h2 class="font-headline-sm text-headline-sm text-primary mb-2 flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">tune</span>
                        Dynamics
                    </h2>
<p class="text-on-surface-variant/70 text-sm">Define the rhythm of your trip and who you're sharing it with.</p>
</div>
<div class="md:col-span-8 space-y-12">
<!-- Pace Slider/Toggle -->
<div>
<h3 class="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase tracking-wider">Pace</h3>
<div class="bg-surface-container-high p-2 rounded-2xl flex relative overflow-hidden">
<!-- Visual Indicator (Simplistic JS needed for full slide effect, using CSS for state here) -->
<label class="flex-1 text-center cursor-pointer z-10">
<input checked="" class="peer sr-only" name="pace" type="radio" value="slow"/>
<div class="py-3 px-4 rounded-xl font-data-mono text-data-mono peer-checked:bg-surface-container-lowest peer-checked:text-primary peer-checked:shadow-sm transition-all text-on-surface-variant/60">
                                     Slow (Immersive)
                                 </div>
</label>
<label class="flex-1 text-center cursor-pointer z-10">
<input class="peer sr-only" name="pace" type="radio" value="active"/>
<div class="py-3 px-4 rounded-xl font-data-mono text-data-mono peer-checked:bg-surface-container-lowest peer-checked:text-primary peer-checked:shadow-sm transition-all text-on-surface-variant/60">
                                     Active (Explorer)
                                 </div>
</label>
</div>
</div>
<!-- Group Type -->
<div>
<h3 class="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase tracking-wider">Companions</h3>
<div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
<label class="cursor-pointer">
<input class="peer sr-only" name="group" type="radio" value="solo"/>
<div class="glass-panel p-4 rounded-xl text-center border border-transparent peer-checked:border-primary peer-checked:bg-primary-fixed/10 transition-all flex flex-col items-center gap-2">
<span class="material-symbols-outlined text-on-surface-variant peer-checked:text-primary">person</span>
<span class="font-data-mono text-data-mono">Solo</span>
</div>
</label>
<label class="cursor-pointer">
<input class="peer sr-only" name="group" type="radio" value="couple"/>
<div class="glass-panel p-4 rounded-xl text-center border border-transparent peer-checked:border-primary peer-checked:bg-primary-fixed/10 transition-all flex flex-col items-center gap-2">
<span class="material-symbols-outlined text-on-surface-variant peer-checked:text-primary">group</span>
<span class="font-data-mono text-data-mono">Couple</span>
</div>
</label>
<label class="cursor-pointer">
<input class="peer sr-only" name="group" type="radio" value="family"/>
<div class="glass-panel p-4 rounded-xl text-center border border-transparent peer-checked:border-primary peer-checked:bg-primary-fixed/10 transition-all flex flex-col items-center gap-2">
<span class="material-symbols-outlined text-on-surface-variant peer-checked:text-primary">family_restroom</span>
<span class="font-data-mono text-data-mono">Family</span>
</div>
</label>
<label class="cursor-pointer">
<input class="peer sr-only" name="group" type="radio" value="friends"/>
<div class="glass-panel p-4 rounded-xl text-center border border-transparent peer-checked:border-primary peer-checked:bg-primary-fixed/10 transition-all flex flex-col items-center gap-2">
<span class="material-symbols-outlined text-on-surface-variant peer-checked:text-primary">groups</span>
<span class="font-data-mono text-data-mono">Friends</span>
</div>
</label>
</div>
</div>
</div>
</section>
<!-- Submit Action -->
<div class="pt-12 text-center md:text-right">
<button class="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded-lg hover:bg-primary-container transition-colors relative overflow-hidden group shadow-sm inline-flex items-center gap-2" type="button">
<span class="material-symbols-outlined text-[18px]">auto_awesome</span>
                    Generate My Experience
                    <div class="absolute inset-0 ai-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>
</div>
</form>
</main>
</body></html>

<!-- Nan Beyond - Landing (Rainy Season) -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Nan Beyond - August in Nan</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;700&amp;family=Playfair+Display:wght@600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "error-container": "#ffdad6",
                      "surface-dim": "#dbdad5",
                      "on-surface": "#1b1c19",
                      "on-secondary-fixed-variant": "#623f18",
                      "on-primary-fixed": "#052013",
                      "primary-container": "#1e392a",
                      "surface-container-lowest": "#ffffff",
                      "surface-tint": "#496553",
                      "secondary-container": "#ffca98",
                      "surface-variant": "#e4e2dd",
                      "on-secondary": "#ffffff",
                      "on-surface-variant": "#424843",
                      "inverse-surface": "#30312e",
                      "outline": "#727973",
                      "on-tertiary-fixed": "#131f0d",
                      "tertiary": "#162210",
                      "error": "#ba1a1a",
                      "on-tertiary": "#ffffff",
                      "on-error-container": "#93000a",
                      "on-secondary-fixed": "#2c1600",
                      "on-primary-container": "#85a38f",
                      "on-tertiary-fixed-variant": "#3e4a36",
                      "inverse-on-surface": "#f2f1ec",
                      "surface-container": "#f0eee9",
                      "surface-container-high": "#eae8e3",
                      "surface-bright": "#fbf9f4",
                      "on-tertiary-container": "#92a087",
                      "on-primary-fixed-variant": "#314d3c",
                      "primary": "#072316",
                      "tertiary-container": "#2b3724",
                      "surface-container-highest": "#e4e2dd",
                      "surface-container-low": "#f5f3ee",
                      "on-background": "#1b1c19",
                      "primary-fixed": "#cbead4",
                      "tertiary-fixed": "#d8e7cb",
                      "on-primary": "#ffffff",
                      "tertiary-fixed-dim": "#bccbb0",
                      "primary-fixed-dim": "#afceb9",
                      "outline-variant": "#c2c8c1",
                      "on-error": "#ffffff",
                      "secondary": "#7d562d",
                      "inverse-primary": "#afceb9",
                      "secondary-fixed": "#ffdcbd",
                      "secondary-fixed-dim": "#f0bd8b",
                      "background": "#fbf9f4",
                      "on-secondary-container": "#7a532a",
                      "surface": "#fbf9f4"
              },
              "borderRadius": {
                      "DEFAULT": "0.25rem",
                      "lg": "0.5rem",
                      "xl": "0.75rem",
                      "full": "9999px"
              },
              "spacing": {
                      "margin-mobile": "20px",
                      "gutter": "24px",
                      "margin-desktop": "64px",
                      "container-max": "1280px",
                      "section-gap": "120px",
                      "unit": "8px",
                      "safe": "env(safe-area-inset-bottom, 20px)"
              },
              "fontFamily": {
                      "display-lg": [
                              "Playfair Display"
                      ],
                      "headline-md": [
                              "Playfair Display"
                      ],
                      "headline-sm": [
                              "Playfair Display"
                      ],
                      "display-lg-mobile": [
                              "Playfair Display"
                      ],
                      "label-caps": [
                              "Hanken Grotesk"
                      ],
                      "body-lg": [
                              "Hanken Grotesk"
                      ],
                      "body-md": [
                              "Hanken Grotesk"
                      ],
                      "data-mono": [
                              "Hanken Grotesk"
                      ]
              },
              "fontSize": {
                      "display-lg": [
                              "64px",
                              {
                                      "lineHeight": "1.1",
                                      "letterSpacing": "-0.02em",
                                      "fontWeight": "700"
                              }
                      ],
                      "headline-md": [
                              "32px",
                              {
                                      "lineHeight": "1.3",
                                      "fontWeight": "600"
                              }
                      ],
                      "headline-sm": [
                              "24px",
                              {
                                      "lineHeight": "1.4",
                                      "fontWeight": "600"
                              }
                      ],
                      "display-lg-mobile": [
                              "40px",
                              {
                                      "lineHeight": "1.2",
                                      "fontWeight": "700"
                              }
                      ],
                      "label-caps": [
                              "12px",
                              {
                                      "lineHeight": "1",
                                      "letterSpacing": "0.1em",
                                      "fontWeight": "700"
                              }
                      ],
                      "body-lg": [
                              "18px",
                              {
                                      "lineHeight": "1.6",
                                      "fontWeight": "400"
                              }
                      ],
                      "body-md": [
                              "16px",
                              {
                                      "lineHeight": "1.6",
                                      "fontWeight": "400"
                              }
                      ],
                      "data-mono": [
                              "14px",
                              {
                                      "lineHeight": "1.4",
                                      "fontWeight": "500"
                              }
                      ]
              }
      },
          },
        }
      </script>
<style>
        .glass-overlay {
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
        }
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>
</head>
<body class="bg-background text-on-background font-body-md min-h-screen antialiased selection:bg-primary-fixed selection:text-on-primary-fixed pb-24 md:pb-0">
<!-- TopAppBar -->
<header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 bg-background/80 dark:bg-background/80 backdrop-blur-xl bg-background/70">
<div class="font-display-lg text-headline-sm text-primary dark:text-primary-fixed tracking-tight">Nan Beyond</div>
<nav class="hidden md:flex gap-8 items-center">
<a class="text-primary dark:text-primary-fixed font-bold border-b-2 border-primary dark:border-primary-fixed pb-1 active:scale-95 duration-200" href="#">Seasons</a>
<a class="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Map</a>
<a class="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Stories</a>
</nav>
<div class="flex items-center gap-4 text-primary dark:text-primary-fixed">
<button class="hover:text-primary-container transition-colors"><span class="material-symbols-outlined">notifications</span></button>
<button class="hover:text-primary-container transition-colors"><span class="material-symbols-outlined">person</span></button>
</div>
</header>
<main>
<!-- Hero Section -->
<section class="relative h-[921px] min-h-[600px] w-full flex items-end pb-24 px-margin-mobile md:px-margin-desktop">
<div class="absolute inset-0 z-0">
<img class="w-full h-full object-cover" data-alt="A breathtaking, high-end editorial landscape photograph of lush, vibrant green rice terraces in Sapan, Nan, Thailand during the rainy season. Thick, moody mist clings to the rolling mountains in the background. The lighting is soft and diffused, typical of an overcast August morning, enhancing the deep emerald greens and earthy browns. The composition is expansive, inviting, and tranquil, fitting for a premium travel magazine." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKDhyiN5DjiaBIMSR34rOLIDu-mKNJ70YSiYrGJBzbRyL2yXZiN7sFYU5R8Fmk6EBmWV8Q7yoLso7XClAcEANU4hgFd89YVdrBPeOrllVh6xTkGNz3VCdzJzRgnhVpkbAs4GizoiZioJlQz08RhjnDRDKnrwZ-YpjyAjGvNQ-Is-Ael37tnmpj-lfaVTDRjYLb2pu68MJPvzzlDHDYKnhi-Rjwd9XYdmZrrjhKgcvTASN7WnWlt7T2hcCxSKm94AOrZ406O-NH96U"/>
<div class="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
</div>
<div class="relative z-10 w-full max-w-container-max mx-auto md:w-2/3 lg:w-1/2 ml-0">
<div class="inline-flex items-center gap-2 px-3 py-1 bg-surface-container/50 glass-overlay rounded-full mb-6">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1; font-size: 16px;">cloudy_snowing</span>
<span class="font-label-caps text-label-caps text-on-surface">Lush Rainy Season</span>
</div>
<h1 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4 leading-tight">August in Nan: Where the Earth Breathes Green.</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-md">Experience the peak of the rainy season. Nan isn't just a place; it's a feeling that changes every month.</p>
<button class="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded-lg hover:bg-primary-container transition-colors shadow-sm hover:shadow-md transform hover:-translate-y-0.5 duration-200">
                    PLAN MY SEASON
                </button>
</div>
</section>
<!-- Seasonal Navigator -->
<section class="py-12 border-b border-outline-variant/20 bg-surface">
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop overflow-x-auto hide-scrollbar">
<div class="flex items-center gap-8 min-w-max">
<div class="text-on-surface-variant/50 font-label-caps text-label-caps cursor-pointer hover:text-on-surface transition-colors">MAY</div>
<div class="text-on-surface-variant/50 font-label-caps text-label-caps cursor-pointer hover:text-on-surface transition-colors">JUN</div>
<div class="text-on-surface-variant/50 font-label-caps text-label-caps cursor-pointer hover:text-on-surface transition-colors">JUL</div>
<div class="flex flex-col items-center gap-2 relative">
<div class="text-primary font-label-caps text-label-caps font-bold">AUG</div>
<div class="w-1.5 h-1.5 rounded-full bg-primary absolute -bottom-4"></div>
</div>
<div class="text-on-surface-variant/50 font-label-caps text-label-caps cursor-pointer hover:text-on-surface transition-colors">SEP</div>
<div class="text-on-surface-variant/50 font-label-caps text-label-caps cursor-pointer hover:text-on-surface transition-colors">OCT</div>
<div class="text-on-surface-variant/50 font-label-caps text-label-caps cursor-pointer hover:text-on-surface transition-colors">NOV</div>
</div>
</div>
</section>
<!-- Hidden Gem Spotlight -->
<section class="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div class="flex items-center justify-between mb-12">
<h2 class="font-headline-md text-headline-md text-primary">Hidden Gem Spotlight</h2>
<a class="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1" href="#">VIEW ALL <span class="material-symbols-outlined" style="font-size: 16px;">arrow_forward</span></a>
</div>
<div class="group relative rounded-[24px] overflow-hidden bg-surface-container-lowest h-[500px] md:h-[600px] cursor-pointer">
<img class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A beautifully composed, high-resolution editorial shot of a secluded, rustic wooden homestay nestled near a gently cascading hidden waterfall in Nan, Thailand. The setting is surrounded by dense, vibrant green foliage dripping with recent rain. Soft, cinematic light filters through the canopy, highlighting the natural textures of the wood and the sparkling water. The mood is intimate, serene, and authentically local, embodying a premium slow-living travel aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4OdzD-kg2eJwz9JWX8L3wfReYPXXD-pBPry5IEWcUHHk75Xs5ZkX1QpsQt2aMvwjSIjr3meeO0Jz12LP231shp7N57fFEgRWFKQR8pf8QmCvEopxty09eZJmrps0ePlYHYyLdvuChuREU5sk16xo-7PGR7nhLAbT7YBVCoQOnHNchm4d_iRCxovZO-purA5uTc0r3aZrMoFQR0WbACXONsnNIOyDJ6Y41RhBLiqU5wYfB4lr2SvFh44bK0MkIhvETQgJtK7Rdr0U"/>
<div class="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/30 to-transparent opacity-80"></div>
<div class="absolute top-6 left-6 z-10">
<div class="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/90 text-on-primary rounded-full glass-overlay">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1; font-size: 14px;">star</span>
<span class="font-label-caps text-label-caps">Best in August</span>
</div>
</div>
<div class="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10 text-on-primary">
<p class="font-label-caps text-label-caps text-primary-fixed-dim mb-3">SAPAN, NAN</p>
<h3 class="font-display-lg-mobile md:font-headline-md text-display-lg-mobile md:text-headline-md mb-4 leading-tight">The Whispering Waterfall Homestay</h3>
<p class="font-body-md text-body-md text-on-primary/80 max-w-2xl mb-6">Tucked away in the misty valleys, this secluded retreat offers an unparalleled connection to nature during the peak of the rainy season.</p>
<div class="flex items-center justify-between">
<div class="flex gap-4">
<span class="px-3 py-1 border border-on-primary/30 rounded-full font-label-caps text-label-caps text-on-primary/80">NATURE</span>
<span class="px-3 py-1 border border-on-primary/30 rounded-full font-label-caps text-label-caps text-on-primary/80">SLOW LIVING</span>
</div>
<div class="w-10 h-10 rounded-full bg-surface-container-lowest/10 glass-overlay flex items-center justify-center transform group-hover:bg-primary-fixed group-hover:text-primary transition-all duration-300">
<span class="material-symbols-outlined">arrow_outward</span>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- BottomNavBar (Mobile Only) -->
<nav class="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-safe h-20 bg-background/90 dark:bg-background/90 backdrop-blur-xl border-t border-outline-variant/20 rounded-t-xl">
<a class="flex flex-col items-center justify-center text-primary dark:text-primary-fixed-dim bg-primary-fixed/20 rounded-xl px-4 py-2 hover:bg-surface-container-low transition-all" href="#">
<span class="material-symbols-outlined mb-1">explore</span>
<span class="font-label-caps text-label-caps">Discover</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant/70 dark:text-surface-variant/70 px-4 py-2 hover:bg-surface-container-low transition-all" href="#">
<span class="material-symbols-outlined mb-1">auto_awesome</span>
<span class="font-label-caps text-label-caps">Plan</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant/70 dark:text-surface-variant/70 px-4 py-2 hover:bg-surface-container-low transition-all" href="#">
<span class="material-symbols-outlined mb-1">map</span>
<span class="font-label-caps text-label-caps">Map</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant/70 dark:text-surface-variant/70 px-4 py-2 hover:bg-surface-container-low transition-all" href="#">
<span class="material-symbols-outlined mb-1">account_circle</span>
<span class="font-label-caps text-label-caps">Profile</span>
</a>
</nav>
</body></html>