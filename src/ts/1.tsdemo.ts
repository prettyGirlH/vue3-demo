// type MyType = string | number;  // 联合类型
// const myType: MyType='我是字符串';
// type IsFlag = Boolean;
// const isFlag: IsFlag=true;
// let s: string = "1";

// let h: Object = {};
// let i: Array<number> = [1,2,3];
// let j: Function = function() {};

type Gender = 'man' | "woman"


// 联合类型
type Person = {
    name: string;
    age: number;
    info: {
        gender: Gender;
    };
}

type Pig = {
    name: string;
    age: number;
    hobby: {
        eat: Boolean
    };
}

type Animal = Person & Pig;
const animal: Animal = {
    name:'Tom',
    age: 18,
    info: {
        gender: 'man'
    },
    hobby: {
        eat: true
    }

}
console.log(animal)

