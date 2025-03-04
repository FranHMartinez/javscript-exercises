/** 
  * Task description: Write a method that splits an array into parts of determined size 
  * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]] 
  * Task complexity: 3 of 5 
  * @param {Array} array - An array of any elements 
  * @param {number} size - size of chunks 
  * @returns {Array} 
*/

const chunk = (array, size) => {

        let arraySplit = [];
        let arrayNuevo = [];

        if(array.length > size){
          for (let i=0; i <= array.length ; i = i+size){
              arrayNuevo = array.slice(0) ;
              arraySplit.push(arrayNuevo.slice(i, i + size)); 
          }       
        }else return array;
        return arraySplit;
}

 const data = [1, 2, 3, 4, 5, 6, 7];
 console.log(chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
 console.log(chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]
 