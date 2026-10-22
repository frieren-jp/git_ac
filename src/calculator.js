function add(a, b {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('Оба аргумента должны быть конечными числами');
  }
  return a + b;
}

module.exports = { add };
