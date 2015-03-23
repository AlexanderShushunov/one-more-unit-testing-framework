"use strict";

window.Test = window.Test || {};
window.Test.Asserts = window.Test.Asserts || {};
(function (Asserts) {
    Asserts.assertNotUndefined = function (actual, msg) {
        if (typeof actual == "undefined") {
            throw new Error(msg);
        }
    };

    Asserts.assertEquals = function (expected, actual, msg) {
        if (expected != actual) {
            throw new Error(msg);
        }
    };

    Asserts.assertSameArray = function (expected, actual, msg, cmp) {
        cmp = cmp || stdCmp;
        if (!Array.isArray(expected) || !Array.isArray(actual)
                || expected.length != actual.length) {
            throw new Error(msg);
        }
        var theSame = true;
        expected.forEach(function (expElem) {
            theSame = theSame && actual.some((function () {
                return function (actElem) {
                    return cmp(actElem, expElem);
                }
            })(expElem));
        });
        if (!theSame) {
            throw new Error(msg);
        }
    };

    function stdCmp(first, second) {
        return first == second;
    }
})(window.Test.Asserts);