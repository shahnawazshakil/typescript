let myNumber: number = 1;
console.log("e.g. of basic type number: " + myNumber);

let myString: string = "shakil";
console.log("e.g. of basic type string: " + myString);

let myBoolean: boolean = true;
console.log("e.g. of basic type boolean: " + myBoolean)

let myObject: object;
myObject = {
    firstName: "shahnawaz",
    lastName: "shakil",
    age: 16
}

console.log(myObject);

let myObjectWithExplicitTypes: {
    firstName: string;
    lastName: string;
    age: number;
}; 
myObjectWithExplicitTypes = {
    firstName: 'firstTest',
    lastName: 'lastTest',
    age: 20
};

console.log(myObjectWithExplicitTypes);

//emptyType
let emptyTypeObject: {} = {};
console.log(emptyTypeObject.toString());

let skills: string[] = [];
skills[0] = "math";
skills[1] = "science";
skills.push("music");

let tupleSkills: [string, boolean, number];
tupleSkills = ["shahnawaz", true, 5];
console.log(tupleSkills);

//Pending basicTypes: enum, anyType, unknownType, void, never, union, string literal, types aliases



