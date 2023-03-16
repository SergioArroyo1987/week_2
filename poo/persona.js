class persona{
    constructor(nombre,apellido1,apellido2,anonacimiento){
        this.nombre=nombre;
        this.apellido1=apellido1;
        this.apellido2=apellido2;
        this.localidad="torredelcampo";
        this.yearOfBirth=2023-anonacimiento;
        this.hobbies=["leer","correr","pintar"];
        
    }
    //metodos
     imc(peso,altura){
        return peso/(altura*altura);
    }
    printall(a){
        for(let propiedad in a){
            console.log(propiedad+"-"+a[propiedad]);
        }
    }
    printhobbies(){
        console.log(this.hobbies);
    }
}
module.exports=persona;