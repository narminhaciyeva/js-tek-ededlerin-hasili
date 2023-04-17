function SumOfEvenNumbers(arr){
    var multi=1;
    for(let i=0; i<arr.length; i++){
        if(arr [i]%2==1){
            multi*=arr[i];
        }
    }
    return multi;
}
var array=[12,34,46,68,27,89,100];
var sumOfEvens= SumOfEvenNumbers(array);

console.log(sumOfEvens);