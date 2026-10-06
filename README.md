# Assembly: Endgame

A hangman-style word-guessing game with a twist: every wrong guess doesn't just bring you closer to losing — it "kills off" a programming language,
 one by one, until only the dreaded ones (Assembly, Haskell...) remain. Guess the word before you run out of languages!

Built with **React**, **TypeScript**, and **Vite**.

## How to Play

1. A random word is chosen at the start of the game.
2. Click letters on the on-screen keyboard to make a guess.
3. Correct guesses reveal the letter in the word.
4. Incorrect guesses eliminate one programming language from the list.
5. **Win** by guessing the full word before all languages are eliminated.
6. **Lose** if you run out of guesses — click **New Game** to try again.

## Features

- Dynamic word and letter state management with React hooks
- Visual language-elimination mechanic in place of a traditional hangman drawing
- Accessible live region (`aria-live`) announcing game status for screen readers
- Confetti celebration on a win 🎉
- Fully typed with TypeScript for safer state and prop handling

## Tech Stack

| Tool | Purpose |
|---|---|
| React | UI library |
| TypeScript | Static typing |
| Vite | Build tool / dev server |
| [`clsx`](https://www.npmjs.com/package/clsx) | Conditional className composition |
| [`react-confetti`](https://www.npmjs.com/package/react-confetti) | Win celebration animation |

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── StatusClass.tsx
│   ├── Confetti.tsx
│   ├── AriaLiveStatus.tsx
│   ├── LanguageChips.tsx
│   ├── WordLetters.tsx
│   ├── NewGameButton.tsx
│   └── Keyboard.tsx
├── languages.ts
├── utils.ts
├── words.ts
└── App.tsx   # main game component
```

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```bash
git clone <repository-url>
cd Endgame
npm install
```

### Run the dev server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Build for production

```bash
npm run build
```

## Key Logic Overview

- **`currentWord`** — the word to guess, picked randomly via `getRandomWord()`.
- **`guessedLetters`** — array of letters the player has clicked so far.
- **`wrongGuessCount`** — derived from `guessedLetters`, counts letters not present in `currentWord`.
- **`isGameWon`** / **`isGameLost`** / **`isGameOver`** — derived boolean flags that drive UI state (keyboard disabling, confetti, status messages).

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
