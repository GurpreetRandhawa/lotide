# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @gps_developer/lotide`

**Require it:**

`const _ = require('@gps_developer/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

1. **_head(array)_**: Function which takes an array as argument and return the first element of the array.

2. **_assertArraysEqual(array1, array2)_**: Function which takes two arrays, checks if these two arrays are same and console logs if they are same or not.

3. **_assertEqual(value1, value2)_**: Function which takes two values( can not be array or object) and console logs if they are same or not.

4. **_assertObjectsEqual(object1, object2)_**: Function which takes two objects and console logs if they are same or not.
5. **_countLetters(string)_**: Function which takes a string and returns an object with keys as the unique characters in the string and their value as the number of times a specific character appears in the string. Example: it returns { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } for 'lighthouse in the house'
6. **_countOnly(array, object)_** : Function which takes an array and an object( the object some keys which are same as array elements and those key's value is either true or false )and return on object with keys as the unique elements in the array and their value as the number of times a specific element appears in the array subject to the condition that the object that is passed as parameter has value as true for the corresponding key. Example: returns { Fang: 2, Jason: 1 } for ['Karl','Salima','Agouhanna','Fang','Kavith','Jason','Salima','Fang','Joe',] and { Jason: true,Karima: true,Fang: true,Agouhanna: false,}
7. **_eqObjects(object1, object2)_**: Function takes two objects and return true/false after checking if the two objects are same or not.
8. **_eqArrays(array1, array2)_**: Function takes in two arrays and returns true/false after checking if the two arrays are same or not. ,
9. **_findKeyByValue(object, value)_**: Function takes in an object and a value. It returns the key in the object which has it's value as the value parameter.
10. **_findKey(object, callback)_**: Function takes in an object and a callback function to check any specific condition and return the key that satisfies that condition specified in the callback.
    Example: it returns 'noma' for {Blue Hill: { stars: 1 },Akaleri: { stars: 3 },noma: { stars: 2 },elBulli: { stars: 3 },Ora: { stars: 2 },Akelarre: { stars: 3 }} and (x) => x.stars === 2,
11. **_flatten(array)_**: Function takes in an array which is nested and returns array with the nested array elements as normal elements with no nestig. Example: it return [1,2,3,4,5,6] for flatten([1,2,[3,4],5,6]),
12. **_letterPositions(string)_**:Function takes in a sentence(string) and returns an object with keys as unique characters in the string and value corresponding to a key as an array that has index of occurence of the unique character as an element of the array. Example: it returns { l: [ 0 ],i: [ 1, 11 ],g: [ 2 ],h: [ 3, 5, 15, 18 ],t: [ 4, 14 ], o: [ 6, 19 ],u: [ 7, 20 ],s: [ 8, 21 ], e: [ 9, 16, 22 ],n: [ 12 ]} for 'lighthouse in the house'
13. **_map(arary,callback= (word) => word[0] )_**:Function takes in an array of strings and callback that is by default given a value, it returns an array having elements which are the first character of each element of the array passed as parameter. Example: returns ['g', 'c', 't', 'm', 't'] for ['ground', 'control','to', 'major', 'tom']
14. **_takeUntil(array, callback)_**: Function takes in an array and a callback function and returns an array with elements only till the element satisfies the callback condition. Example: returns [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5] for callback: (x) => x < 0
15. **_without(array1, array2)_**: Function takes in two arrays and returns array which contains the elements of array1 that are not present in array2.
16. **_tail(array)_**: Function takes in an array and returns array without the first element.
17. **_middle(array)_**: Function takes in an array and return array with the middle element. Example: In case of odd number of elements in array [1,2,3,4,5] it return [3]. In case of even number of elements in arrayv[1,2,3,4,5,6] it returns [3,4].
