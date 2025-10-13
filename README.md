# GermanAI Landing

Modern landing page for [germanai.uz](https://germanai.uz) built with Next.js 14 (App Router), TypeScript and Tailwind CSS.

## Tech stack

- [Next.js 14](https://nextjs.org/) with the App Router
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- ESLint + Prettier for linting and formatting

## Getting started

### Prerequisites

- Node.js 18.17 or newer
- npm 9 or newer (ships with Node.js)

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Linting & formatting

```bash
npm run lint
npm run format
```

### Build for production

```bash
npm run build
```

### Start the production server

```bash
npm run start
```

The build output lives in the `.next` directory and can be deployed to any Node.js hosting provider or a serverless platform supported by Next.js.

### Deploying

1. Set the environment variable `NODE_ENV=production` on the server/platform.
2. Run `npm install --production` to install dependencies (or use a build pipeline).
3. Build the project: `npm run build`.
4. Start the app: `npm run start`.

For static hosting on platforms like Vercel, simply connect the repository and use the default Next.js build command (`npm run build`) and output directory (`.next`).

## Project structure

```
├── public/               # Static assets (favicons, images)
├── src/
│   ├── app/              # App Router routes
│   ├── components/       # Reusable UI components
│   └── lib/              # Shared data helpers
├── tailwind.config.ts    # Tailwind configuration
├── postcss.config.mjs    # PostCSS configuration
├── eslint.config.mjs     # ESLint configuration
└── prettier.config.cjs   # Prettier configuration
```

## License

Copyright © ${new Date().getFullYear()} GermanAI.
