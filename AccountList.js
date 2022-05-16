class Account {
    constructor (name,balance,) {
        this.name = name;
        this.balance = balance;
    }

    credit(credit){
        this.balance +=credit
    }
    describe(){
        return `owner ${this.name}, balance: ${this.balance}`
    }
}

let sean = new Account('Sean',0);
let brad = new Account('Brad',0);
let georges = new Account('Georges',0);


let accounts = [sean,brad,georges]
for (i of accounts){
    i.credit(1000)
    console.log(i.describe())
}
