# Calculator App

## Project overview

A small calculator web app built with React + TypeScript and Vite. It implements a simple, mobile-style calculator UI with basic arithmetic, percent, sign toggle, backspace and AC controls. The project includes utilities and a custom hook for calculator logic plus unit tests.

## Key features

- Basic arithmetic (add, subtract, multiply, divide)
- Operator precedence for chained operations
- Decimal input and prevention of multiple decimal points
- Sign toggle (±), percent (%) and backspace
- Display formatting with space as thousands separator
- Maximum of 10 digits input with message notification
- Fully typed with TypeScript and covered by unit tests (Vitest + React Testing Library)

## Technical stack

- Framework: React
- Language: TypeScript
- Bundler/dev server: Vite
- Testing: Vitest, React Testing Library
- Formatting/localization: Intl.NumberFormat

## Setup instructions

Follow these steps on macOS (zsh). Commands are copy-paste ready.

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Build production bundle

```bash
npm run build
```

Run tests (watch mode)

```bash
npm test
```

Run tests once (non-watch)

```bash
npx vitest run
```

## Usage guide (basic steps)

1. Start the development server (`npm run dev`) and open the app in your browser (Vite will show the local URL).
2. Use the on-screen keys to enter numbers and arithmetic operators.
3. Use `=` (equals) to evaluate the expression, `AC` to clear, `±` to toggle sign, `%` to apply percent, and backspace to delete the last digit.
4. The display shows formatted numbers with spaces for thousands separators and a small history above the main value when an operator is active.

That's it — the file contains only the requested sections. If you'd like, I can also run the test suite and commit this file for you.
