{
    // getter and setter

    class BankAccount{
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id:number, name:string, balance: number){
            this.id = id;
            this.name= name;
            this._balance = balance;
        }

        set deposit(amount:number){
            this._balance = this._balance + amount;
        }

        // public addDeposit(amount: number){
        //     this._balance = this._balance+amount
        // }

        // getter
        get balance(){
            return this._balance;
        }
        // public getBalance(){
        //     return this._balance;
        // }
    }

    class StudentAccount extends BankAccount{

    }

    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
    // goribManusherAccount.addDeposit(6009); //function call kerte hosse
    // const myBalance = goribManusherAccount.getBalance(); //function call krte hosse
    const myBalance = goribManusherAccount.balance; //property er moto kore
    goribManusherAccount.deposit =50;
    console.log(myBalance)
}