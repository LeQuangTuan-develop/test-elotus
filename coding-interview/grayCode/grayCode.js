/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  if (n <= 0) return;

  // 'arr' will store all generated codes
  let arr = [];

  // start with one-bit pattern
  arr.push("0");
  arr.push("1");

  // Every iteration of this loop generates 2*i codes from previously
  // generated i codes.
  let i, j;
  for (i = 2; i < 1 << n; i = i << 1) {
    // Enter the previously generated codes again in arr[] in reverse
    // order. Nor arr[] has double number of codes.
    for (j = i - 1; j >= 0; j--) arr.push(arr[j]);

    // append 0 to the first half
    for (j = 0; j < i; j++) arr[j] = "0" + arr[j];

    // append 1 to the second half
    for (j = i; j < 2 * i; j++) arr[j] = "1" + arr[j];
  }

  arr = arr.map((item) => parseInt(item, 2));

  console.log(arr);

  // print contents of arr[]
  for (i = 0; i < arr.length; i++) document.write(arr[i] + "<br>");
};

grayCode(2);
