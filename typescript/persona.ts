export class person{
    name:String;
    age:Number;
    private adress:String;
    constructor(name:String,age:Number,adress:String){
        this.name=name;
        this.age=age;
        this.adress=adress;
    }
    printname(){
        console.log(this.name);
    }
    yearofbirth(currenyear:number):Number{
        return 2023-currenyear;
    }
    setadress(adress:String){
        this.adress=adress;
    }
    getadress():String{
        return this.adress;
    }
}
