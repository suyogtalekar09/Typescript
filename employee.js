var Employee = /** @class */ (function () {
    function Employee() {
        this.emp = [[101, "Sam"], [102, "Ram"], [103, "Ravi"]];
    }
    Employee.prototype.Employee = function () {
        debugger;
        var e1 = new Employee();
        e1.getEmployees();
    };
    Employee.prototype.getEmployees = function () {
        for (var i = 0; i < this.emp.length; i++) {
            for (var j = 0; j < this.emp[i].length; j++) {
                console.log(this.emp[i][j]);
            }
        }
    };
    Employee.prototype.getEmployeeById = function (id) {
        for (var i = 0; i < this.emp.length; i++) {
            for (var j = 0; j < this.emp[i].length; j++) {
                if (this.emp[i][0] == id) {
                    console.log(this.emp[i][j]);
                }
            }
        }
    };
    Employee.prototype.addEmployee = function (empAdd) {
        this.emp.push(empAdd);
        console.warn(this.emp);
    };
    Employee.prototype.deleteEmployee = function (id) {
        for (var i = 0; i < this.emp.length; i++) {
            for (var j = 0; j < this.emp[i].length; j++) {
                if (this.emp[i][0] == id) {
                    console.log("Deleted Record : " + this.emp[i][j]);
                    this.emp.splice(i, 1);
                }
            }
        }
    };
    return Employee;
}());
var c = new Employee();
console.warn("Get all Employees");
c.getEmployees();
console.log("Employee by Id");
c.getEmployeeById(101);
console.warn("Add Employee");
c.addEmployee([105, "shree"]);
console.warn("Delete Employee");
c.deleteEmployee(102);
console.warn("New Employee : " + c.getEmployees());
