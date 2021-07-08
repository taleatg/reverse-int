module.exports = function reverse (n) {
  let reversed = String(n).split('');
  if (reversed[0] === '-') {
      reversed.reverse().pop();
  } else if (reversed[reversed.length - 1] === 0) {
    reversed.reverse().shift();
  } else {
    reversed.reverse();
  }
  return reversed.join('');
}
