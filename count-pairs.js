// add whatever parameters you deem necessary
function countPairs(arr, target) {
  const set = new Set(arr);
  // we will return this counter
  let count = 0;

  for (let num of arr) {
    set.delete(num);
    if (set.has(target - num)) count++;
  }
  return count;
}

module.exports = { countPairs };
