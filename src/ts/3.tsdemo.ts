// 三目运算符，确定条件类型
// 关键字：extends
// 1。继承；2约束泛型；3条件类型
// class Person {}

// class Student extends Person {}
function say<T extends { id: string }>(a: T): T{
    return a;
}
say({id:"1"});

// 条件类型
type IsString<T> = T extends string ? true : false;
const isString: IsString<1> = false;
console.log(isString)

