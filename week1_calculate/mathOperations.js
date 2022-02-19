// math operations were designed with some functions
// 4 arithmetic operations was done
// functions was exported 

const addition = (pnumber1,pnumber2)=>{
    return pnumber1 + pnumber2 ;
};
const subtraction = (pnumber1,pnumber2)=>{
    return pnumber1 - pnumber2 ;
};
const multiply = (pnumber1,pnumber2)=>{
    return pnumber1 * pnumber2 ;
};
const divide = (pnumber1,pnumber2)=>{
    return pnumber1 / pnumber2 ;
};

module.exports = {
    addition,
    subtraction,
    multiply,
    divide,
};