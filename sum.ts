function sum(A:number,B:number,C?:number){
    if(C!=undefined){
        return(A+B+C)
    }
    else{
        return(A+B)
    }
}

var result=sum(1,2)
var result1=sum(1,2,3)

console.log(result)
console.log(result1)