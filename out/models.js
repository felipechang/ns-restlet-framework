/**
 * NetSuite RESTlet framework - Model.
 *
 * @author Felipe Chang <felipechang@hardcake.org>
 *
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./lib/classes", "N/log"], function (require, exports, classes_1, log) {
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Customer Model
     */
    var Customer = (function (_super) {
        __extends(Customer, _super);
        function Customer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Customer.prototype.list = function () {
            log.debug("list", this.params);
            return [{ response: true }];
        };
        Customer.prototype.view = function () {
            log.debug("view", this.params);
            return [{ response: true }];
        };
        Customer.prototype.update = function () {
            log.debug("update", this.params);
            return [{ response: true }];
        };
        Customer.prototype.create = function () {
            log.debug("create", this.params);
            return [{ response: true }];
        };
        Customer.prototype.remove = function () {
            log.debug("remove", this.params);
            return [{ response: true }];
        };
        return Customer;
    }(classes_1.ModelClass));
    exports.Customer = Customer;
});
