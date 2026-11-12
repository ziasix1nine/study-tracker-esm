// =====================================================================
// Owned by the Registrar team. DO NOT EDIT the code in this file.
// Other campus tools still load it with require(), so it must stay
// CommonJS. You may rename the file, but not change its code.
// =====================================================================

function makeId(existingTasks) {
  const numbers = existingTasks.map((t) => Number(t.id.slice(1)));
  const next = numbers.length ? Math.max(...numbers) + 1 : 1;
  return 'T' + String(next).padStart(3, '0');
}

module.exports = makeId;
