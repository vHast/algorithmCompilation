/* In order to save data in a file for later or to send it to another computer, you have to convert these tangles of memory adresses to a description that can be stored or sent

This means we need to serialize the data, that means convert into a flat description.

JSON (JavaScript Object NOtation) looks similar to JS way of writing arrays and objects, with a few restrictions

  ~ All property names have to be surrounded by double quotes
  
  ~ Only one simple data expressions are allowed, no function calls, bindings, or anything that involves actual computation
  
  ~ Comments are not allowed in JSON
  
*/

// A JSON data journal entry should look like this

let journalEntry = {
  "squirrel" : false,
  "events": ["work", "touched tree", "pizza", "running"]
}

// Javascript gives us two functions JSON.stringify and JSON.aprse toc onvert data to and from this format

// JSON.stringify takes a value and returns a JSON-encoded string

let string = JSON.stringify({squirrel: false, events: ["weekend"]});

console.log(string); // {"squirrel": false, "events":["weekend"]} undefined

console.log(JSON.parse(string).events); // ["weekend"]