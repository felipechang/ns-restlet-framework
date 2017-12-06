/**
 * NetSuite RESTlet framework - Additional Classes.
 *
 * @author Felipe Chang <felipechang@hardcake.org>
 *
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 */
define(["require", "exports"], function (require, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Parent controller class
     */
    var ControllerClass = (function () {
        /**
         * @Constructor
         * @param {Object} params
         * @param {string} method
         */
        function ControllerClass(params, method) {
            this.params = params;
            this.method = method;
        }
        return ControllerClass;
    }());
    exports.ControllerClass = ControllerClass;
    /**
     * Parent model class
     */
    var ModelClass = (function () {
        /**
         * @Constructor
         * @param {Object} params
         */
        function ModelClass(params) {
            this.params = params;
        }
        return ModelClass;
    }());
    exports.ModelClass = ModelClass;
    /**
     * Validate and run query
     */
    var QueryLoader = (function () {
        /**
         * @Constructor
         * @param {Object} list
         */
        function QueryLoader(list) {
            this.list = list;
        }
        QueryLoader.prototype.run = function (method) {
            //Return all available methods
            if (!method) {
                var arr = [];
                for (var i in this.list) {
                    if (this.list.hasOwnProperty(i)) {
                        arr.push(i);
                    }
                }
                return [{ methods: arr }];
            }
            //Method is not on available list
            if (!this.list[method]) {
                return [{
                        error: true,
                        message: "method not available"
                    }];
            }
            //Execute method or return error
            return this.list[method]();
        };
        return QueryLoader;
    }());
    exports.QueryLoader = QueryLoader;
});
