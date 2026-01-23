# Casey Hudetz Portfolio

A modern, minimal portfolio website for Casey Hudetz — designer, speaker, teacher, and award-winning filmmaker.

**Live site:** [caseyhudetz.com](https://caseyhudetz.com)

## Overview

This is a single-page portfolio website built for GitHub Pages. It showcases Casey's work in product design, AI strategy, documentary filmmaking, and international speaking engagements.

## Features

- **Refined minimalist design** with editorial sensibility
- **Video modal** for viewing work samples directly on the site
- **Responsive layout** optimized for all devices
- **Dark mode support** (respects system preference)
- **Fast performance** with lazy loading and minimal dependencies
- **Accessible** with semantic HTML, keyboard navigation, and ARIA support

## Tech Stack

- Pure HTML, CSS, and JavaScript (no build tools required)
- Google Fonts (Cormorant Garamond, DM Sans)
- Vimeo and YouTube embeds for video content

## Structure

```
/
├── index.html          # Single page layout
├── css/
│   └── styles.css      # All styles with CSS custom properties
├── js/
│   └── main.js         # Interactions (modal, scroll, animations)
├── images/             # Local images (if needed)
├── CNAME               # Custom domain configuration
└── README.md
```

## Sections

1. **Hero** — Name, tagline, and role
2. **About** — Brief professional bio
3. **Featured Work** — Video thumbnails with modal playback
4. **Speaking** — Conference and event appearances
5. **Projects & Publications** — Books, podcasts, articles
6. **Contact** — Email and LinkedIn

## Development

No build tools required. Simply open `index.html` in a browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

## Deployment

This site is configured for GitHub Pages with a custom domain:

1. Push to the `main` branch (or configured Pages branch)
2. GitHub Pages will serve the site automatically
3. The CNAME file configures `caseyhudetz.com` as the custom domain

## Design Tokens

The site uses CSS custom properties for easy theming:

- `--color-bg`: Background color (#FDFBF7)
- `--color-accent`: Accent color (#C4704A - warm terracotta)
- `--font-display`: Cormorant Garamond (headings)
- `--font-body`: DM Sans (body text)

Dark mode is automatically applied based on system preference.

## Credits

- Design & Development: Built with Claude Code
- Typography: Google Fonts
- Video hosting: Vimeo, YouTube

## License

MIT License

---

**Casey Hudetz**
Senior Manager, Product Design at DocuSign
Chicago
