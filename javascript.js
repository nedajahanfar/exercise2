//first question

 let array1=[1,2,3,4];
 let array2=[1,3];
 
 function filterArray(array1,array2){ 
  let newArray =[];
 for(let i = 0 ; i < array1.length ; i++){
  let found = false;
  for(let j = 0 ; j < array2.length;j++){
    if(array1[i] === array2[j]){
      found = true;
      break;
    }
  }
   if(!found){
    newArray.push(array1[i]);
   }
 }
 return newArray;
};

console.log(filterArray(array1,array2));


let filtered = array1.filter(num => !array2.includes(num));
console.log(filtered);

//2nd question

 let array3 = [4,1,3,2];

 function bubbleSort(array){
  for(let j = 0 ; j < array.length; j++){
  for(let i = 0 ; i < array.length-1-j ; i++){
      if(array[i] > array[i+1]){
        let temp = array[i+1];
        array[i+1] = array[i];
        array[i] = temp;
      }
  }}
  return array;
 }

 console.log(bubbleSort(array3));

 let sortedArray = array3.sort((a , b) => a-b);

 //3rd question

 let string = "hello world";

 function capitalizer(sentence){
   return sentence.split(" ").map
   (word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");
 }

 console.log(capitalizer(string));

 //4th question
 function intersection(array1,array2){ 
  let newArray2 = [];
  for(let i = 0 ; i < array1.length; i++){
    for(let j = 0 ; j < array2.length ; j++){
      if(array1[i] === array2[j]){
        newArray2.push(array1[i]);
        break;
      }
    }
  }
  return newArray2;
}

console.log(intersection(array1,array2));

let newArray3 = [];
newArray3 = array1.filter(num => array2.includes(num) && !newArray3.includes(num));

console.log(newArray3);

//5th question

 let number = 7;
 

 function primeChecker(number){ 
  let isPrime = true;
  if(number < 2){
    return isPrime = false;
  }else if(number === 2){
    return true;
  }

 for(let i = 2 ; i < Math.sqrt(number) ; i++){
  if(number % i === 0){
    isPrime = false;
    break;
  }
 };
 return isPrime;
}


console.log(primeChecker(5));


//6th question 

 array4 = [1,2,3,4,5];

 function oddArray(array){ 

 let newArray4 = array.filter(num => !(num % 2 === 0 ));
 return newArray4;
 
}
 console.log(oddArray(array4));

//7th question

let people = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 20 }];

function ageSorter(object){
 for(let j = 0 ; j < object.length;j++)
  for(let i = 0; i < object.length-1-j ;i++){
   if(object[i].age > object[i+1].age){
     let temp = object[i];
     object[i] = object[i+1];
     object[i+1] = temp;
   }
  }
  return object;
}

console.log(ageSorter(people));

//8th question
 let string2 = "(()())"

 function balancedParentheses(string){
  let openingP = 0 ;
  let closingP = 0;

  for(let i = 0 ; i < string.length ; i++){
    if(string[i] === "("){
      openingP++;
    }else if(string[i] === ")"){
      closingP++;
    }
  }

  if(closingP === openingP){
    return true;
  }else{
    return false;
  }
 }

 console.log(balancedParentheses(string2));
 
 

//9th question
let sentence2 = "The great dastan of the city";
 
function longest(sen){
 sen = sen.split(" ");

 longestWord = sen[0];

 for(let i = 1 ; i < sen.length ; i++){
  if (sen[i].length > longestWord.length){
    longestWord = sen[i];
  }
 }
  return longestWord;
}

console.log(longest(sentence2));

//10th question

function fibonacci(limit){
 let fib = [0,1];
  if(limit < 1) {
    return [];
  }else if(limit === 1){
    return [0];
  }
  else if(limit == 2){
    return fib;
  }
  else{
    for(let i = 2; i < limit ; i++){
      fib.push(fib[i-1] + fib[i-2]);
    }
  return fib;
}
}

console.log(fibonacci(5));

//11th question
 
 let numbers =  [1, 2, 2, 3, 4, 4];


 function numCounter(array){
  let uniqueArray = [];
  for(let i = 0 ; i < array.length ; i ++){
    if(!uniqueArray.includes(array[i])){
      uniqueArray.push(array[i]);
    }
  }
 
  return uniqueArray.length;

  }

  console.log(numCounter(numbers));


  
 