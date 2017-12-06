/**
 * NetSuite RESTlet framework - Additional Interfaces.
 *
 * @author Felipe Chang <felipechang@hardcake.org>
 *
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 */

/**
 * Controller method definition interface
 */
export interface ControllerInterface {

    GET(): object[];

    POST(): object[];

    PUT(): object[];

    DELETE(): object[];
}