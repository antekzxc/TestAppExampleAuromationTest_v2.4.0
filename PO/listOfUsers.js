var listOfUsers = function(){

    //search for used elements in the "List of users" section
    this.editButton = $('#edit');
    this.lastEditButton = $$('#edit').last();
    this.removeButton = $('#remove');
    this.lastRemoveButton = $$('#remove').last();
    this.lastUserName = element.all(by.css('[data-ng-bind="u.userName"]')).last();

};
module.exports = new listOfUsers();