//OOPS
    // class Car{
    //     wheel=4
    //     color="red"
    //     fuel="petrol"

    //     startEngin(){
    //         console.log("engin started"+this.fuel1);
    //     }
    //     stopEngin(){
    //         console.log("engin stoped");
    //     }
    // }
    // alto=new Car()
    // console.log(alto.fuel);
    // alto.startEngin()
    
//1.CONSTRUCTOR
    // class Car{
    //     constructor(fuel){
    //         this.fuel=fuel
    //     }

    // }
    // startEngin()
    // {
    //     console.log("engin started"+this.fuel);
    // }
    // stopEngin()
    // {
    //     console.log("engin stoped");
    // }
    // alto=new Car("disel")
    // alto.startEngin()

//2.INHERITANCE

    // class Father{
    //     farmer(){
    //         console.log("he is a farmer");
    //     }
    //     ThikHair(){
    //         console.log("he have thik hair");
    //     }
    // }
    // class Child extends Father{
    //     engineer(){
    //         console.log("he is a engineer");
    //     }
    // }
    // let manu=new Child();
    // manu.engineer()
    // manu.ThikHair()
    // manu.farmer()

//CONSTRUCTOR USING IN INHERITANCE
    // class Father{
    //     constructor(name){
    //         this.name=name

    //     }
    //     farmer(){
    //         console.log("he is a farmer")
    //     }
    //     ThikHair(){
    //         console.log("he have thik hair");
    //     }
    // }

    // class Child extends Father{
    //     constructor(name,age){
    //         super(name)
    //     this.age=age

    //     }
    //     engineer(){
    //         console.log("he is a engineer" +this.name+this.age);
    //     }
    // }
    // let manu =new Child("alan",20);
    // manu.engineer()
    // manu.farmer()

//MULTILEVEL INHERITANCE
    // class GFather{
    //     farmer(){
    //         console.log("he is a farmer");
    //     }
    // }
    // class Father extends GFather{
    //     driver(){
    //         console.log("he is a driver")
    //     }
    // }
    // class Child extends Father{
    //     engineer(){
    //         console.log("he is a engineer");
    //     }
    // }
    // ob=new Child()
    // ob.farmer()
    // ob.driver()
    // ob.engineer()

//hyrachialinheritanace

    // class Father{
    //     farmer(){
    //         console.log("he is a farmer");
    //     }
    //     thikhair(){
    //         console.log("he have thik hair");
    //     }
    //     driving(){
    //         console.log("he driving in vechicles");
    //     }
    //     calm(){
    //         console.log("he was very calm personality");
    //     }

    // }
    // class Boy extends Father{
    // constructor(farmer,driving,thikhair){
    //     this.farmer=farmer
    //     this.driving=driving
    //     this.thikhair=thikhair
    // }
    // engineer(){
    //     console.log("he is a engineer");
    // }
    // }
    // class Girl extends Father{
    // constructor(thikhair,calm){
    //     this.calm=calm
    //     this.thikhair=thikhair
    // }
    // teacher(){
    //     console.log("she is a teacher");
    // }
    // }
    // ob=new Boy()
    // ob.engineer
    // let manu=new Boy(farmer,driving,thikhair)
    // let anu=new Girl(calm,thikhair)
    // manu.engineer()
    // anu.teacher()

//task1 for inheritance vechicle
    // class Vechicle{
    //     constructor(make,model){
    //         this.make=make;
    //         this.model=model;
    //     }
    //     startengin(){
    //         console.log("engin started");
    //     }
    // }
    // class Car extends Vechicle{
    //     constructor(make,model,doors){
    //         super(make,model);
    //         this.doors=doors;
    //     }
    //     honkHorn(){
    //         console.log("beep beep");
    //     }
    // }
    // const myCar=new Car("toyta","bens")
    // myCar.startengin();
    // myCar.honkHorn();

//TASK2 INHERITANCE STUDENT

    // class Person{
    //     constructor(name){
    //         this.name=name
    //     }
    //     introduce(){
    //         console.log(`hello my name is ${this.name}`);
    //     }
    // }
    // class Student extends Person{
    //     constructor(name,subject){
    //         super(name);
    //         this.subject=subject
    //     }
    //     study(){
    //         console.log(`i am studying ${this.subject}`);
    //     }
    // }
    // const student=new Student("alan","physics")
    // student.introduce();
    // student.study();

//TASK3 INHERITANCE EMPLOYEE
    // class Employee{
    //     constructor(name,position){
    //         this.name=name
    //         this.position=position
    //     }
    //     describe(){
    //         console.log(`i am ${this.name} and i working in ${this.position}`);
    //     }
    // }
    // class Mange extends Employee{
    //     constructor(name,position,department){
    //         super(name,position)
    //         this.department=department
    //     }
    //     describe(){
    //         super.describe();
    //         console.log(`i manage the ${this.department}`);
    //     }
    // }
    // const manage=new Manage("alan","manager","sale")
    // manage.describe()


//3.ENCAPSULATION
    // class Bank{
    //     constructor(balance,deposit,withdrow){
    //         this._balance=balance
    //         this._deposit=deposit
    //         this._withdrow=withdrow
    //     }
    //     checkbalance(){
    //         return`my balance ${this._balance}`;
    //     }
    //     dep(){
    //         return`my deposit ${this._deposit}`;
    //     }
    //     wid(){
    //         return `i am withdrowed in ${this._withdrow}`
    //     }
    //     getbalance(currentbalance){
    //         return currentbalance-this._withdrow
    //     }
    // }
    // const myBank=new Bank("0","5000","1000")
    // console.log(myBank.checkbalance());
    // console.log(myBank.dep());
    // console.log(myBank.wid());
    // console.log(myBank.getbalance(5000));