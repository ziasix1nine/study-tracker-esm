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


## 1. Baseline output

### Command 1: node index.js list
```text
[x] T001  Read Ch. 8 of Node.js: Novice to Ninja
[ ] T002  Take Quiz 08
[ ] T003  Start the module migration assignment
```

### Command 2: node index.js add "Review import() for the quiz"
```text
Added: [ ] T004  Review import() for the quiz
```

### Command 3: node index.js done T002
```text
Completed: [x] T002  Take Quiz 08
```

### Command 4: node index.js summary
```text
Study Tracker: 2/4 tasks complete (50%)
```


## 2. Predict-then-verify

### Predicted output

    db: module loaded
    banner: module loaded
    main: start
    db: connect() called
    main: end -> connected | Study Tracker

### Explanation

The imported modules load before the main module's regular statements execute. The database and banner messages appear first, followed by the main start message. Then connect() runs and the final line prints the returned values.


### Actual output

    db: module loaded
    banner: module loaded
    main: start
    db: connect() called
    main: end -> connected | Study Tracker

The actual output matched my prediction.