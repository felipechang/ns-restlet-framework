/**
 * NetSuite RESTlet framework - Controller.
 *
 * @author Felipe Chang <felipechang@hardcake.org>
 *
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 */

import {ControllerClass, QueryLoader} from "./lib/classes";
import {ControllerInterface} from "./lib/interfaces";
import * as Model from "./models";

/**
 * Customer Controller
 */
export class Customer extends ControllerClass implements ControllerInterface {

    GET() {

        //Get models
        const model = new Model.Customer(this.params);

        //Bind to methods by name
        const query = new QueryLoader({
            "list": model.list,
            "view": model.view
        });

        //Run query
        return query.run(this.method);
    }

    PUT() {

        //Get models
        const model = new Model.Customer(this.params);

        //Bind to methods by name
        const query = new QueryLoader({
            "update": model.update
        });

        //Run query
        return query.run(this.method);
    }

    POST() {

        //Get models
        const model = new Model.Customer(this.params);

        //Bind to methods by name
        const query = new QueryLoader({
            "create": model.create
        });

        //Run query
        return query.run(this.method);
    }

    DELETE() {

        //Get models
        const model = new Model.Customer(this.params);

        //Bind to methods by name
        const query = new QueryLoader({
            "remove": model.remove
        });

        //Run query
        return query.run(this.method);
    }
}