import { book } from "./book";
export class library{
    private books:book[];
    private adress:string;
    private manager:string;
    constructor(books:book[],adress:string,manager:string){
        this.books=books;
        this.adress=adress;
        this.manager=manager;
    }
    getadress(){
        console.log(this.adress);
        
    }
    getmanager(){
        console.log(this.manager);
        
    }
    setadress(adress:string){
        this.adress=adress;
    }
    setmanager(manager:string){
        this.manager=manager;
    }
    tostring():string{
        let a:book;
        let numero:number=1;
        let devolver1:string="";
        for(a of this.books){
           devolver1+=("BooK"+numero+"\n"+a.tostring()+"\n");
           numero++;
           }
        return devolver1;
    }
    getnumberofbooks():number{
        return this.books.length;
    }
    findbyauthor(author:string):book[]{
        let devolver:book[]=[];
        let a:book;
        for(a of this.books){
            
            if(a.getauthor()==author){
               
                
                devolver.push(a);
            }
            

        }
        return devolver;
    }
}