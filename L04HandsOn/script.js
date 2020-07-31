class Employee {
    constructor(name, salary, hireDate) {
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }

    getName() {
        console.log(this.name.toUpperCase());
    }
    getSalary() {
        console.log(this.salary);
    }
    getHireDate() {
        console.log(this.hireDate);
    }
}

class Manager extends Employee {
    constructor(name, salary, hireDate, descriptionOfJob) {
        super(name, salary, hireDate);
        this.descriptionOfJob = descriptionOfJob;
    }

    jobDescription() {
        console.log(this.name + " was hired on " + this.hireDate + " and is making " + this.salary + " because " + this.descriptionOfJob);
    }
}

class Designer extends Employee {
    constructor(name, salary, hireDate, experience) {
        super(name, salary, hireDate);
        this.experience = experience;
    }
    
    yearsExperience() {
        console.log(this.name + " was hired on " + this.hireDate + " and is making " + this.salary + " because " + this.experience);
    }
}

class SalesAssociate extends Employee {
    constructor(name, salary, hireDate, degrees) {
        super(name, salary, hireDate);
        this.degrees = degrees;
    }
    
    degreeCompleted() {
        console.log(this.name + " was hired on " + this.hireDate + " and is making " + this.salary + " because " + this.degrees);
    }
}

let _Manager = new Manager("Jeff Bezos", 186000, "July 1995", "he is CEO of Amazon");
_Manager.jobDescription();

let _Designer = new Designer("Giorgio Armani", 64000, "July 1975", "he has done 43 years in the fashion industry");
_Designer.yearsExperience();

let _SalesAssociate = new SalesAssociate("Alex LaBeouf", 18000, "October 2015", "his college degree is in-progress");
_SalesAssociate.degreeCompleted();