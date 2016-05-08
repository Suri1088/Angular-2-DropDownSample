System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var DropDownComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            DropDownComponent = (function () {
                function DropDownComponent() {
                    this.accounts = [
                        { "Accountid": 108861, "Accountcash": "123456" },
                        { "Accountid": 108862, "Accountcash": "234567" },
                        { "Accountid": 108863, "Accountcash": "345678" }
                    ];
                    this.selectedAccount = this.accounts[0];
                }
                DropDownComponent.prototype.onSelect = function (Accountid) {
                    this.selectedAccount = null;
                    for (var i = 0; i < this.accounts.length; i++) {
                        if (this.accounts[i].Accountid == Accountid) {
                            this.selectedAccount = this.accounts[i];
                        }
                    }
                };
                DropDownComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <select (change)=\"onSelect($event.target.value)\">\n      <option *ngFor=\"#account of accounts\" [value]=\"account.Accountid\">{{account.Accountid}}</option>\n    </select>  <div>Cash : {{selectedAccount.Accountcash}}</div>\n    ",
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DropDownComponent);
                return DropDownComponent;
            }());
            exports_1("DropDownComponent", DropDownComponent);
        }
    }
});
//# sourceMappingURL=app.js.map