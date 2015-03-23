"use strict";

(function (Namespace) {
	// constructor
	Namespace.Calc = function Calc() {
		if (!(this instanceof Calc)) {
			throw new Error("Calc is a constructor.");
		}
	};

	// public functions
	Namespace.Calc.prototype.add = function(first, second) {
		return first + second;
	};

})(window);