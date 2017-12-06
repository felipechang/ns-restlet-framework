/**
 * NetSuite RESTlet framework - Library
 *
 * @author Felipe Chang <felipechang@hardcake.org>
 *
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 */
define(["require", "exports"], function (require, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Capitalise first letter
     * @param {string} str - string to be formatted
     * @returns {string}
     */
    var proper = function (str) {
        return str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";
    };
    exports.proper = proper;
    /**
     * String generator
     * @param {string} str - Error string
     * @return {string}
     */
    var error = function (str) {
        return JSON.stringify([{
                error: true,
                message: str || "Undefined error"
            }]);
    };
    exports.error = error;
});
