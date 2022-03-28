

/*

You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.



function smallEnough(a, limit){
  for (let i = 0; i < a.length; i++) {
      if (a[i] <= limit) {
        console.log(`${a[i]} is under the limit`);
        return true;
      } else if (a[i] > limit) {
        console.log(`${a[i]} is over the limit`);
        return false;
      }
  }
};
*/

function smallEnough(a, limit){
  for (let i = 0; i < a.length; i++) {
    console.log(`${a[i]} is the number being evaluated`);
    if (a[i] >= limit) {
      return false;
    }
    return true
  }
};

smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100);