function sum(){
    let result = 0 ;
    for (let arg of arguments){
        result+=arg ;
    }
    return result ;
}
console.log (sum(1, 2, 3, 4))