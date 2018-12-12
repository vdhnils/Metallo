/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"metallo/PrintQR/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"metallo/PrintQR/test/integration/pages/QRCode",
	"metallo/PrintQR/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "metallo.PrintQR.view.",
		autoWait: true
	});
});