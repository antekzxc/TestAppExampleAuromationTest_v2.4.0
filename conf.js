exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },

    // the test is divided into suites which contain test cases
    suites: {
        checkElementsAndCheckFieldsValidation: [
            './Tests/verifyingThatInputFieldsWorkCorrectly/checkTheMainElementsOnThePage.js',
            './Tests/verifyingThatInputFieldsWorkCorrectly/nameAndEmailFieldsValidation.js',
            './Tests/verifyingThatInputFieldsWorkCorrectly/checkResetFormFunctionality.js'],
        verifyingThatMainFunctionsWorksCorrectly: [
            './Tests/verifyingThatMainFunctionsWorksCorrectly/checkNewUserAddedCorrectly.js',
            './Tests/verifyingThatMainFunctionsWorksCorrectly/checkNewUserEditedCorrectly.js',
            './Tests/verifyingThatMainFunctionsWorksCorrectly/checkCancellationOfRemovalWorksCorrectly.js',
            './Tests/verifyingThatMainFunctionsWorksCorrectly/checkRemovalUserWorksCorrectly.js']
    },

    // framework for testing
    framework: 'jasmine2',

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    },

    //function called once protractor is ready and available, and before the specs are executed
    onPrepare: function () {

        browser.driver.manage().window().maximize(); //opening the browser to full screen
        browser.manage().timeouts().implicitlyWait(500); //set maximum time that we are going to wait for the element to be available in the Website
        browser.get('http://localhost:8080/TestAppExample/index'); //set starting page for our tests

        //Put results to allure-results directory
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

        //Adding screenshots to allure-results directory
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
    }
};