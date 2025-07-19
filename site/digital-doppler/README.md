# Professional Portfolio Site

This is a portfolio website built with [Astro](https://astro.build/).

## Getting Started

### Prerequisites

- Node.js (v18.20.8 or higher)
- npm (v9.6.5 or higher)

### Installation

1.  Navigate to the `site/digital-doppler` directory:
    ```bash
    cd site/digital-doppler
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

1.  From the `site/digital-doppler` directory, run the following command:
    ```bash
    npm run dev
    ```
2.  Open your browser and navigate to `http://localhost:4321` to see the site.

The development server features hot-reloading, so any changes you make to the files will be reflected in the browser automatically.

## Content Management

The main content pages are located in `src/pages/` and are written in Markdown for easy editing:

- `src/pages/about.md`
- `src/pages/certifications.md`
- `src/pages/projects.md`

Simply edit these files to add your own content.

## Building for Production

To create a production-ready build of the site, run the following command from the `site/digital-doppler` directory:

```bash
npm run build
```

This will generate a static site in the `dist/` directory, which can be deployed to any static hosting service, including GitHub Pages.
