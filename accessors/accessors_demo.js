class BankAccount {
    constructor(accountHolder) {
        this._balance = 0;
        this._accountHolder = accountHolder; 
    }

    get balance() {
        return this._balance;
    }

    set balance(amount) {
        if (amount < 0) {
            throw new Error('Balance cannot be negative!');
        }

        this._balance = amount;
    }

    get accountHolder() {
        return this._accountHolder;
    }
}


const account = new BankAccount('John Doe');

account.balance = 1000;

console.log(account.balance);
console.log(account.accountHolder);

try{
    account.balance =-100;
}catch(error){
    console.log(error.message);
}