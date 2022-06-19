var numarr:Array<number>=[]
var strarr:Array<string>=[]
var obarr:Array<object>=[]

numarr.push(1)
numarr.push(2)
numarr.push(3)
console.log(numarr)

strarr.push("biju")
strarr.push("niju")
strarr.push("sarath")
console.log(strarr)

let commentData:any = {}
commentData.id = 3;
commentData.name = 'something';
obarr.push(commentData);

commentData.id = 4;
commentData.name = 'something else';
obarr.push(commentData);

commentData.id = 5;
commentData.name = 'something else 2';
obarr.push(commentData);


console.log(obarr)