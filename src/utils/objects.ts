/** Rotate all elements of an array by a given count */
export function arrayRotate (arr: Array<unknown>, count: number, mutate: boolean = false): Array<unknown> {
  if (mutate) {
    count -= arr.length * Math.floor(count / arr.length);
    arr.push.apply(arr, arr.splice(0, count));
    return arr;
  } else {
    const newArr: Array<unknown> = [...arr];
    count -= newArr.length * Math.floor(count / newArr.length);
    newArr.push.apply(newArr, newArr.splice(0, count));
    return newArr;
  }
}
