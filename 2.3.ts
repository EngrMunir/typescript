{
    // generic type 

    type GenericArray<T> = Array<T>

    // const rollNumbers : number[] =[3,2,5,8];
    const rollNumbers : GenericArray<number> =[3,2,5,8];

    // const mentors: string[] = ['m','x','n'];
    const mentors: GenericArray<string> = ['m','x','n'];

    // const boolArray : boolean[] = [true, false, true];
    const boolArray : GenericArray<boolean> = [true, false, true];

    const user : GenericArray<{name:string, age:number}>=[
        {
            name:'munir',
            age:200
        },
        {
            name:'sirajul',
            age:110
        }
    ]


    const add =(x:number, y:number) => x+y;

    add(20,30)

    //generic tuple

    type GenericTuple<x,y> =[x, y]
    const manush : GenericTuple<string, string> =['Mr x','Mr. y']; 

    const userWithId: GenericTuple<number,{name:string, email: string}> =[123, { name:'munir', email:'a@gmail.com'}]

}