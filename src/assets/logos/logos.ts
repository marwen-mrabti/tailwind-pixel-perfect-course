import docker from './docker.svg'
import eslint from './eslint.svg'
import github from './github.svg'
import msw from './msw.svg'
import playwright from './playwright.svg'
import prettier from './prettier.svg'
import prisma from './prisma.svg'
import remix from './remix.svg'
import resend from './resend.svg'
import sentry from './sentry.svg'
import shadcnUI from './shadcn-ui.svg'
import sqlite from './sqlite.svg'
import tailwind from './tailwind.svg'
import typescript from './typescript.svg'
import vitest from './vitest.svg'
import zod from './zod.svg'

export { EpicStackLogo } from './epic-stack'

/*

*/
export const logos = [
	{
		src: remix,
		alt: 'Remix',
		href: 'https://remix.run',
	},

	{
		src: sqlite,
		alt: 'SQLite',
		href: 'https://sqlite.org',
	},
	{
		src: prisma,
		alt: 'Prisma',
		href: 'https://prisma.io',
	},
	{
		src: zod,
		alt: 'Zod',
		href: 'https://zod.dev/',
	},
	{
		src: github,
		alt: 'GitHub',
		href: 'https://github.com',
	},
	{
		src: resend,
		alt: 'Resend',
		href: 'https://resend.com',
	},

	{
		src: tailwind,
		alt: 'Tailwind CSS',
		href: 'https://tailwindcss.com',
	},

	{
		src: shadcnUI,
		alt: 'shadcn/ui',
		href: 'https://ui.shadcn.com/',
	},
	{
		src: playwright,
		alt: 'Playwright',
		href: 'https://playwright.dev/',
	},
	{
		src: msw,
		alt: 'MSW',
		href: 'https://mswjs.io',
	},
	{
		src: vitest,
		alt: 'Vitest',
		href: 'https://vitest.dev',
	},

	{
		src: docker,
		alt: 'Docker',
		href: 'https://www.docker.com',
	},
	{
		src: typescript,
		alt: 'TypeScript',
		href: 'https://typescriptlang.org',
	},
	{
		src: prettier,
		alt: 'Prettier',
		href: 'https://prettier.io',
	},
	{
		src: eslint,
		alt: 'ESLint',
		href: 'https://eslint.org',
	},
	{
		src: sentry,
		alt: 'Sentry',
		href: 'https://sentry.io',
	},
] as const
