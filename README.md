# Overview
NetSuite RESTlet framework. User defines the models and methods, the framework handles the REST. 
 
# Installation
Place the out javascript files in the SuiteScripts folder of your NetSuite account.

Deploy the restlet.js file as a SS2.0 RESTlet.

It is recommended that modifications are made using TypeScript. 

# Usage
The framework responds to two parameters, which can be passed either on the query URL or post body:
- model: Which record we want to interact with.
- method: What we want to do with this record.

Usually we would refine a record type for each model, but abstract types can be built. 
For example a "store purchase" abstract could upsert a customer, and create a sales order for it. 

## Calling the API

**Calling and endpoint:**
```text
Example:
REQUEST: /app/site/hosting/restlet.nl?script=888&deploy=1&model=customer&method=view
RESPONSE: [{"response":true}]

```

**No model set:**
```text
Example:
REQUEST: /app/site/hosting/restlet.nl?script=888&deploy=1
RESPONSE: [{"models":["customer"]}]
```

**No method set:**
```text
Example:
REQUEST: /app/site/hosting/restlet.nl?script=888&deploy=1&model=customer
RESPONSE: [{"methods":["list","view"]}]
```

# Configuration

In order to work with the framework, we'll need to build a model and controller entry for each record type (or abstract)
 we want to interact with. This is an example for the customer record.

## Models (models.ts)
```typescript
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
```
In the models file we build a model Class for the Customer, and define it's methods. Each method read/writes to the record, and returns 
an object array with the desired response data.
 
## Methods (controller.ts)
```typescript
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
```
In the controller file we set actions for each HTTP method, 
and declare all url/body name/methods under the QueryLoader constructor. 
Please note the extensions and implementations, these are required on Typescript.

# License
GNU GPL see LICENSE.

**Use at your own discretion. Test before using in production.**

# Author
Felipe Chang <felipechang@hardcake.org> @mr_pepian