var userRegistrationForm = function(){

    //search for used elements in the "User Registration Form" section
    this.nameField = $('#uname');
    this.addressField = $('#address');
    this.emailField = $('#email');
    this.addButton = $('[value="Add"]');
    this.updateButton = $('[value="Update"]');
    this.resetFormButton = $('#reset');

    //unique combinations of class attribute values to define field properties
    this.greenNameFieldClass = ('ng-valid-required') && ('ng-valid-minlength');
    this.yellowNameFieldClass = ('ng-invalid-minlength');
    this.redNameFieldClass = ('ng-dirty') && ('ng-invalid-required');
    this.filledAddressFieldClass = ('ng-dirty');
    this.greenEmailFieldClass = ('ng-valid-required') && ('ng-valid-email');
    this.yellowEmailFieldClass = ('ng-invalid-email');
    this.emptyFieldClass = ('ng-pristine');

};
module.exports = new userRegistrationForm();