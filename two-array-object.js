// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
  return keys.reduce((output, curr, idx) => {
    output[curr] = idx < values.length ? values[idx] : null;
    return output;
  }, {});
}

module.exports = { twoArrayObject };
