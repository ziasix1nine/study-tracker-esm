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


#	Error message
1	ReferenceError: require is not defined in ES module scope	

# Cause
index.js uses CommonJS require()

# Fix	
Pending	

# Commit
Pending


## 3. Error log

### Error 1

**Error message**

`ReferenceError: require is not defined in ES module scope`

**Cause**

`index.js` uses CommonJS `require()`.

**Fix**

Replaced `require('./config.json')` with an ES module JSON import:

`import config from './config.json' with { type: 'json' };`

**Commit**

`fix: convert config to ESM import`




### Error 2

**Error message**

`SyntaxError: The requested module './lib/tasks.js' does not provide an export named 'default'`

**Cause**

The tasks module used CommonJS `module.exports`, but `index.js` expected an ES module export.

**Fix**

Replaced `module.exports` with a named ES module export and updated the import in `index.js`.

**Commit**

`fix: convert tasks exports to ESM`



### Error 3

**Error message**

`ReferenceError: require is not defined in ES module scope`

**Cause**

`lib/tasks.js` uses CommonJS `require()` to load the file system module.

**Fix**

Replaced `require('fs')` with `import fs from 'node:fs'`.

**Commit**

`fix: convert fs import to ESM`




### Error 4

**Error message**

`ReferenceError: require is not defined in ES module scope`

**Cause**

`lib/tasks.js` uses CommonJS `require()` to load the path module.

**Fix**

Replaced `require('path')` with `import path from 'node:path'`.

**Commit**

`fix: convert path import to ESM`



### Error 5

**Error message**

`ReferenceError: require is not defined in ES module scope`

**Cause**

`lib/tasks.js` uses CommonJS `require()` to load the legacy ID module.

**Fix**

Renamed `legacy-id.js` to `legacy-id.cjs` and imported it using an ES module default import. The legacy file's code was not changed.

**Commit**

`fix: preserve legacy id module as CommonJS`



### Error 6

**Error message**

`ReferenceError: __dirname is not defined in ES module scope`

**Cause**

`lib/tasks.js` uses `__dirname`, which is not available in ES modules.

**Fix**

Replaced `__dirname` with `import.meta.dirname`.

**Commit**

`fix: replace dirname with import.meta.dirname`




### Error 7

**Error message**

`ReferenceError: require is not defined in ES module scope`

**Cause**

`index.js` uses CommonJS `require()` to load the formatting functions.

**Fix**

Converted `format.js` to named ES module exports and updated the import in `index.js`.

**Commit**

`fix: convert format module to ESM`





## 5. Report script

Created `scripts/report.cjs` as a CommonJS script that uses dynamic `import()` to load `lib/tasks.js` and `lib/format.js`.

### Command

```bash
npm run report
```

### Actual output

```text
Study Tracker Report
Study Tracker: 1/3 tasks complete (33%)

Open tasks:
[ ] T002  Take Quiz 08
[ ] T003  Start the module migration assignment
```
