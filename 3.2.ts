{
    // oop -inheritance
    class Parent{
        name: string;
        age: number;
        address: string;

        constructor(name:string, age:number, address:string){
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numberOfHours: number){
            console.log(`${this.name} will sleep for ${numberOfHours}`)
        }
    }

    class Student extends Parent {
    
        constructor(name:string, age:number, address:string){
            super(name, age, address)
        }

        getSleep(numberOfHours: number){
            console.log(`${this.name} will sleep for ${numberOfHours}`)
        }
    }

    const student1 = new Student("munir",34,'uganda')

    class Teacher extends Parent {
        
        designation: string;

        constructor(name:string, age:number, address:string, designation:string){
            super(name, age,address)
            this.designation = designation;
        }

        getSleep(numberOfHours: number){
            console.log(`${this.name} will sleep for ${numberOfHours}`);
        }
        takeClass(numberOfClass: number){
            console.log(`${this.name} will sleep for ${numberOfClass}`);
        }
    }

    const teacher = new Student("Mr student", 20, "uganda", "professor");
    // 
}