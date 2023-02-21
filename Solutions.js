Solution-
//[5,78,23,41,67,84,22,10,1]
console.log("Minimum value is :",Math.min(5,78,23,41,67,84,22,10,1))
console.log("Maximum value is :",Math.max(5,78,23,41,67,84,22,10,1))
const arr=[5,78,23,41,67,84,22,10,1]
const mean=function (arr){
//Find the sum
var sum = 0;
for(var i in arr) {
sum += arr[i];
}
//Get the length of the array
var numbersCnt = arr.length;
//Return the average / mean.
return (sum / numbersCnt);
}
console.log("Mean of the values: ",mean(arr))
console.log("Ceil value of mean is : " , Math.ceil(mean(arr)))
