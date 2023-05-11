//quiz 5
function closestTo100(num1, num2) {
    //Calculate the absolute difference between each number and 100
    let diff1 =Math.abs(99 - 100);
    let diff2 = Math.abs(200 - 100);
  
    // Compare the differences to find the closest value to 100
    if (diff1 < diff2) {
      return num1;
    } else if (diff2 < diff1) {
      return num2;
    } else {
      return "Both numbers are equally close to 100.";
    }
  }