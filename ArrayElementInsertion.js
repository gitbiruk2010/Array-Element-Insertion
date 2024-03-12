/*Imagine I have a list of colors, but I want to 
add more to the beginning and end.*/
const colors = ['red', 'green', 'blue'];

/*With spread syntax, I can easily insert 
'yellow' at the start and 'purple' at the end.*/

const extendedColors = ['yellow', ...colors, 'purple'];

// Let's see my new, expanded list of colors.
// This shows my colors array with the new additions.
console.log(extendedColors); 
