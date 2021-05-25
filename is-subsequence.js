// add whatever parameters you deem necessary
function isSubsequence(sub, main) {
  let subIdx = 0;
  let mainIdx = 0;
  // if str1 is empty, return true

  if (!sub) return true;
  //   loop over entire main string
  while (mainIdx < main.length) {
    // compare each string at their respective index
    if (main[mainIdx] === sub[subIdx]) {
      // if so, increase the subindex;
      subIdx++;
    }
    // if entirety of string one has been traversed, then all letters are in string 2 in the correct order so return true;
    if (subIdx === sub.length) return true;

    // go to next character in main
    mainIdx++;
  }
  return false;
}

module.exports = { isSubsequence };
