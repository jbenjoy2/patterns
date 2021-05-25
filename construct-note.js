// add whatever parameters you deem necessary
const makeCounter = str => {
  const freqCounter = {};
  for (let char of str) {
    freqCounter[char] = freqCounter[char] + 1 || 1;
  }
  return freqCounter;
};

function constructNote(msg, letters) {
  const msgCounter = makeCounter(msg);
  const lettersCounter = makeCounter(letters);

  for (let key in msgCounter) {
    if (!lettersCounter[key]) return false;
    if (lettersCounter[key] < msgCounter[key]) return false;
  }
  return true;
}

module.exports = { makeCounter, constructNote };
