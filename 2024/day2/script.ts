import { day2Example, day2Input } from "./input";

let safeReports = 0;

const day2Example2d = day2Example.map((line) =>
  line.split(" ").map((num) => parseInt(num))
);
const day2Input2d = day2Input.map((line) =>
  line.split(" ").map((num) => parseInt(num))
);
console.log("day2Example2d", day2Example2d);

// day2Example2d.forEach((line) => {
day2Input2d.forEach((line) => {
  console.log("checking line", line);
  if (line.length < 1) return;

  // check each char
  let isIncreasing = false;
  let isDecreasing = false;
  let isSafe = true;
  for (let i = 1; i < line.length; i++) {
    if (line[i - 1] > line[i] && !isIncreasing) {
      isDecreasing = true;
    } else if (line[i - 1] < line[i] && !isDecreasing) {
      isIncreasing = true;
    } else {
      //   console.log("not increasing or decreasing, unsafe", {
      //     "line[i - 1]": line[i - 1],
      //     "line[i]": line[i],
      //   });
      isSafe = false;
      break;
    }

    const difference = Math.abs(line[i - 1] - line[i]);
    if (!(difference > 0 && difference <= 3 && isDecreasing !== isIncreasing)) {
      //   console.log("difference unsafe", {
      //     "line[i - 1]": line[i - 1],
      //     "line[i]": line[i],
      //   });
      isSafe = false;
      break;
    }
  }
  if (isSafe) {
    safeReports++;
    console.log("safe", line);
  } else {
    console.log("unsafe", line);
  }
});

console.log("safeReports:", safeReports);
