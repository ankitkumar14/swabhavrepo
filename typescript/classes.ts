class emp{
    name:string;
    sal:number;
    constructor(ty:string,pr:number){
        this.sal=pr;
        this.name=ty;
    }
    disp():void{
        console.log(this.sal);
    }
}
var xyz=new emp("rahul",100);
console.log(xyz.name);
xyz.disp();