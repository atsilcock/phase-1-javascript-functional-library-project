// myKeys function
function myKeys(object) {
    return Object.keys(object);
  }
  
  // myValues function
  function myValues(object) {
    return Object.values(object);
  }
  

// myEach function
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (const key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  // myMap function
  function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i]));
      }
    } else {
      for (const key in collection) {
        result.push(callback(collection[key], key));
      }
    }
    return result;
  }
  
 // myReduce function
function myReduce(collection, callback, acc) {
    let startIdx = 0;
  
    if (acc === undefined) {
      const keys = Object.keys(collection);
      acc = collection[keys[0]];
      startIdx = 1;
    }
  
    if (Array.isArray(collection)) {
      for (let i = startIdx; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = startIdx; i < keys.length; i++) {
        acc = callback(acc, collection[keys[i]], collection);
      }
    }
  
    return acc;
  }
  
  
  // myFind function
  function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
    return undefined;
  }
  
  // myFilter function
  function myFilter(collection, predicate) {
    const result = [];
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        result.push(collection[i]);
      }
    }
    return result;
  }
  
  // mySize function
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // myFirst function
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  // myLast function
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
  // Export your functions for testing
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
  };
  