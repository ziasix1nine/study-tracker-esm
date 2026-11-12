# Study Tracker (legacy CommonJS starter)

A small command-line app that tracks study tasks in `data/tasks.json`.
It currently runs as **CommonJS**. Your job in Assignment 08 is to migrate it to **ES modules**.

## Run it

```bash
node index.js            # shows help
node index.js list
node index.js add "Review import() for the quiz"
node index.js done T002
node index.js summary
```

No npm packages are required.

## Files

| Path | What it does |
|---|---|
| `index.js` | Entry point: reads the command and prints results |
| `lib/tasks.js` | Loads, adds, and completes tasks in `data/tasks.json` |
| `lib/format.js` | Turns tasks into display text |
| `lib/legacy-id.js` | ID generator owned by another team — **do not edit its code** |
| `config.json` | App name and display settings |
| `demo/` | Predict-then-verify demo — **do not run until told to in the instructions** |

> Replace this README with your own as described in the assignment.
