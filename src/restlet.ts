/**
 * NetSuite RESTlet framework - RESTlet.
 *
 * @author Felipe Chang <felipechang@hardcake.org>
 *
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType RESTlet
 */

import * as Controllers from "./controller";
import {EntryPoints} from "N/types";
import {proper, error} from "./lib/lib";
import * as log from "N/log";

/**
 * Validate model and deal with errors
 * @param {Object} request - Request object
 * @return {string}
 */
function validate(request: { httpMethod: string, requestParams: any }): string {

    //Response container
    let res = {error: false, message: ""};

    //Get request parameters
    const params = request.requestParams;

    //Uppercase HTTP method
    const http = request.httpMethod ? request.httpMethod.toUpperCase() : "";

    //HTTP Method must be defined
    if (!http) {
        return error("script error: httpMethod not defined");
    }

    //HTTP Params must be defined
    if (!params) {
        return error("script error: requestParams not defined");
    }

    //Get and remove model
    const model = proper(params.model);
    delete params.model;

    //Get and remove method
    const method = params.method;
    delete params.method;

    //Query parameter model is not found
    if (!model) {
        const models = [];

        //Return all model options
        for (const i in Controllers) {
            if (Controllers.hasOwnProperty(i)) {
                models.push(i.toLowerCase());
            }
        }
        return JSON.stringify([{models: models}]);
    }

    //Model is not found among controllers
    if (!Controllers[model]) {
        return error("invalid model name");
    }

    //Build controller
    const controller = new Controllers[model](params, method);

    //HTTP method is not defined in controller
    if (!controller[http]) {
        return error("invalid model httpMethod");
    }

    //Get response
    try {
        res = controller[http]();
    }
    catch (e) {
        log.error("e", e);
        return error(e.message || e);
    }

    //Send error if no response
    if (!res) {
        return error("method not retuning data");
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
function get(ctx: EntryPoints.RESTlet.get): string {
    return validate({
        requestParams: ctx,
        httpMethod: "get"
    });
}

/**
 * post event handler
 * @param {EntryPoints.RESTlet.post} ctx - Request body is a String when request "Content-Type" is "text/plain"
 * or an Object when request "Content-Type" is "application/json"
 * @return {string} Returns a String when request "Content-Type" is "text/plain"
 * or an Object when request "Content-Type" is "application/json"
 */
function post(ctx: EntryPoints.RESTlet.post): string {
    return validate({
        requestParams: ctx,
        httpMethod: "post"
    });
}

/**
 * put event handler
 * @param {EntryPoints.RESTlet.put} ctx - Request body is a String when request "Content-Type" is "text/plain"
 * or an Object when request "Content-Type" is "application/json"
 * @return {string} Returns a String when request "Content-Type" is "text/plain"
 * or an Object when request "Content-Type" is "application/json"
 */
function put(ctx: EntryPoints.RESTlet.put): string {
    return validate({
        requestParams: ctx,
        httpMethod: "put"
    });
}

/**
 * delete event handler
 * @param {EntryPoints.RESTlet.delete_} ctx - The parameters from the HTTP request URL as key-value pairs
 * @return {string} Returns a String when request "Content-Type" is "text/plain"
 * or an Object when request "Content-Type" is "application/json"
 */
function del(ctx: EntryPoints.RESTlet.delete_): string {
    return validate({
        requestParams: ctx,
        httpMethod: "delete"
    });
}

//Export HTTP methods
export {get};
export {post};
export {put};
export {del as delete};
