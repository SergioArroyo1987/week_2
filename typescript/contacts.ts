import { person } from "./persona";

export class contacts{
    people:person [];
    constructor(){
        this.people=[];
    }
    printcalendar(){
        let a:number=0;
        let imprimir:string;
        while(a<this.people.length){
        
            console.log(this.people[a]);
            
        
        a++;
    }
    }
}