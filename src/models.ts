/**
 * NetSuite RESTlet framework - Model.
 *
 * @author Felipe Chang <felipechang@hardcake.org>
 *
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 */

import {ModelClass} from "./lib/classes";
import * as log from "N/log";

/**
 * Customer Model
 */
export class Customer extends ModelClass {

    public list(): object[] {

        log.debug("list", this.params);

        return [{response: true}];
    }

    public view(): object[] {

        log.debug("view", this.params);

        return [{response: true}];
    }

    public update(): object[] {

        log.debug("update", this.params);

        return [{response: true}];
    }

    public create(): object[] {

        log.debug("create", this.params);

        return [{response: true}];
    }

    public remove(): object[] {

        log.debug("remove", this.params);

        return [{response: true}];
    }
}