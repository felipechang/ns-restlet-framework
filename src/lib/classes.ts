/**
 * NetSuite RESTlet framework - Additional Classes.
 *
 * @author Felipe Chang <felipechang@hardcake.org>
 *
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 */

/**
 * Parent controller class
 */
export class ControllerClass {

    protected method: string;
    protected params: object;

    /**
     * @Constructor
     * @param {Object} params
     * @param {string} method
     */
    constructor(params: object, method: string) {
        this.params = params;
        this.method = method;
    }
}

/**
 * Parent model class
 */
export class ModelClass {

    protected params: object;

    /**
     * @Constructor
     * @param {Object} params
     */
    constructor(params: object) {
        this.params = params;
    }
}

/**
 * Validate and run query
 */
export class QueryLoader {

    private list: object;

    run(method: string): object[] {

        //Return all available methods
        if (!method) {
            const arr = [];
            for (const i in this.list) {
                if (this.list.hasOwnProperty(i)) {
                    arr.push(i);
                }
            }
            return [{methods: arr}];
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
    }

    /**
     * @Constructor
     * @param {Object} list
     */
    constructor(list: object) {
        this.list = list;
    }
}