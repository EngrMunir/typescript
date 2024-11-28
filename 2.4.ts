{
    // generic with interface

    interface Developer<T> {
        name: string;
        computer:{
            brand: string;
            model: string;
            releaseYear: number
        }
        smartWatch: T
    }

    type EmilabWatch ={
        brand: string;
        model: string;
        display: string;
    }

    const poorDeveloper : Developer<EmilabWatch> ={
        name:'munir',
        computer:{
            brand:'hp',
            model:'x-335R',
            releaseYear: 2023
        },
        smartWatch:{
            brand:'Emailab',
            model:'kw6',
            display:'oled'
        }
    }

    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean
    }
    const richDeveloper : Developer<AppleWatch> ={
        name:'shivlo',
        computer:{
            brand:'hp',
            model:'x-335R',
            releaseYear: 2023
        },
        smartWatch:{
            brand:'Apple',
            model:'something',
            heartTrack:true
        }
    }
}