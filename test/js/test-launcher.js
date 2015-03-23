"use strict";

window.Test = window.Test || {};
(function (Test) {

    var testsSuites = [];

    window.onload = function () {
        ScriptLoader.load([
            'js/asserts.js',
            'js/test-calc.js',
        ], function () {
            runAllSuites();
        });
    };

    Test.addSuite = function (testCases, params) {
        params = params || {};
        testsSuites.push({
            "testCases": testCases,
            "beforeCase": params.beforeCase,
            "afterCase": params.afterCase,
            "name": params.name
        });
    };

    function runAllSuites() {
        var passedTestCount = 0;
        var successTestCallback = function () {
            passedTestCount++;
        };
        testsSuites.forEach(function (suite) {
            runSuite(suite, successTestCallback);
        });
        console.log("test passed - " + passedTestCount);
    }

    function runSuite(suite, successTestCallback) {
        var context = {};
        suite.testCases.forEach(function (testCase) {
            if (suite.beforeCase) {
                suite.beforeCase.call(context);
            }
            try {
                testCase.call(context);
            } catch (e) {
                console.log("test fail. "
                        + "suite - " + suite.name + "; "
                        + "test - " + testCase.name
                );
            }
            if (suite.afterCase) {
                suite.afterCase.call(context);
            }
            if (successTestCallback) {
                successTestCallback();
            }
        });
    }
})(window.Test);