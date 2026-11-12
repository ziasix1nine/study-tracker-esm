export function formatTask(task, config) {
  const mark = task.done ? config.doneMark : config.todoMark;
  return `${mark} ${task.id}  ${task.title}`;
}

export function formatSummary(allTasks, config) {
  const done = allTasks.filter((t) => t.done).length;
  const pct = allTasks.length
    ? Math.round((done / allTasks.length) * 100)
    : 0;

  return `${config.appName}: ${done}/${allTasks.length} tasks complete (${pct}%)`;
}