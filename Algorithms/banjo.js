/* This algorithm checks if the first character of name is either 'r' or 'R' then gets into an if statement to return either of the template literals */


function areYouPlayingBanjo(name) {
  let result = name.split('');
   return (result[0] === 'r' || result[0] === 'R' ? `${name} plays banjo` : `${name} does not play banjo`);
   }
