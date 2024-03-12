# Array-Element-Insertion
![image](https://github.com/gitbiruk2010/Array-Element-Insertion/assets/103274295/b52599cc-1f72-4613-9a28-dda93de04477)

## Overview
This example showcases how to expand an existing array by adding new elements to both the beginning and the end of it using JavaScript's spread syntax.

## Original Colors Array
Starting with a basic array of color strings:

const colors = ['red', 'green', 'blue'];
This colors array contains three elements representing some primary colors.
Expanding the Array

To extend this array, I'll add 'yellow' to the beginning and 'purple' to the end. This is done using the spread syntax:

const extendedColors = ['yellow', ...colors, 'purple'];

Here, the spread syntax (...) is used to include the original colors array within the new extendedColors array, while also adding new elements around it.
Output
Printing the extendedColors array will display the updated list of colors:

console.log(extendedColors);

When executed, this line will show the following output: ['yellow', 'red', 'green', 'blue', 'purple'], demonstrating the original array now extended with additional color elements at both ends.
