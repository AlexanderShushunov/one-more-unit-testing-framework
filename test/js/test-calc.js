"use strict";

(function (Test, Asserts) {

	ScriptLoader.load("../src/calc.js", function () {
		Test.addSuite([
			twoPositiveIntShouldAddCorrect,
		], {
			"beforeCase": beforeCase,
			"afterCase": afterCase,
			"name": "calc test"
		})
	});

	function beforeCase() {
		this.calc = new Calc();
	}

	function twoPositiveIntShouldAddCorrect() {
		Asserts.assertEquals(this.calc.add(2, 2), 4, "strange addition");
	}

	function afterCase() {
		console.log("to something after each test");
	}

})(window.Test, window.Test.Asserts);