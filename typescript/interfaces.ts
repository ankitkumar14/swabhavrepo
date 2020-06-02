interface person{
    fname:string,
    sname:string,
    hello:()=>string
}
var stud:person={fname:"fgh",sname:"tyu",hello:()=>{return "hello"}
}
console.log(stud.hello());
console.log("welcome to ts");