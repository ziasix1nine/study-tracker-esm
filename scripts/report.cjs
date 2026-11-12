
const fs = require('node:fs');
const path = require('node:path');

async function main() {
  const tasksModule = await import('../lib/tasks.js');
  const formatModule = await import('../lib/format.js');

  const config = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../config.json'), 'utf8')
  );

  const allTasks = tasksModule.list();

  console.log('Study Tracker Report');
  console.log(formatModule.formatSummary(allTasks, config));
  console.log('\nOpen tasks:');

  allTasks
    .filter((task) => !task.done)
    .forEach((task) => {
      console.log(formatModule.formatTask(task, config));
    });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
