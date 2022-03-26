function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let dnaArr = dna.split('');
  let RNAregex = /t/i;
  for ( let i = 0; i < dna.length; i++) {
    if (RNAregex.test(dnaArr[i])) {
      dnaArr[i] = 'U';
    }
  }
  console.log(dnaArr);
  let product = dnaArr.join('');
  console.log(product);
  return product;
};

//Refactored code with regex

function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}

//Refactored with arrow function

const DNAtoRNA = dna => dna.replace(/T/g, 'U');