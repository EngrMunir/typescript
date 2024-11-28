{
    // generic constraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike"|"car"|"ship"  //manually

    type Owner2 = keyof Vehicle

    const person1:Owner ="car"
    const person2:Owner2 ="bike"

    const getPropertyByValue=<x ,y extends keyof x>(obj:x, key : y)=>{
        return obj[key];
    }

    const user ={
        name:'Mr munir',
        age:26,
        address:'ctg'
    }


    const result1 =getPropertyByValue(user,'name')
    
    user['name']  // munir

}