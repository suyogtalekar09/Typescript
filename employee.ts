class Employee {
    Employee() {
        debugger;
        var e1: any = new Employee();
        e1.getEmployees();
    }
    emp: any[][] = [[101, "Sam"], [102, "Ram"],[103, "Ravi"]];
    
    

    getEmployees(): any {
        for(var i = 0 ; i<this.emp.length; i++)
        {
            for(var j = 0; j<this.emp[i].length; j++)
            {
                console.log(this.emp[i][j]);
            }
        }
    }

    getEmployeeById(id: number): any {
        for(var i = 0 ; i<this.emp.length; i++)
        {
            for(var j = 0; j<this.emp[i].length; j++)
            {
                if(this.emp[i][0] == id)
                {
                    console.log(this.emp[i][j]);
                }
            }
        }
    }

    addEmployee(empAdd: any): any {
        this.emp.push(empAdd);
        console.warn(this.emp);
    }

    deleteEmployee(id: number)
    {
        for(var i = 0 ; i<this.emp.length; i++)
        {
            for(var j = 0; j<this.emp[i].length; j++)
            {
                if(this.emp[i][0] == id)
                {
                    console.log("Deleted Record : "+this.emp[i][j]);
                    this.emp.splice(i,1);
                }
            }
        }
    }
}

var c: any = new Employee();
console.warn("Get all Employees");
c.getEmployees();
console.log("Employee by Id");
c.getEmployeeById(101);
console.warn("Add Employee");
c.addEmployee([105,"shree"]);
console.warn("Delete Employee");
c.deleteEmployee(102);
console.warn("New Employee : "+  c.getEmployees());

