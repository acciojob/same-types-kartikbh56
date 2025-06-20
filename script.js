function isSameType(value1, value2) {
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }
  return typeof value1 === typeof value2;
}

// do not change the code below
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Convert inputs to actual types before comparing
let parsed1 = Number(value1);
let parsed2 = Number(value2);

let finalVal1 = Number.isNaN(parsed1) ? NaN : value1;
let finalVal2 = Number.isNaN(parsed2) ? NaN : value2;

// Try parsing to actual type if numeric, otherwise leave as string
if (!isNaN(parsed1)) finalVal1 = parsed1;
if (!isNaN(parsed2)) finalVal2 = parsed2;

alert(isSameType(finalVal1, finalVal2));
