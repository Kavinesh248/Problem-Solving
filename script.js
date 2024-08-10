/*
Problem: 1
  Given an integer n, return a counter function. 
  This counter function initially returns 
  n and then returns 1 more than the previous value 
  every subsequent time it is called 
  (n, n + 1, n + 2, etc).

*/

var createCounter = function (n) {
  return function () {
    return n++;
  };
};

// const counter = createCounter(10);
// console.log(counter());
// console.log(counter());
// console.log(counter());

/*
Problem: 2
  Write a function expect that helps developers test their code.
  It should take in any value val and return an object with the 
  following two functions.

  toBe(val) accepts another value and returns true if the two values === each other. 
  If they are not equal, it should throw an error "Not Equal".

  notToBe(val) accepts another value and returns true if the two values !== each other. 
  If they are equal, it should throw an error "Equal".

*/

var expect = function (val) {
  return {
    toBe(valSome) {
      if (val === valSome) return true;
      else throw new Error("Not Equal");
    },
    notToBe(valSome) {
      if (val === valSome) return "Equal";
      else return true;
    },
  };
};

// console.log(expect(5).toBe(5));
// console.log(expect(5).notToBe(5));
// console.log(expect(5).toBe(null));

/*

  Write a function createCounter. It should accept an 
  initial integer init. 
  It should return an object with three functions.

  The three functions are:

  increment() increases the current value by 1 and then returns it.
  decrement() reduces the current value by 1 and then returns it.
  reset() sets the current value to init and then returns it.

*/

var createCounter2 = function (init) {
  let initial = init;
  return {
    increment() {
      return (initial += 1);
    },
    reset() {
      // initial = init;
      return (initial = init);
    },
    decrement() {
      return (initial -= 1);
    },
  };
};

// const counter = createCounter2(5);
// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());

// const counter = createCounter2(0);
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.reset());
// console.log(counter.reset());

/*

    Given an integer array arr and a mapping function
    fn, return a new array with a transformation applied 
    to each element.

    The returned array should be created 
    such that returnedArray[i] = fn(arr[i], i).

    Please solve it without the built-in 
    Array.map method.

*/

const plusOne = function (n) {
  return n + 1;
};

const plusI = function (n, i) {
  return n + i;
};

const constant = function (n) {
  return (n = 43);
};

var map = function (arr, fn) {
  let result = [];
  arr.forEach((el, index) => {
    result.push(fn(el, index));
  });
  return result;
};

// const newArray = map([1, 2, 3], plusI);
// console.log(newArray);

/*

    Given an integer array arr and a filtering
    function fn, return a filtered array filteredArr.

    The fn function takes one or two arguments:

    arr[i] - number from the arr
    i - index of arr[i]
    filteredArr should only contain the elements 
    from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

    Please solve it without the built-in Array.filter method.

*/

const greaterThan = function (n, i) {
  if (n > 10) return n;
};

const filter = function (arr, fn) {
  const filterArr = [];
  arr.forEach((el, i) => {
    if (fn(el, i)) {
      filterArr.push(el);
    }
  });
  return filterArr;
};

// console.log(filter([10, 0, 19, 20], greaterThan));

/*

     Given an integer array nums, a reducer function fn, and an initial value init,
     return the final result obtained by executing the fn function 
     on each element of the array, sequentially, passing in the return 
     value from the calculation on the preceding element.

    This result is achieved through the following
     operations: val = fn(init, nums[0]), val = fn(val, nums[1]), 
     val = fn(val, nums[2]), ... until every element in the array has been processed. 
     The ultimate value of val is then returned.

    If the length of the array is 0, the function should return init.

    Please solve it without using the built-in Array.reduce method.

*/

const sum = function (acc, cur) {
  return acc + cur * cur;
};

const reduce = function (nums, fn, init) {
  let val = init;
  nums.forEach(function (el) {
    val = fn(val, el);
  });
  return val;
};

const value = reduce([1, 2, 3, 4], sum, 100);
// console.log(value);

/*

  Function composition

  Given an array of functions [f1, f2, f3, ..., fn], 
  return a new function fn that is the function composition of the array of functions.

  The function composition of [f(x), g(x), h(x)] 
  is fn(x) = f(g(h(x))).

  The function composition of an empty list of 
  functions is the identity function f(x) = x.

  You may assume each function in the array accepts one integer as 
  input and returns one integer as output.

*/
//Not completed by me -> i've seen the solution (damn waste of trying this)
var compose = function (functions) {
  if (functions.length === 0) {
    return function (x) {
      return x;
    };
  }

  return functions.reduceRight((prevFn, nextFn) => {
    return function (x) {
      return nextFn(prevFn(x));
    };
  });
};

const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
const returned = compose(functions);
// console.log(returned(4));

/* Write a function argumentsLength that returns the count of arguments passed to it. */

const argumentsLength = function (...args) {
  return args.length;
};

// console.log(argumentsLength(3, 4, 5));

/*

Given a function fn, return a new function that is identical to the 
original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return
the same result as fn.

Every subsequent time it is called, 
it should return undefined.

*/

var once = function (fn) {
  let call = 1; //Truthy value

  return function (...args) {
    if (call) {
      call = 0; //Falsy value
      return fn(...args);
    }
  };
};

const onceFn = once((a, b, c) => a + b + c);
// console.log(onceFn(1, 2, 3));
// console.log(onceFn(1, 2, 3));

/*

 Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs.
 Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b. Assume that if a value has 
already been cached for the arguments (b, a) where a != b, it cannot be used for 
the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls 
should be made.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

*/

// const memoize = function (fn) {
//   let call = 0;
//   let cachedValue;
//   return function (...args) {
//     const cachedArgs = args;
//     cachedValue = fn(...args);
//     if (!args.length > 0) return (call += 1);
//     if (args === cachedArgs) return cachedValue;
//   };
// };
// const sumNum = (a, b) => a + b;
// const fib = (n) => (n <= 1 ? 1 : n - 1 + (n - 2));
// const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

// const memoizeSum = memoize(sumNum);
// console.log(memoizeSum(2, 2));
// console.log(memoizeSum(2, 2));
// console.log(memoizeSum());
// console.log(memoizeSum(1, 2));
// console.log(memoizeSum());

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = args;

    const result = fn(...args);
    cache[key] = result;

    if (key in cache) {
      return cache[key];
    }

    return result;
  };
}

const memoizedSum = memoize(function (a, b) {
  return a + b;
});

// console.log(memoizedSum(2, 3)); // Output: Computing sum, 5
// console.log(memoizedSum(2, 3)); // Output: 5

/*

Given two promises promise1 and promise2, return a new promise. 
promise1 and promise2 will both resolve with a number. 
The returned promise should resolve with the sum of the two numbers.
 

Example 1:

Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
Output: 7
Explanation: The two input promises resolve with the values of 2 and 5 respectively. 
The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise 
resolves is not judged for this problem.

*/

const addTwoPromises = async function (promise1, promise2) {
  return Promise.resolve((await promise1) + (await promise2));
};

// addTwoPromises(Promise.resolve(1), Promise.resolve(2)).then(console.log);

/*

Given a positive integer millis, write an asynchronous function that sleeps
for [millis] milliseconds. It can resolve any value.

*/

const sleep = async function (millis) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, millis);
  });
};
// let t = Date.now();
// sleep(4000).then(() => {
//   console.log(Date.now() - t); // 100
// });

/*

Given a function fn, an array of arguments args, and a timeout t in milliseconds, 
return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function 
cancelFn will be invoked.

setTimeout(cancelFn, cancelTimeMs)
Initially, the execution of the function fn should be
 delayed by t milliseconds.

If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel 
the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay 
t, fn should be executed with the provided args as arguments.

*/

const cancellableTimeout = function (fn, args, t) {
  const timeout = setInterval(() => {
    console.log(fn(...args));
  }, t);

  return function () {
    clearInterval(timeout);
  };
};

// const cancelTimeMs = 1900;
// const canceFn = cancellable((x) => x * 2, [4], 500);
// setTimeout(canceFn, cancelTimeMs);

/*

Given a function fn, an array of arguments args, and an interval time t, 
return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel 
function cancelFn will be invoked.

setTimeout(cancelFn, cancelTimeMs)
The function fn should be called with args immediately and
 then called again every t milliseconds until cancelFn 
is called at cancelTimeMs ms.

*/

var cancellableInterval = function (fn, args, t) {
  const timeout = function () {
    fn(...args);
  };
  timeout();
  setInterval(timeout, t);

  return function () {
    clearInterval(timeout);
  };
};
