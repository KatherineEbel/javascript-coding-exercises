/*
* Stack - list of values that grows and shrinks dynamically.
* Can be implemented as an Array that uses two methods : push and pop
*
* Stack and register programming language: uses a stack of values
* Each operation in the language operates on a 'register' (current value)
* **REGISTER IS NOT PART OF STACK**
* Operation that requires two values pops the topmost item from the stack
*   operates on the popped value and the register value
*   store result back in register
*
* Example MULT
*   1 remove value from stack
*   2 multiply removed stack value with register value
*   3 store result back in register
*
*   stack [3, 6, 4]
*   register 7
*
*   stack pop => 4 * register = 28
*   register = 28
*
* implement a miniature stack and register based programming language
*  with following commands (operations/tokens)
*
* n place value in register (do not modify stack)
* PUSH push register value onto the stack leave value in register
* ADD pop value from stack and add to register store result in register
* MULT pop value from stack and multiply by register store result in register
* DIV pop value from stack
*   - divide register by popped value store **INTEGER** result in register
* REMAINDER pop value from stack
*   - divide register by popped value store **INTEGER** remainder in register % operator
* POP remove top item from stack and place in register
* PRINT print register value (console.log)
*
* RULES:
* All operations are integer operations (relevant DIV and REMAINDER)
* All arguments are valid programs
*   - won't pop non-existent value, no unknown tokens
* Initial stack and register are [] and 0
*
* Input: string
* Return value: undefined console log values
*
* Tokens:
* POP REMAINDER ADD SUB PUSH MULT PRINT n (/\d/)
*
* parse "program"
* create list of operations (split on \s)
* if token is a number \d then place value in register
* else find the method on 'language' object and invoke function
*
* Data Structures:
* Object with tokens as keys and functions as values
* */

const initLanguage = () => {
  let register = 0;
  const stack = [];
  return {
    PUSH() { stack.push(register); },
    ADD() { register += stack.pop(); },
    SUB() { register -= stack.pop(); },
    MULT() { register *= stack.pop(); },
    DIV() { register = Math.floor(register / stack.pop()); },
    REMAINDER() { register = Math.floor(register % stack.pop()); },
    POP() { register = stack.pop(); },
    PRINT() { console.log(register); },
    setRegister(n) { register = n; },
  };
};

function minilang(program) {
  const language = initLanguage();
  const tokens = program.split(' ').map((token) => (/\d/.test(token) ? +token : token));
  const operations = Object.keys(language);
  tokens.forEach((token) => {
    if (operations.includes(token)) {
      language[token]();
    } else {
      language.setRegister(token);
    }
  });
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
