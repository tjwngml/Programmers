function solution(sides) {
  const sortSides = [...sides].sort((a, b) => a - b);
  sortSides.pop();

  const maxValue = Math.max(...sides);

  function sum(a, b) {
    return a + b;
  }
  const othersSum = sum(...sortSides);

  if (maxValue < othersSum) {
    return 1;
  } else {
    return 2;
  }
}