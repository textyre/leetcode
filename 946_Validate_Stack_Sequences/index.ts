function validateStackSequences(pushed: number[], popped: number[]): boolean {
  const stack = [];
  let i = 0;
  for (const number of pushed) {
    stack.push(number);
    while (stack.length && stack[stack.length - 1] === popped[i]) {
      stack.pop();
      i++;
    }
  }

  return stack.length === 0;
}

validateStackSequences([2, 1, 0], [1, 2, 0]);
