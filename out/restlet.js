/**
 * NetSuite RESTlet framework - RESTlet.
 *
 * @author Felipe Chang <felipechang@hardcake.org>
 *
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType RESTlet
 */
define(["require", "exports", "./controller", "./lib/lib", "N/log"], function (require, exports, Controllers, lib_1, log) {
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Validate model and deal with errors
     * @param {Object} request - Request object
     * @return {string}
     */
    function validate(request) {
        //Response container
        var res = { error: false, message: "" };
        //Get request parameters
        var params = request.requestParams;
        //Uppercase HTTP method
        var http = request.httpMethod ? request.httpMethod.toUpperCase() : "";
        //HTTP Method must be defined
        if (!http) {
            return lib_1.error("script error: httpMethod not defined");
        }
        //HTTP Params must be defined
        if (!params) {
            return lib_1.error("script error: requestParams not defined");
        }
        //Get and remove model
        var model = lib_1.proper(params.model);
        delete params.model;
        //Get and remove method
        var method = params.method;
        delete params.method;
        //Query parameter model is not found
        if (!model) {
            var models = [];
            //Return all model options
            for (var i in Controllers) {
                if (Controllers.hasOwnProperty(i)) {
                    models.push(i.toLowerCase());
                }
            }
            return JSON.stringify([{ models: models }]);
        }
        //Model is not found among controllers
        if (!Controllers[model]) {
            return lib_1.error("invalid model name");
        }
        //Build controller
        var controller = new Controllers[model](params, method);
        //HTTP method is not defined in controller
        if (!controller[http]) {
            return lib_1.error("invalid model httpMethod");
        }
        //Get response
        try {
            res = controller[http]();
        }
        catch (e) {
            log.error("e", e);
            return lib_1.error(e.message || e);
        }
        //Send error if no response
        if (!res) {
            return lib_1.error("method not retuning data");
        }
        //Return response as text
        return JSON.stringify(res);
    }
    /**
     * get event handler
     * @param {EntryPoints.RESTlet.get} ctx - The parameters from the HTTP request URL as key-value pairs
     * @return {string} Returns a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     */
    function get(ctx) {
        return validate({
            requestParams: ctx,
            httpMethod: "get"
        });
    }
    exports.get = get;
    /**
     * post event handler
     * @param {EntryPoints.RESTlet.post} ctx - Request body is a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     * @return {string} Returns a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     */
    function post(ctx) {
        return validate({
            requestParams: ctx,
            httpMethod: "post"
        });
    }
    exports.post = post;
    /**
     * put event handler
     * @param {EntryPoints.RESTlet.put} ctx - Request body is a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     * @return {string} Returns a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     */
    function put(ctx) {
        return validate({
            requestParams: ctx,
            httpMethod: "put"
        });
    }
    exports.put = put;
    /**
     * delete event handler
     * @param {EntryPoints.RESTlet.delete_} ctx - The parameters from the HTTP request URL as key-value pairs
     * @return {string} Returns a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     */
    function del(ctx) {
        return validate({
            requestParams: ctx,
            httpMethod: "delete"
        });
    }
    exports.delete = del;
});
