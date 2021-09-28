const isOdd = function (num){
  return num%2 !== 0;
}

// console.log("3 is odd: " + isOdd(3));
// console.log("8 is odd: " + isOdd(8));






// const chooseStation = function (stations){
//   const goodStations = [];
//   for(let i = 0 ; i < stations.length ; i++){
//     if(stations[i][1] >= 20 && (stations[i][2] === 'school' || stations[i][2] === 'community centre')){
//       goodStations.push(stations[i][0]);
//     }
//   }
//   return goodStations;
// }


// const finalPosition = function(moves){
//   let startingX = 0;
//   let startingY = 0;
//   for(let i = 0; i < moves.length; i++){
//     if(moves[i] === 'north'){
//       startingY++;
//     }else if(moves[i] === 'south'){
//       startingY--;
//     }else if(moves[i] === 'west'){
//       startingX--;
//     }else{
//       startingX++
//     }  
//   };
//   return [startingX, startingY];
// }


// const ageCalculator = function(name, yearOfBirth, currentYear){
//   let age = currentYear - yearOfBirth;
//   return name + ' is ' + age + ' years old.'
// }


// const howManyHundreds = function(num){
//   return Math.floor(num / 100);
// }

// console.log(howManyHundreds(1000), "=?", 10);

// function calculateRectangleArea(length, width){
//   if(length >= 0 && width >= 0){
//     return length * width;
//   }
//   return undefined;
// }
// function calculateTriangleArea(base, height){
//   if(base >= 0 && height >= 0){
//     return base * (height / 2);
//   }
//   return undefined;
// }
// function calculateCircleArea(radius){
//   if(radius >= 0){
//     return Math.PI * (radius * radius);
//   }
//   return undefined;
// }