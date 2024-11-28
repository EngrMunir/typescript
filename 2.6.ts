{
    // constraints

    const addCourseToStudent =<T extends {id:number; name: string; email:string}>(student:T)=>{
        const course ="network security"

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent<{
        id:number;
        name:string;
        email:string;
        devType: string
    }>({ 
        id:1, 
        name:'Mr X', 
        email:'x@gmail.com', 
        devType:'NLWD'
    })
    const student2 = addCourseToStudent({ 
        id:2, 
        name:'Mr Y', 
        email:'x@gmail.com', 
        hasWatch:'apple'
    })

}