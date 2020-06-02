var emp = /** @class */ (function () {
    function emp(ty, pr) {
        this.sal = pr;
        this.name = ty;
    }
    emp.prototype.disp = function () {
        console.log(this.sal);
    };
    return emp;
}());
var xyz = new emp("rahul", 100);
console.log(xyz.name);
xyz.disp();
