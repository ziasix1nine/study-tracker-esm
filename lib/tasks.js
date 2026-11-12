const fs = require('fs');
const path = require('path');
const makeId = require('./legacy-id');

const DATA_FILE = path.join(__dirname, '..', 'data', 'tasks.json');

function load() {
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

function save(allTasks) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(allTasks, null, 2) + '\n');
}

function list() {
  return load();
}

function add(title) {
  const allTasks = load();
  const task = { id: makeId(allTasks), title, done: false };
  allTasks.push(task);
  save(allTasks);
  return task;
}

function complete(id) {
  const allTasks = load();
  const task = allTasks.find((t) => t.id === id);
  if (!task) return null;
  task.done = true;
  save(allTasks);
  return task;
}

module.exports = { list, add, complete };
