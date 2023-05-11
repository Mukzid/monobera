# MonoBera 🐻

This is an official home for:

- Homepage
- Dex
- Honey
- BGS

## Stack

This Turborepo has the following tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

Run the following command:

```sh
npx create-turbo@latest -e with-tailwind
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

#### Apps

- `docs` (Not sure we'll need this, came with the template): a [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `web` (Homepage): another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)

The following can be built as separate apps or as one app with multiple routes:

- `dex` (Dex): another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `honey` (Honey): another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `bgs` (BGS): another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)

#### Packages

- `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/) shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Building packages/ui

This example is setup to build `packages/ui` and output the transpiled source and compiled styles to `dist/`. This was chosen to make sharing one `tailwind.config.js` as easy as possible, and to ensure only the CSS that is used by the current application and its dependencies is generated.

Another option is to consume `packages/ui` directly from source without building. If using this option, you will need to update your `tailwind.config.js` to be aware of your package locations, so it can find all usages of the `tailwindcss` class names.

For example, in [tailwind.config.js](packages/tailwind-config/tailwind.config.js):

```js
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
```
