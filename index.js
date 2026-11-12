'use strict';

const config = require('./config.json');
const tasks = require('./lib/tasks');
const { formatTask, formatSummary } = require('./lib/format');

const [command, ...args] = process.argv.slice(2);

function run() {
  switch (command) {
    case 'list':
      tasks.list().forEach((task) => console.log(formatTask(task, config)));
      break;

    case 'add': {
      const title = args.join(' ').trim();
      if (!title) {
        console.error('Usage: node index.js add "<title>"');
        process.exitCode = 1;
        return;
      }
      const task = tasks.add(title);
      console.log(`Added: ${formatTask(task, config)}`);
      break;
    }

    case 'done': {
      const task = tasks.complete(args[0]);
      if (!task) {
        console.error(`No task with id ${args[0]}`);
        process.exitCode = 1;
        return;
      }
      console.log(`Completed: ${formatTask(task, config)}`);
      break;
    }

    case 'summary':
      console.log(formatSummary(tasks.list(), config));
      break;

    default:
      console.log(`${config.appName} v${config.version}`);
      console.log('Commands: list | add "<title>" | done <id> | summary');
  }
}

run();
