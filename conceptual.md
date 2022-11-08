### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
    async/await functions, promises

- What is a Promise?
    a promise is a one time guarantee of a future value

- What are the differences between an async function and a regular function?
    an async function will return a promise and continue executing the code after it, 
    while a regular function won't execute further code until it is finished running 

- What is the difference between Node.js and Express.js?
    node is a javascript environment that runs on the backend, and express is a web framework meant to work with node

- What is the error-first callback pattern?
    a pattern in node.js that either returns successful data or an error object to facilitate debugging

- What is middleware?
    code that runs in the middle of the request/response cycle 

- What does the `next` function do?
    executes the next function in the sequence of operations

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

    the variable names aren't particularly descriptive, there's a lot of repeated code

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
