function sum(A:number,B:number,C?:string){
   switch(C){
    case("+"):return(A+B)
    case("-"):return(A-B)
    case("*"):return(A*B)
    case("/"):if(B==0){

                return("Division by zero not possible ")
                }else{
                    return(A/B)
                }
    default:console.log("invalid input")
                break
}
}

var result1=sum(1,2,"-")
var result2=sum(2,2,"+")
var result3=sum(6,2,"*")
var result4=sum(1,2,"/")
var result5=sum(1,0,"/")

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)