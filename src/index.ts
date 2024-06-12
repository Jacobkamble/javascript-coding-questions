const sumOfTwo = (num1: number, num2: number): number => {
  return num1 + num2;
};

const findMaxNumber = (array: number[]): number => {
  let max = 0;
  array.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });

  return max;
};

const reverseString = (str: string): string => {
  let reversStr = "";
  for (let index = str.length - 1; (index = 0); index--) {
    reversStr = reversStr + str[index];
  }
  return reversStr;
};

const isPalindrome = (strChar: string): boolean => {
  let reverse = "";

  for (let i = strChar.length - 1; i >= 0; i--) {
    reverse += strChar[i];
  }

  return strChar === reverse;
};

const filterEvenNumber = (arr: number[]): number[] => {
  // return arr.filter((ele: number) => ele % 2 === 0);

  const filterArray: number[] = [];

  arr.forEach((ele: number) => {
    if (ele % 2 === 0) {
      filterArray.push(ele);
    }
  });

  return filterArray;
};

const findFactorial = (num: number): number => {
  // const arr: number[] = [];
  // for (let index = 0; index < num; index++) {
  //   const value = index + 1;
  //   arr.push(value);
  // }

  // return arr.reduce((acc, curr) => {
  //   return acc * curr;
  // }, 1);

  let result: number = 1;

  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
};

const isPrime = (num: number): boolean{
  if (num === 1) {
    return false;
  }
  for (let i: number = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true
}

const findPrimeInRange = (start: number, end: number): number[] => {
  const primeNumbers: number[] = []
  start=Math.max(start,2)

  for (let i = start; i <= end; i++) {
    let isPrime = true;
    for (let j = 2; j <=Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break
      } 
    }
    
    if (isPrime) {
      primeNumbers.push(i)
    }
  }
  return primeNumbers
}

findPrimeInRange(1, 10)