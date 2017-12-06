/**
 * NetSuite RESTlet framework - Library
 *
 * @author Felipe Chang <felipechang@hardcake.org>
 *
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 */

/**
 * Capitalise first letter
 * @param {string} str - string to be formatted
 * @returns {string}
 */
const proper = function (str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";
};

/**
 * String generator
 * @param {string} str - Error string
 * @return {string}
 */
const error = function (str) {
    return JSON.stringify([{
        error: true,
        message: str || "Undefined error"
    }]);
};


export {proper, error};