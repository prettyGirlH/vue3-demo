// 类型保护，类型判断，通过类型判断来确定类型

type Value = string | number;
let value: Value = 123;
// value.toFixed();  报错  可能是string


// 在使用之前就知道类型，我们可以使用类型保护
// 
function isString(value: Value): value is string{
    return typeof value === 'string';
}
const flag = isString(value);
console.log('isString',flag)

function isNumber (value:Value): value is number{
    return typeof value === 'number';
}

const isFlag = isNumber(value);
console.log("isNumber",isFlag)