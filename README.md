# CloudKeeper

Premium enterprise website for CloudKeeper — built with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, GSAP, and Lenis.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** (Radix)
- **Framer Motion** + **GSAP** + **Lenis** smooth scroll
- **ESLint** + **Prettier** (with Tailwind class sorting)

## Getting started

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001).

## Scripts

| Command                | Description                 |
| ---------------------- | --------------------------- |
| `npm run dev`          | Start Turbopack dev server  |
| `npm run build`        | Production build            |
| `npm run start`        | Start production server     |
| `npm run lint`         | ESLint                      |
| `npm run format`       | Prettier write              |
| `npm run format:check` | Prettier check              |
| `npm run typecheck`    | TypeScript (`tsc --noEmit`) |

## Architecture

```text
src/
├── app/                  # App Router routes & layouts
│   └── (marketing)/      # Marketing route group
├── components/
│   ├── ui/               # shadcn primitives
│   ├── layout/           # Shell (header, footer, container)
│   ├── marketing/        # Landing sections
│   ├── motion/           # Animation primitives
│   └── providers/        # Client providers (Lenis, etc.)
├── config/               # Site & navigation config
├── features/             # Domain feature modules (add as you grow)
├── hooks/                # Shared React hooks
├── lib/                  # Utils, constants, animation variants
├── styles/               # Extra shared styles (optional)
└── types/                # Shared TypeScript types
```

## Conventions

- Prefer Server Components; mark client boundaries with `"use client"` only when needed.
- Put reusable UI in `components/`; domain logic in `features/<name>/`.
- Site copy and nav live in `src/config/` so marketing pages stay thin.
- Motion: Framer Motion for UI entrances, GSAP ScrollTrigger for scroll reveals, Lenis for smooth scrolling.
