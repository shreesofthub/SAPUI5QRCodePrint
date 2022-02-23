sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function (oController) {
        return oController.extend("qrcode.controller.view1", {
            onInit: function () {
                var data = {
                    "id": "PR - 101",
                    "name": "Product test name",
                    "desc": "Product test description",
                    "compDet": [{
                        "compName": "Test Company1",
                        "compCode": "CMP1"
                    }, {
                        "compName": "Test Company2",
                        "compCode": "CMP2"
                    }, {
                        "compName": "Test Company3",
                        "compCode": "CMP3"
                    }, {
                        "compName": "Test Company4",
                        "compCode": "CMP4"
                    }, {
                        "compName": "Test Company5",
                        "compCode": "CMP5"
                    }]
                };
                var oModel = new sap.ui.model.json.JSONModel(data);
                this.byId("idSF").setModel(oModel);
            },
            generateQRCode: function () {
                var oSFContent = this.byId("idSF").getContent();
                var array = [];
                var allString = "";
                // Google Chart API....
                var baseURL = "http://chart.apis.google.com/chart?cht=qr&chs=250x250&chl=";
                array.push({
                    key: "Product-ID",
                    value: oSFContent[1].getValue()
                });
                array.push({
                    key: "Product-Name",
                    value: oSFContent[3].getValue()
                });
                array.push({
                    key: "Product-Description",
                    value: this.byId("idTa1").getValue()
                });
                array.push({
                    key: "Company Name",
                    value: this.byId("idSel")._getSelectedItemText()
                });
                allString = escape(JSON.stringify(array));
                var url = baseURL + allString;
                this.byId("idImg").setSrc(url);
            },
            clearQRCode: function () {
                this.byId("idImg").setSrc("");
            }
        });
    }
);