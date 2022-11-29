console.log("argsv is", process.argv.slice(2));

let totalSum = 0;

function sum() {
  for (let i = 3; i < process.argv.length; i++) {
    totalSum += Number(process.argv[i]);
  }
}

sum();

console.log("total is", totalSum);
console.log("--------------------------------------");

console.log("argsv is", process.argv.slice(2));

let totalAvg = 0;
let average = 0;

function avg() {
  for (let i = 3; i < process.argv.length; i++) {
    totalAvg += Number(process.argv[i]);
  }
  average = totalAvg / process.argv.slice(3).length;
}

avg();

console.log(average);

console.log("--------------------------------------");

if (process.argv[2] === "sum") {
  sum();
} else if (process.argv[2] === "avg") {
  sum();
  avg();
} else if (process.argv[2] !== "sum" || process.argv[2] !== "avg") {
  total =
    'I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)';
}
