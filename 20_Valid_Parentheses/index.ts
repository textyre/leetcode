function isValid(s: string): boolean {
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (brackets.hasOwnProperty(s[i])) {
      stack.push(s[i]);
    } else {
      const letter = stack.pop();
      if (brackets[letter] !== s[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid('[()][]'));
