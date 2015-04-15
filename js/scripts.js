var BankAccount = {
    balance: 0,
    withdraw: function(amount) {
        this.balance -= amount;
    },
    deposit: function(amount) {
      this.balance += amount;
    }
};

var Person = {
  fullName: "",
  accountBalance: BankAccount.balance
};



$(document).ready(function() {
    $("form#make-account").submit(function(event) {
        event.preventDefault();

        var inputtedName = $("input#name").val();
        var inputtedFirstDeposit = parseInt($("input#first-deposit").val());

        var newBankAccount = Object.create(BankAccount);
        //newBankAccount.balance = inputtedFirstDeposit;


        var newPerson = Object.create(Person);
        newPerson.fullName = inputtedName;
        newPerson.accountBalance = inputtedFirstDeposit;


        $('#balance').show();
        $('.customer').text(newPerson.fullName);
        $('.bank-balance').text(newPerson.accountBalance);

        //$("ul#deposit")
    });

    // $("form#deposit-withdraw").submit(function(event) {
    //     event.preventDefault();
    //
    //     var inputtedDeposit = parseInt($("input#deposit").val());
    //     var inputtedWithdraw = parseInt($("input#withdraw").val());
    //
    //     var newBankAccount = Object.create(BankAccount);
    //     var newPerson = Object.create(Person);
    //     newBankAccount.balance = newPerson.accountBalance;
    //
    //     $('.balance').show();
    //     $('.bank-balance').text(newBankAccount.balance);
    //
    //
    // });
});
