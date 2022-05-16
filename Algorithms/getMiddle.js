function getMiddle(s)
{
  let value = s.length / 2;
  if ( s.length % 2 == 0) {
    return s.slice(value - 1, value + 1);
  } else {
    return s.slice(value, value + 1 );
  }
};

// Refactored code

const getRefactoredMiddle = (s) => {
  let value = s.length / 2; // We get the index number of the middle character
  return s.length % 2 ? s.slice(value -1, value +1 ) : s.slice(value, value +1)
}

/* We proceed to s.slice the string of our interest and then, in order to select the interested characters, we substract 1 to value, and then add +1 to the other slice argument, that way we will get the characters that we are interested in 

Using ternary operators will manage to refactor this code */