function combine(input1:number | string , input2:number | string, typeOfResult:string){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}


const cominedAges = combine(30,20, 'as-number');
console.log(cominedAges);
const cominedAges2 = combine("Max","Anna", 'as-text');
