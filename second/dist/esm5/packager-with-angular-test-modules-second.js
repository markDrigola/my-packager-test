import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SecondService = /** @class */ (function () {
    function SecondService() {
        this.countNumber = 0;
        console.log('Im second service');
    }
    /**
     * @return {?}
     */
    SecondService.prototype.startTimer = function () {
        this.countNumber = this.countNumber + 1;
        return this.countNumber;
    };
    return SecondService;
}());
SecondService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SecondService.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SecondModule = /** @class */ (function () {
    function SecondModule() {
    }
    return SecondModule;
}());
SecondModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [],
                providers: [
                    SecondService
                ]
            },] },
];
/** @nocollapse */
SecondModule.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */
export { SecondModule, SecondService };
//# sourceMappingURL=packager-with-angular-test-modules-second.js.map
