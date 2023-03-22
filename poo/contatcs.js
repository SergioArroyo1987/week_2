class contatcs{
    constructor(){
        this.arraypersonas=[];

    }
    //metodos
    introducir(persona){
        this.arraypersonas.push(persona);
    
    }
    printpersonas(a){
    
        for(let b=0;b<a.length;b++){
            for(let propiedad in a[b]){
                console.log(propiedad+"--"+a[b][propiedad]);
            }
        }
    }
}
module.exports=contatcs;