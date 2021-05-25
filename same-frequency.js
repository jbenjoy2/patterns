const makeCounter = str => {
  const freqCounter = {};
  for (let char of str) {
    freqCounter[char] = freqCounter[char] + 1 || 1;
  }
  return freqCounter;
};

// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  // convert to string to create frequency counter
  const num1str = num1.toString();
  const num2str = num2.toString();

  //   test length of each string; if not even, not possible
  if (num1str.length !== num2str.length) return false;

  // make frequency counters
  const num1Freq = makeCounter(num1str);
  const num2Freq = makeCounter(num2str);

  for (let digit in num1Freq) {
    if (!num2Freq[digit]) return false;
    if (num1Freq[digit] !== num2Freq[digit]) return false;
  }
  return true;
}

module.exports = { makeCounter, sameFrequency };
