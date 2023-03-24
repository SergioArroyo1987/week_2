export class book{
    private title:string;
    private npages:number;
    private isbn:string;
    private author:string;
    private editorial:string;
    constructor(title:string,npages:number,isbn:string,author:string,editorial:string){
        this.title=title;
        this.npages=npages;
        this.isbn=isbn;
        this.author=author;
        this.editorial=editorial;
    }
    gettitle(){
        return this.title;
        
    }
    getnpages(){
        return this.npages;
        
    }
    gettisbn(){
        return this.isbn;
        
    }
    getauthor(){
        return this.author;
        
    }
    geteditorial(){
        return this.editorial;
        
    }
    settitle(title:string){
        this.title=title;
    }
    setnpages(npages:number){
        this.npages=npages;
    }
    setisbn(isbn:string){
        this.isbn=isbn;
    }
    setauthor(author:string){
        this.author=author;
    }
    seteditorial(editorial:string){
        this.editorial=editorial;
    }
    tostring():string{
        let devolver:string;
        devolver=
        (`Title- ${this.title}
         Numero de paginas- ${this.npages}
         ISBN- ${this.isbn}
         Author- ${this.author}
         Editorial- ${this.editorial}`);
        return devolver;
        
    }

}