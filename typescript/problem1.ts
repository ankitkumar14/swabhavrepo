

abstract class person{
    name:string
    constructor (name:string)
    {
        this.name=name;
    }
    display():void{
        console.log(this.name);
    }
}
class employee extends person{
    id:number;
    constructor(name:string,id:number){
        super(name);
        this.id=id;
        
    }
}
let emp=new employee("ram",1);
emp.display();