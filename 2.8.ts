{
    // promise


    const createPromise =(): Promise<boolean>=>{
        return new Promise<boolean>((resolve, reject)=>{
            const data: string ="something";
            if(data){
                resolve(data)
            }else{
                reject('failed to load data')
            }
        })
    }


    // calling create promise function
    const showData = async(): Promise<boolean>=>{
        const data: boolean =await createPromise()
        console.log(data)
        return data
    }

    showData()
    // 
}