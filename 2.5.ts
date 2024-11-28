{
    // function with array

    const createArray = (param: string): string[]=>{
        return [param]
    }
    const createArrayWithGeneric = <T>(param: T): T[]=>{
        return [param]
    }

    const res1 = createArray('Bangladesh')
    const resGeneric = createArrayWithGeneric<string>('Bangladesh')
    type User ={ id:number; name:string}
    const resGenericObj = createArrayWithGeneric<User>({id:22, name:'munir'})

    const createArrayWithGenericTuple = <T,Q>(param1: T, param2:Q): [T,Q]=>{
        return [param1, param2]
    }

    const res2 = createArrayWithGenericTuple<string, number>('Bangladesh', 333)
    const res34 = createArrayWithGenericTuple<string, {name:string}>('Bangladesh',{name:'Asia'})
    

    const addCourseToStudent =<T>(student:T)=>{
        const course ="network security"

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name:'Mr X', email:'x@gmail.com', devType:'NLWD'})
    const student2 = addCourseToStudent({name:'Mr Y', email:'x@gmail.com', hasWatch:'apple'})
}