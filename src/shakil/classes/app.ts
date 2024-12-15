
class Person{
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn:string,firstName:string,lastName:string){
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName():string {
        return '${this.firstName}${this.lastName}';
    }
}

let person = new Person("121","shahnawaz","shakil");
console.log(person.getFullName());

class PersonWithShortFormConstructor{
    constructor(
    protected ssn: string,
    private firstName: string,
    private lastName: string
) {}

    getFullName(): string{
        return '${this.firstName}${this.lastName}';
    }
}

let personWithShortFormConstructor = new PersonWithShortFormConstructor("122","shahnawaz1","shakil1");

console.log(personWithShortFormConstructor);

class PersonWithGetterAndSetter{
    private _ssn:string;
    private _firstName:string;
    private _lastName:string;
    constructor(ssn:string,firstName:string,lastName:string){
        this._ssn = ssn;
        this._firstName = firstName;
        this._lastName = lastName;
    }
    public get ssn(){
        return this._ssn
    }
}

class ExtendedPerson extends PersonWithGetterAndSetter{
    constructor(
        firstName:string,
        ssn:string,
        lastName:string,
        private jobTitle:string){
        super(ssn,firstName,lastName);
    }
}

let extendedPerson = new ExtendedPerson("harry","111","potter","scientist");
console.log("ssn is " + extendedPerson.ssn);
