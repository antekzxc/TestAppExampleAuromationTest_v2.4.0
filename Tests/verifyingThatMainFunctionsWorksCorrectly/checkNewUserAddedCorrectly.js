describe('C4 Verify that the new user added correctly', function () {

    let userRegistrationForm = require('../../PO/userRegistrationForm');
    let listOfUsers = require('../../PO/listOfUsers');
    let dataFile = require('../../Fixtures/data.json');
    let validNameForCreationUser = dataFile["validNameForCreationUser"];
    let validAddressForCreationUser = dataFile["validAddressForCreationUser"];
    let validEmailForCreationUser = dataFile["validEmailForCreationUser"];

    it('1. Type any valid text in the "Name" field (for example "Anton")', function () {
        userRegistrationForm.nameField.sendKeys(validNameForCreationUser);

        //The "Name" field is filled with the valid text (change colour to green)
        expect(userRegistrationForm.nameField.getAttribute('class')).toContain(userRegistrationForm.greenNameFieldClass);
    });

    it('2. Type any text in the "Address" field (for example "home")', function () {
        userRegistrationForm.addressField.sendKeys(validAddressForCreationUser);

        //The "Address" field is filled with the text (change class to filled)
        expect(userRegistrationForm.addressField.getAttribute('class')).toContain(userRegistrationForm.filledAddressFieldClass);
    });

    it('3. Type any valid text in the "Email" field (for example "ant@mail.com")', function () {
        userRegistrationForm.emailField.sendKeys(validEmailForCreationUser);

        //The "Email" field is filled with the valid text (change colour to green)
        expect(userRegistrationForm.emailField.getAttribute('class')).toContain(userRegistrationForm.greenEmailFieldClass)
    });

    it('4. Click "Add" button', function () {
        userRegistrationForm.addButton.click();

        //A new user is added in List of Users with the data that was entered in the User Registration Form.
        expect(listOfUsers.lastUserName.getText()).toBe(validNameForCreationUser) &&
        //and fields in User Registration Form become empty.
        expect(userRegistrationForm.nameField.getAttribute('class')).toContain(userRegistrationForm.emptyFieldClass) &&
        expect(userRegistrationForm.addressField.getAttribute('class')).toContain(userRegistrationForm.emptyFieldClass) &&
        expect(userRegistrationForm.emailField.getAttribute('class')).toContain(userRegistrationForm.emptyFieldClass);
    });


});