// 只有在用的时候才知道类型，我们可以先用泛型定义

type Person <T>={
    name: string;
    age: number;
    info: T;
};


const person1: Person< { hobby: string[] }> = {
    name: '张三',
    age: 18,
    info: {
        hobby: ['eat','shop']
    }
}

console.log(person1)

type Person2 <T extends { hobby: string[] }> = {
    name: string;
    age: number;
    info: T;
}

const person2: Person2< { hobby: string[]; gender: string} > ={
    name: '张三',
    age: 18,
    info:{
        hobby: ['eat'],
        gender: 'man'
    }
}
console.log(person2)

type Person3 <T = { hobby: string[] }> = {
    name: string;
    age: number;
    info: T;
}

// 不新增，默认
// const person3: Person3 ={
//     name: "张三",
//     age: 18,
//     info: {
//         hobby: ["eat"]
//     }
// }

// 新增属性
const person3: Person3< { hobby: string[]; gender: string; } >={
    name: '张三',
    age: 18,
    info: {
        hobby: ['eat'],
        gender: 'man'
    }
}
console.log(person3)