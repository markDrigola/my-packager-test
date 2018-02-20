import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SecondService {
    constructor() {
        this.countNumber = 0;
        console.log('Im second service');
    }
    /**
     * @return {?}
     */
    startTimer() {
        this.countNumber = this.countNumber + 1;
        return this.countNumber;
    }
}
SecondService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SecondService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SecondModule {
}
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
SecondModule.ctorParameters = () => [];

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
