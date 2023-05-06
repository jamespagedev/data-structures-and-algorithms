var insertIntoSortedArr = function (arr, num, start, end) {
  if (arr.length === 0) {
    arr.push(num);
    return;
  } else if (arr.length === 1) {
    num < arr[0] ? arr.splice(0, 0, num) : arr.push(num);
    return;
  }

  const pivot = Math.ceil((start + end) / 2);

  if (pivot === 1 && num < arr[pivot] && num > arr[pivot - 1]) {
    arr.splice(1, 0, num);
    return;
  } else if (pivot === 1 && num < arr[pivot] && num <= arr[pivot - 1]) {
    arr.splice(0, 0, num);
    return;
  } else if (pivot === 1 && num > arr[pivot] && num < arr[pivot + 1]) {
    arr.splice(pivot + 1, 0, num);
    return;
  } else if (pivot === arr.length - 1 && num < arr[pivot]) {
    arr.splice(pivot, 0, num);
    return;
  } else if (pivot === arr.length - 1 && num > arr[pivot]) {
    arr.splice(pivot + 1, 0, num);
    return;
  } else if (num === arr[pivot]) {
    arr.splice(pivot + 1, 0, num);
    return;
  } else if (num > arr[pivot] && num < arr[pivot + 1]) {
    arr.splice(pivot + 1, 0, num);
    return;
  } else if (num < arr[pivot] && num > arr[pivot - 1]) {
    arr.splice(pivot, 0, num);
    return;
  }

  if (num < arr[pivot]) {
    return insertIntoSortedArr(arr, num, start, pivot);
  } else {
    return insertIntoSortedArr(arr, num, pivot, end);
  }
};

const arr1 = [2, 4, 6, 8, 10];
insertIntoSortedArr(arr1, 1, 0, arr1.length - 1); // [1, 2, 4, 6, 8, 10]
console.log("arr1:", arr1);

const arr2 = [2, 4, 6, 8, 10];
insertIntoSortedArr(arr2, 2, 0, arr2.length - 1); // [2, 2, 4, 6, 8, 10]
console.log("arr1:", arr2);

const arr3 = [2, 4, 6, 8, 10];
insertIntoSortedArr(arr3, 3, 0, arr3.length - 1); // [2, 3, 4, 6, 8, 10]
console.log("arr1:", arr3);

const arr4 = [2, 4, 6, 8, 10];
insertIntoSortedArr(arr4, 4, 0, arr4.length - 1); // [2, 4, 4, 6, 8, 10]
console.log("arr1:", arr4);

const arr5 = [2, 4, 6, 8, 10];
insertIntoSortedArr(arr5, 5, 0, arr5.length - 1); // [2, 4, 5, 6, 8, 10]
console.log("arr1:", arr5);

const arr6 = [2, 4, 6, 8, 10];
insertIntoSortedArr(arr6, 6, 0, arr6.length - 1); // [2, 4, 6, 6, 8, 10]
console.log("arr1:", arr6);

const arr7 = [2, 4, 6, 8, 10];
insertIntoSortedArr(arr7, 7, 0, arr7.length - 1); // [2, 4, 6, 7, 8, 10]
console.log("arr1:", arr7);

const arr8 = [2, 4, 6, 8, 10];
insertIntoSortedArr(arr8, 8, 0, arr8.length - 1); // [2, 4, 6, 8, 8, 10]
console.log("arr1:", arr8);

const arr9 = [2, 4, 6, 8, 10];
insertIntoSortedArr(arr9, 9, 0, arr9.length - 1); // [2, 4, 6, 8, 9, 10]
console.log("arr1:", arr9);

const arr10 = [2, 4, 6, 8, 10];
insertIntoSortedArr(arr10, 10, 0, arr10.length - 1); // [2, 4, 6, 8, 10, 10]
console.log("arr1:", arr10);

const arr11 = [2, 4, 6, 8, 10];
insertIntoSortedArr(arr11, 11, 0, arr11.length - 1); // [2, 4, 6, 8, 10, 11]
console.log("arr1:", arr11);

const arr12 = [2, 2, 3, 3, 4, 4];
insertIntoSortedArr(arr12, 1, 0, arr12.length - 1); // [1, 2, 2, 3, 3, 4, 4]
console.log("arr1:", arr12);

const arr13 = [2, 2, 3, 3, 4, 4];
insertIntoSortedArr(arr13, 2, 0, arr13.length - 1); // [2, 2, 2, 3, 3, 4, 4]
console.log("arr1:", arr13);

const arr14 = [2, 2, 3, 3, 4, 4];
insertIntoSortedArr(arr14, 3, 0, arr14.length - 1); // [2, 2, 3, 3, 3, 4, 4]
console.log("arr1:", arr14);

const arr15 = [2, 2, 3, 3, 4, 4];
insertIntoSortedArr(arr15, 4, 0, arr15.length - 1); // [2, 2, 3, 3, 4, 4, 4]
console.log("arr1:", arr15);

const arr16 = [2, 2, 3, 3, 4, 4];
insertIntoSortedArr(arr16, 5, 0, arr16.length - 1); // [2, 2, 3, 3, 4, 4, 5]
console.log("arr1:", arr16);

const arr17 = [2];
insertIntoSortedArr(arr17, 1, 0, arr17.length - 1); // [ 1, 2 ]
console.log("arr1:", arr17);

const arr18 = [2];
insertIntoSortedArr(arr18, 2, 0, arr18.length - 1); // [ 2, 2 ]
console.log("arr1:", arr18);

const arr19 = [2];
insertIntoSortedArr(arr19, 3, 0, arr19.length - 1); // [ 2, 3 ]
console.log("arr1:", arr19);

const arr20 = [2, 4];
insertIntoSortedArr(arr20, 1, 0, arr20.length - 1); // [ 1, 2, 4 ]
console.log("arr1:", arr20);

const arr21 = [2, 4];
insertIntoSortedArr(arr21, 2, 0, arr21.length - 1); // [ 2, 2, 4 ]
console.log("arr1:", arr21);

const arr22 = [2, 4];
insertIntoSortedArr(arr22, 3, 0, arr22.length - 1); // [ 2, 3, 4 ]
console.log("arr1:", arr22);

const arr23 = [2, 4];
insertIntoSortedArr(arr23, 4, 0, arr23.length - 1); // [ 2, 4, 4 ]
console.log("arr1:", arr23);

const arr24 = [2, 4];
insertIntoSortedArr(arr24, 5, 0, arr24.length - 1); // [ 2, 4, 5 ]
console.log("arr1:", arr24);

const arr25 = [1, 18, 34];
insertIntoSortedArr(arr25, 50, 0, arr25.length - 1); // [1, 18, 34, 50]
console.log("arr1:", arr25);

const arr26 = [1, 18, 50];
insertIntoSortedArr(arr26, 34, 0, arr26.length - 1); // [1, 18, 34, 50]
console.log("arr1:", arr26);

const arr27 = [18, 34, 50];
insertIntoSortedArr(arr27, 1, 0, arr27.length - 1); // [1, 18, 34, 50]
console.log("arr1:", arr27);

const arr28 = [1, 34, 50];
insertIntoSortedArr(arr28, 18, 0, arr28.length - 1); // [1, 18, 34, 50]
console.log("arr1:", arr28);
