# Icarus Diet Planner

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Vite](https://img.shields.io/badge/bundler-vite-brightgreen)

Icarus Diet Planner is a small web app that helps players compose and save optimized food combinations to achieve desired in-game buffs. It ships with a searchable food database, buff aggregation, save/load diet lists, and lightweight UI controls for rapid planning.

## Table of Contents

- Overview
- Features
- Tech stack
- Quick Start
- Usage
- Data & Project Structure
- Food Data Updates
- Contributing
- License

## Features

- Searchable food list with nutritional/buff metadata
- Select multiple foods to aggregate buffs and preview results
- Save and manage multiple diet presets
- Responsive UI with components for filter, grid and selections
- Lightweight local persistence for saved diets

## Tech stack

- Framework: React + TypeScript
- Bundler: Vite
- Styling: Tailwind CSS (utility-first)
- UI primitives: Radix UI, Sonner (toasts)

See `package.json` for full dependencies and scripts.

## Quick Start

Prerequisites:

- Node.js 18+ and npm (or pnpm/yarn)

Install and run locally:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Food Data Updates

Food statistics and miscellaneous effects are synced from the [Icarus Wiki Food statistics table](https://icarus.wiki.gg/wiki/Food). GitHub Actions checks weekly and can also be run manually from the Actions tab. A successful sync opens or updates a pull request for review; it does not push generated data directly to the default branch.

To run the sync locally, install the Python dependencies and run:

```bash
python -m pip install -r requirements.txt
npm run sync:foods
npm run test:foods
```

The wiki's food data is available under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0); see the source link in the app footer.

## Usage

- Open the app in your browser (Vite defaults to http://localhost:5173)
- Use the search bar to filter foods by name or tags
- Click items in the food grid to add them to the selection
- View aggregated buffs and totals in the summary panel
- Save your current selection with the Save controls to persist locally

Tip: The app is designed for quick experimentation—try toggling player setup and buff filters to see different optimization results.

## Data & Project Structure

Key folders and files:

- `src/` – application source code
  - `src/pages/` – top-level pages like `home.tsx` and `savedDiets.tsx`
  - `src/components/` – reusable UI and feature components (e.g., `foodGrid.tsx`, `saveControls.tsx`)
  - `src/data/foods/wiki-statistics.json` – the complete food catalog
  - `src/data/buffs/` – buff definitions and helpers
  - `src/lib/` – utilities, hooks, and local storage helpers

Data format:

- Food records and wiki statistics are stored in `src/data/foods/wiki-statistics.json`. Food images remain under `src/assets/foods/` and `public/food-images/`; buff definitions are centralized under `src/data/buffs/`.

The app loads food data only from `src/data/foods/wiki-statistics.json`. Weekly wiki updates refresh statistics while retaining planner metadata such as stomach cost, crafting stations, ingredients, and local image references.

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repository and create a feature branch
2. Install dependencies and run the dev server
3. Add tests or validate the UI manually
4. Open a pull request with a clear description of the change

Coding conventions:

- TypeScript for typesafety
- Follow existing component styling patterns
- Keep changes focused and write small commits

Issues & feature requests:

- Open issues in the repository with a clear title and reproduction steps or screenshots when possible.

## License

This project is MIT licensed — see the LICENSE file for details.

## Contact

If you have questions or want to collaborate, open an issue or reach out via the repository's discussion channels.
