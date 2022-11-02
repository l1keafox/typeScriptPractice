console.log('hellow world 21');
// number
// string - 
// boolean

function add(n1:number,n2:number):number{
    console.log(typeof n1);
    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        throw new Error('incorrect input');
    }
    return n1+n2;
}

const number1 = "5";
const number2 = 2.89;

const result = add(number1,number2);
console.log(result);