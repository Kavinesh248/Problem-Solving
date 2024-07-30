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
console.log(value);
