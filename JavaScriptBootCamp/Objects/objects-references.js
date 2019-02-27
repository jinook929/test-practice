let myAccount = {
    name: 'Jinook Jung',
    expenses: 0,
    income: 0
}

let addExpenses = function (account, amount) {
    return account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
    return account.income = account.income + amount
}

let accountSummary = function (account) {
    return `The balance of ${account.name}'s account is $${account.income - myAccount.expenses}. $${myAccount.income} in income & $${myAccount.expenses} in expenses.`
}

let resetAccount = function (account) {
    account.expenses = 0,
    account.income = 0
}

console.log(myAccount)
addIncome(myAccount, 2000)
console.log(myAccount)
addExpenses(myAccount, 50)
console.log(myAccount)
addExpenses(myAccount, 175)
console.log(myAccount)
console.log(accountSummary(myAccount))
resetAccount (myAccount)
console.log(accountSummary(myAccount))