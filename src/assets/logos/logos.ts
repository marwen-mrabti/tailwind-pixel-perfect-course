import docker from "./docker.svg";
import eslint from "./eslint.svg";
import github from "./github.svg";
import msw from "./msw.svg";
import playwright from "./playwright.svg";
import prettier from "./prettier.svg";
import prisma from "./prisma.svg";
import remix from "./remix.svg";
import resend from "./resend.svg";
import sentry from "./sentry.svg";
import shadcnUI from "./shadcn-ui.svg";
import sqlite from "./sqlite.svg";
import tailwind from "./tailwind.svg";
import typescript from "./typescript.svg";
import vitest from "./vitest.svg";
import zod from "./zod.svg";

export { EpicStackLogo } from "./epic-stack";

export const logos = [
  {
    src: remix,
    alt: "Remix",
    href: "https://remix.run",
    column: 1,
    row: 1,
  },
  {
    src: sqlite,
    alt: "SQLite",
    href: "https://sqlite.org",
    column: 1,
    row: 2,
  },
  {
    src: prisma,
    alt: "Prisma",
    href: "https://prisma.io",
    column: 1,
    row: 3,
  },

  {
    src: zod,
    alt: "Zod",
    href: "https://zod.dev/",
    column: 2,
    row: 2,
  },
  {
    src: github,
    alt: "GitHub",
    href: "https://github.com",
    column: 2,
    row: 3,
  },
  {
    src: resend,
    alt: "Resend",
    href: "https://resend.com",
    column: 2,
    row: 4,
  },

  {
    src: tailwind,
    alt: "Tailwind CSS",
    href: "https://tailwindcss.com",
    column: 3,
    row: 3,
  },

  {
    src: shadcnUI,
    alt: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    column: 3,
    row: 4,
  },
  {
    src: playwright,
    alt: "Playwright",
    href: "https://playwright.dev/",
    column: 3,
    row: 5,
  },
  {
    src: msw,
    alt: "MSW",
    href: "https://mswjs.io",
    column: 3,
    row: 6,
  },

  {
    src: prettier,
    alt: "Prettier",
    href: "https://prettier.io",
    column: 4,
    row: 2,
  },
  {
    src: vitest,
    alt: "Vitest",
    href: "https://vitest.dev",
    column: 4,
    row: 3,
  },
  {
    src: docker,
    alt: "Docker",
    href: "https://www.docker.com",
    column: 4,
    row: 4,
  },
  {
    src: typescript,
    alt: "TypeScript",
    href: "https://typescriptlang.org",
    column: 4,
    row: 5,
  },

  {
    src: eslint,
    alt: "ESLint",
    href: "https://eslint.org",
    column: 5,
    row: 1,
  },
  {
    src: sentry,
    alt: "Sentry",
    href: "https://sentry.io",
    column: 5,
    row: 2,
  },
] as const;
