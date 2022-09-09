function combine(a:number|string,b:number|string){

    if(typeof a==='number' && typeof b==='number'){
        return a+b
    }else{
        return a.toString()+b.toString();
    }

}
console.warn(combine(10,20))
console.warn(combine("sujata ","singh"));