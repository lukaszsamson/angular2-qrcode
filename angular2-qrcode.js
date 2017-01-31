"use strict";
var core_1 = require('@angular/core');
var qrcode = require("qrcode-generator");
var QRCodeComponent = (function () {
    function QRCodeComponent(elementRef) {
        this.elementRef = elementRef;
        this.data = '';
        this.size = 128;
        this.type = 4;
        this.level = 'M';
    }
    QRCodeComponent.prototype.ngOnChanges = function (changes) {
        if ('data' in changes) {
            this.generate();
        }
    };
    QRCodeComponent.prototype.generate = function () {
        try {
            var qr = qrcode(this.type, this.level);
            qr.addData(this.data);
            qr.make();
            var imgTagString = qr.createImgTag(this.type, 0);
            var el = this.elementRef.nativeElement;
            el.innerHTML = imgTagString;
            var imgTagObject = el.firstElementChild;
            imgTagObject.width = this.size;
            imgTagObject.height = this.size;
        }
        catch (e) {
            console.error("Could not generate QR Code: " + e.message);
        }
    };
    QRCodeComponent.decorators = [
        { type: core_1.Component, args: [{
                    moduleId: 'module.id',
                    selector: 'qr-code',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    QRCodeComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    QRCodeComponent.propDecorators = {
        'data': [{ type: core_1.Input },],
        'size': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input },],
        'level': [{ type: core_1.Input },],
    };
    return QRCodeComponent;
}());
exports.QRCodeComponent = QRCodeComponent;
var QRCodeModule = (function () {
    function QRCodeModule() {
    }
    QRCodeModule.decorators = [
        { type: core_1.NgModule, args: [{
                    exports: [QRCodeComponent],
                    declarations: [QRCodeComponent],
                    entryComponents: [QRCodeComponent]
                },] },
    ];
    /** @nocollapse */
    QRCodeModule.ctorParameters = function () { return []; };
    return QRCodeModule;
}());
exports.QRCodeModule = QRCodeModule;
//# sourceMappingURL=angular2-qrcode.js.map