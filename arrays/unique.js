/** 
  * Task description: Write a method that returns a duplicate-free array 
  * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3] 
  * Task Complexity: 2 of 5 
  * @param {Array<string | number>} array - Array of primitive data types 
  * @returns {Array} 
*/

var comp = 0;

const unique = (array) => {

    
  uniqueArray = array.filter((el, index) => {
       return array.indexOf(el) === index;
  }) 

  return uniqueArray;

}
 const data = [1, 2, 1, 2, 3, 3, 6, 7, 7, 6];
 console.log(unique(data)); // [1, 2, 3]