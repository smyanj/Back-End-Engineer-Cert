let input = 'How waes your day?';

let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for(let i = 0; i < input.length; i++){
  //console.log(i)
  if(input[i] == 'e'){
    resultArray.push(input[i])
  }
  if(input[i] == 'u'){
    resultArray.push(input[i])
  }
  for(let j = 0; j < vowels.length; j++){
    //console.log(j)
    if(input[i] == vowels[j]){
      //console.log(vowels[j])
      resultArray.push(vowels[j])
    }
  }
}
//console.log(resultArray)
let resultsString = resultArray.join("")
console.log(resultsString.toUpperCase())