(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['packager-with-angular-test'] = global['packager-with-angular-test'] || {}, global['packager-with-angular-test'].modules = global['packager-with-angular-test'].modules || {}, global['packager-with-angular-test'].modules.second = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

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
    { type: core.Injectable },
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
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [],
                providers: [
                    SecondService
                ]
            },] },
];
/** @nocollapse */
SecondModule.ctorParameters = function () { return []; };

exports.SecondModule = SecondModule;
exports.SecondService = SecondService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=packager-with-angular-test-modules-second.umd.js.map
