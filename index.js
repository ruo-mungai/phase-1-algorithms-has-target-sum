function hasTargetSum(array, target) {
  // Write your algorithm here
  // iterate over all elements in array 
  for (let i = 0; i < array.length; i++){
    // for every array[i], iterate over the rest of element (array[j])
    for (let j = i + 1; j < array.length; j++){
      // test if array[i] + array [j] == target
      if(array[i] + array[j] == target){
        return true;
      }
    }
  }
  // if addition of any of the two elements in array is not == target, return false
  return false;
}


/* 
  Write the Big O time complexity of your function here
  0(n*2)
*/

/* 
  Add your pseudocode here
  iterate over the array
  add idividual items
  return true is the addition is equal to target
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
