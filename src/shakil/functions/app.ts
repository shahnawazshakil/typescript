function myFunction(a:number,b:number):number{
    return a + b;
}

let sum = (myFunction(3,2));
console.log("sum is: " + sum);

let myFunctionType: (a:number,b:number) => number;

myFunctionType = function(a:number,b:number){
    return a + b;
}

let myFuncWithOptionalParameter: (a:number, b:number, c?:number) => number;
myFuncWithOptionalParameter = function(a:number, b:number, c?:number){
    if(c != undefined){
        return a + b + c;
    }else{
        return a + b;
    }
}