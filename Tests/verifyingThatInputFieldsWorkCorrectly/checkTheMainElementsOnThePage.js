describe('C1 Verify that the main elements are present on the page', function () {

    let userRegistrationForm = require('../../PO/userRegistrationForm');
    let listOfUsers = require('../../PO/listOfUsers');

    it('1. Check the input field "Name"', function () {

        //The input field "Name" is present on the page
        expect(userRegistrationForm.nameField.isPresent()).toBe(true);
    });

    it('2. Check the input field "Address"', function () {

        //The input field "Address" is present on the page
        expect(userRegistrationForm.addressField.isPresent()).toBe(true);
    });

    it('3. Check the input field "Email"', function () {

        //The input field "Email" is present on the page
        expect(userRegistrationForm.emailField.isPresent()).toBe(true);
    });

    it('4. Check the button "Add"', function () {

        //The button "Add" is present on the page
        expect(userRegistrationForm.addButton.isPresent()).toBe(true);
    });

    it('5. Check the button "Reset form"', function () {

        //The button "Reset form" is present on the page
        expect(userRegistrationForm.resetFormButton.isPresent()).toBe(true);
    });

    it('6. Check the button "Edit"', function () {

        //The button "Edit" is present on the page
        expect(listOfUsers.editButton.isPresent()).toBe(true);
    });

    it('7. Check the button "Remove"', function () {

        //The button "Remove" is present on the page
        expect(listOfUsers.removeButton.isPresent()).toBe(true);
    });

});