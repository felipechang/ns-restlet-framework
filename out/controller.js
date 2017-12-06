/**
 * NetSuite RESTlet framework - Controller.
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
define(["require", "exports", "./lib/classes", "./models"], function (require, exports, classes_1, Model) {
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Customer Controller
     */
    var Customer = (function (_super) {
        __extends(Customer, _super);
        function Customer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Customer.prototype.GET = function () {
            //Get models
            var model = new Model.Customer(this.params);
            //Bind to methods by name
            var query = new classes_1.QueryLoader({
                "list": model.list,
                "view": model.view
            });
            //Run query
            return query.run(this.method);
        };
        Customer.prototype.PUT = function () {
            //Get models
            var model = new Model.Customer(this.params);
            //Bind to methods by name
            var query = new classes_1.QueryLoader({
                "update": model.update
            });
            //Run query
            return query.run(this.method);
        };
        Customer.prototype.POST = function () {
            //Get models
            var model = new Model.Customer(this.params);
            //Bind to methods by name
            var query = new classes_1.QueryLoader({
                "create": model.create
            });
            //Run query
            return query.run(this.method);
        };
        Customer.prototype.DELETE = function () {
            //Get models
            var model = new Model.Customer(this.params);
            //Bind to methods by name
            var query = new classes_1.QueryLoader({
                "remove": model.remove
            });
            //Run query
            return query.run(this.method);
        };
        return Customer;
    }(classes_1.ControllerClass));
    exports.Customer = Customer;
});
