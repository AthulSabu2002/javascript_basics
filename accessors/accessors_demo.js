// BankAccount class demonstrates getter and setter implementation
class BankAccount {
    constructor(accountHolder) {
        // Initialize private fields with underscores
        this._balance = 0;
        this._accountHolder = accountHolder; 
    }

    // Getter method to access balance
    get balance() {
        return this._balance;
    }

    // Setter method with validation for balance
    set balance(amount) {
        if (amount < 0) {
            throw new Error('Balance cannot be negative!');
        }

        this._balance = amount;
    }

    // Getter method for account holder (read-only)
    get accountHolder() {
        return this._accountHolder;
    }
}

// Usage example
const account = new BankAccount('John Doe');

// Set balance using the setter
account.balance = 1000;

// Access properties using getters
console.log(account.balance);       // Displays: 1000
console.log(account.accountHolder); // Displays: John Doe

// Example of setter validation
try{
    account.balance = -100;  // This will throw an error
}catch(error){
    console.log(error.message);  // Displays: Balance cannot be negative!
}