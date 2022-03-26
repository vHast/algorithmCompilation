const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  //We initialize an array that will be filled
  const teaCups = [];
  //On the next loop we set the number of cups as limit, so we can push the teas ('greenTea'/'blackTea')there
  for (let cups = 1; cups <= numOfCups; cups += 1) {
    //We specify first which of the two teas we want with the first argument
    const teaCup = prepareTea();
    //And finally we push the tea to the teaCups array, we will do this as much times as numOfCups states
    teaCups.push(teaCup);
  }
  //We return the array of teas
  return teaCups;
};

const tea4GreenTeam = getTea(prepareGreenTea, 4); // Result : [greenTea,greenTea,greenTea,greenTea]
const tea4BlackTeam = getTea(prepareBlackTea, 2); // Result : [blackTea,blackTea,]