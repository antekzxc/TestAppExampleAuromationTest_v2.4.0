describe('C5 Verify that the new user edited correctly', function () {

    let userRegistrationForm = require('../../PO/userRegistrationForm');
    let listOfUsers = require('../../PO/listOfUsers');
    let dataFile = require ('../../Fixtures/data.json');
    let validNameForUpdatingUser = dataFile["validNameForUpdatingUser"];

    it('1. Click on "edit" button of the last user of the list of users (with the name "Anton")', function () {
        listOfUsers.lastEditButton.click();

        //User name, address and email fields in User Registration Form filled with the valid text
        expect(userRegistrationForm.nameField.getAttribute('class')).toContain(userRegistrationForm.greenNameFieldClass) &&
        expect(userRegistrationForm.emailField.getAttribute('class')).toContain(userRegistrationForm.greenEmailFieldClass) &&
        //and appears "Update" button instead "add" button
        expect(userRegistrationForm.updateButton.isPresent()).toBe(true);
    });

    it('2. Clear user name field in the user registration form', function () {
        userRegistrationForm.nameField.clear();

        //User name field in the user registration form is empty (changes colour to red)
        expect(userRegistrationForm.nameField.getAttribute('class')).toContain(userRegistrationForm.redNameFieldClass)
    });

    it('3. Type another valid text in the "Name" field (for example "Klimuk")', function () {
        userRegistrationForm.nameField.sendKeys(validNameForUpdatingUser);

        //User name in User Registration Form is still filled with the valid text (changed to "Klimuk")
        expect(userRegistrationForm.nameField.getAttribute('class')).toContain(userRegistrationForm.greenNameFieldClass);
    });

    it('4. Click to "Update" button', function () {
        userRegistrationForm.updateButton.click();

        //A new user name is added in List of Users with the data that was entered in the User Registration Form
        expect(listOfUsers.lastUserName.getText()).toBe(validNameForUpdatingUser) &&
        //and fields in User Registration Form become empty.
        expect(userRegistrationForm.nameField.getAttribute('class')).toContain(userRegistrationForm.emptyFieldClass) &&
        expect(userRegistrationForm.addressField.getAttribute('class')).toContain(userRegistrationForm.emptyFieldClass) &&
        expect(userRegistrationForm.emailField.getAttribute('class')).toContain(userRegistrationForm.emptyFieldClass);
    });
});