// type Person = { name: string; age: number };
// 只需要关注name，不需要关注age

// 用已有类型派生新的类型 （要什么取什么Pick，不要什么丢什么Omit）

// type NamedPerson = Pick<Person, "name">;
// type NamedPerson = Omit<Person, "age">