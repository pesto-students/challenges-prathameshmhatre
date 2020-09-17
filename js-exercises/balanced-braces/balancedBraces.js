function balancedBraces(str) {
  const stack = [];

  const open = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  const closed = {
    '}': true,
    ']': true,
    ')': true,
  };

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    /* If character is an opening brace add it to a stack */
    if (open[char]) {
      stack.push(char);
    } else if (closed[char]) {
      // eslint-disable-next-line max-len
      /* If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false */
      if (open[stack.pop()] !== char) return false;
    }
  }
  return stack.length === 0;
}

export { balancedBraces };
