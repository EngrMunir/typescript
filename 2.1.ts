{
    // type assertion

    let anything : any;

    anything: "next level web development"
    anything = 222;

    const kgToGm = (value: string | number) =>{
        if( typeof value === 'string'){
            const convertedValue = parseFloat(value)

            return `The converted value ${convertedValue}`
        }
        if(typeof value === "number"){
            return value*1000
        }
    }

    const result1 = kgToGm(1000) as number
    const result2 = kgToGm("munir") as string

}