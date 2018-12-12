sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("metallo.PrintQR.controller.QRCode", {
		onInit: function() {
			
			//Parameters voor QR code
			var sReceiptnumber = "461735";
			var sGVL = "636537";
			var sIL = "1000111";
			
			//URL voor QR code generatie (google)
			var sQRurl = "http://chart.apis.google.com/chart?cht=qr&chs=250x250&chl=sReceiptnumber:" + sReceiptnumber + "/sGVL:" +
				sGVL + "/sIL:" + sIL + "";
			this._qrulr = sQRurl;
			this.byId("qrImageId").setSrc(sQRurl);
		},
		
		onButtonPress: function() {
			
            var Spliturl = this._qrulr;
		    var split = Spliturl.slice(0, 169);
		    var Parameters = Spliturl.split("chl=");
		    var values = Parameters[1];
		    var Fianlvalues = values.split("/");

			/* ------- URL converstion to base64_data ------*/
            var convertImgToDataURLviaCanvas = function(url, callback) {
            	
		        var img = new Image();
		               img.crossOrigin = 'Anonymous';
		               img.onload = function() {
	        
	            var canvas = document.createElement('CANVAS');
				var ctx = canvas.getContext('2d');
				var dataURL;
				canvas.height = this.height;
				canvas.width = this.width;
				ctx.drawImage(this, 0, 0);
				dataURL = canvas.toDataURL();
				callback(dataURL);
				canvas = null;
			
			};
			
			img.src = url;
			
		};

convertImgToDataURLviaCanvas(split, function(base64_data) {
		console.log(base64_data);
		var sometext1 = "QRCode and it's Veriables";
		var sometext = Fianlvalues;
		var pdf = new jsPDF();

		pdf.addImage(base64_data, 'JPEG', 2, 90, 70, 70);
		pdf.text(70, 10, sometext1);
		pdf.text(5, 30, sometext);

		pdf.save('Test.pdf');
			});

		}
	});
});