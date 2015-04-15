var BankAccount = {
    balance: 0,
    withdraw: function(amount) {
        this.balance -= amount;
    },
    deposit: function(amount) {
      this.balance += amount;
    }
};



$(document).ready(function() {
    $("form#bank-account").submit(function(event) {
        event.preventDefault();

        var inputtedDeposit = parseInt($("input#deposit").val());
        var inputtedWithdrawal = parseInt($("input#withdrawal").val());




        //$("ul#deposit")
    })
})
