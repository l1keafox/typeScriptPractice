function add(n1:number,n2:number, showResult:boolean){
    // console.log(typeof n1);
    // if(typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error('incorrect input');
    // }
    if(printResult){
        console.log(n1+n2);
    } else {
            return n1+n2;
    }
}

const number1 = 5;
const number2 = 2.89;
const printResult = true;

add(number1,number2,printResult);
