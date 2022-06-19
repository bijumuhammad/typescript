var arr:Array<number>=[1,2,3,4,5,6,1,12,45,5,234,234,2312,3123,5,25,234,4234,23423,124,23,235,25,234,234,234,234,24,5,35,64,7,58,7,86,8,67,56,75,645,64,4,64]
var evearr:Array<number>=[]
var oddarr:Array<number>=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        evearr.push(arr[i])
     }else{
         oddarr.push(arr[i])
     }

}
console.log(evearr)
console.log(oddarr)