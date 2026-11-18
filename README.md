# Stovetop Music – Next.js Frontend

The web frontend for [Stovetop Music](https://stovetopmusic.com) — a platform for streaming radio, playlists, and videos, with pages for live sound services, partnerships, and artist interviews. Built with Next.js and backed by a Django REST Framework API.

---

## Features

- **Radio** – Stream radio content organized by sections and folders.
- **Playlists** – Browse and discover curated music playlists.
- **Videos** – Watch video content from the platform.
- **Live Sound** – Information and showcase of live sound services.
- **Partnership** – Partner application and information page.
- **Book an Interview** – Request or schedule an artist/media interview.
- **Contact** – Contact form backed by the DRF API.
- **Careers** – Open positions and opportunities.
- **Download** – Links to the mobile app download.

---

## Tech Stack

- **Framework** – Next.js 16 (App Router)
- **Language** – TypeScript 5
- **UI Library** – React 19
- **Styling** – Tailwind CSS 4
- **HTTP Client** – Axios
- **Icons** – Lucide React
- **Linting** – ESLint 9 with `eslint-config-next`
- **Backend** – Django REST Framework (separate repository)
- **Mobile App** – Flutter (published on Google Play)

---

## Project Structure

```
src/
├── app/           # Pages and API routes (Next.js App Router)
├── components/    # Shared UI (Navbar, Footer)
├── features/      # Feature-scoped components and logic
└── lib/
    └── api.ts     # Shared Axios instance
public/
└── images/        # Static assets
```

---

## Installation & Setup

**Prerequisites**

- Node.js 18 or later
- npm, yarn, or pnpm

**Clone the repository**

```bash
git clone https://github.com/Aklabu/NextJS-Stovetop.git
cd NextJS-Stovetop
```

**Install dependencies**

```bash
npm install
```

---

## Environment Variables

Copy the example file and fill in the values:

```bash
cp .env.example .env.local
```

`.env.example`:

```env
# Backend API Base URL — no trailing slash
# Development: http://127.0.0.1:8000
# Production:  https://api.stovetopmusic.com
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

---

## Run Locally

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## Build & Production

```bash
npm run build   # Build for production
npm start       # Start the production server
npm run lint    # Lint the codebase
```

---

## Mobile App

The official Stovetop Music mobile app is built with Flutter and available on the Google Play Store:

[Download on Google Play](https://play.google.com/store/apps/details?id=com.app.stovetopmusic&hl=en)

---

## License & Author

**Md. Joni Akter Labu**

- GitHub: [github.com/Aklabu](https://github.com/Aklabu)
- LinkedIn: [linkedin.com/in/joniakterlabu](https://www.linkedin.com/in/joniakterlabu/)

This project is private. All rights reserved.
