# Interval Timer

A simple React-based interval timer for managing customizable workout sessions with alternating work and rest periods.

## Features

- Adjustable durations for work and rest intervals
- Set number of total cycles (sets)
- Countdown timer with automatic switching between work and rest
- Start and reset controls
- Clean UI built with React components


## Getting Started

These instructions will help you set up the project locally.

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone the repository:

```bash
git clone https://github.com/TechnicalScando/intervaltimer.git
cd intervaltimer
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## File Structure

- `src/Components/Setup` – Root layout and main container
- `src/Components/InfoArea` – Core logic for timers and state
- `src/Components/InfoBar` & `ButtonBar` – Display and control buttons
- `public/` – Static assets and entry HTML
- `App.js` – Root component loading the main timer setup

## How It Works

1. You start with default values (e.g., 5s work, 3s rest, 7 sets).
2. Press **Start** to begin the timer.
3. The app counts down work time, then rest time, and repeats for the set count.
4. Press **Reset** at any time to stop and return to defaults.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Made with using React.
