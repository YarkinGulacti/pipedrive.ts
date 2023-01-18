# A Typescript Pipedrive package.

This is a RESTful Client project, that is written in Typescript, for [Pipedrive CRM](https://www.pipedrive.com/).

> Aim and Scope of project

For early phases of this project, **only** some operations will be included to the project. In the future there is a possibility of adding all operations defined in [Open API specification of Pipedrive](https://developers.pipedrive.com/docs/api/v1/openapi.yaml).

# Getting Started

To get started, you need to install [Node.js](https://nodejs.org). This installation will come with `npm` tool that can be used to install [packages](https://www.npmjs.com) to your projects. Enough said, let's install and include the project.

## Installation

```bash
npm install --save pipedrive.ts
```

or

```bash
yarn add pipedrive.ts
```

## Adding to your project

> `require` statement

```javascript
const { ... } = require("pipedrive.ts");
```

> `import` statement

```javascript
import { ... } from "pipedrive.ts";
```

`...` represents package exports. A clear example is `PipedriveClient`. You can find more about package exports down below.

# Operations

As stated above, initial scope of this project is to implement some operations of Pipedrive. _This list will be updated in the future when adding new operations_. Implemented operations are;

-   [Get all deals](https://developers.pipedrive.com/docs/api/v1/Deals#getDeals)

## Using operations

Before getting started with operations, we will declare a piece of code that will be used in all operations for the sake of [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) principle.

> Reused piece of code(with `import` statement)

```javascript
import { PipedriveClient } from "pipedrive.ts";

const client = new PipedriveClient("Your Pipedrive API token goes here.");
```

### [Get all deals](https://developers.pipedrive.com/docs/api/v1/Deals#getDeals)

```javascript
const deals = await client.GetAllDeals();
```

note that this operation needs to be used in an [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).

Alternatively, we can do something like this;

```javascript
const promise = client.GetAllDeals();

promise
    .then((deals) => {
        //Use deals object for your case.
    })
    .catch((error) => {
        //Throw the operation error.
        throw error;
    });
```

> `client.GetAllDeals` method takes couple of parameters;

| name           | description                                                                                                                                                                  | type                                                 | optional |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | -------- |
| `user_id`      | If supplied, only deals matching the given user will be returned. However, `filter_id` and `owned_by_you` takes precedence over `user_id` when supplied.                     | `number`                                             | `true`   |
| `filter_id`    | The ID of the filter to use.                                                                                                                                                 | `number`                                             | `true`   |
| `stage_id`     | If supplied, only deals within the given stage will be returned.                                                                                                             | `number`                                             | `true`   |
| `status`       | Only fetch deals with a specific status. If omitted, all not deleted deals are returned. If set to deleted, deals that have been deleted up to 30 days ago will be included. | `open`, `won`, `lost`, `deleted` , `all_not_deleted` | `true`   |
| `start`        | Pagination start.                                                                                                                                                            | `number`                                             | `true`   |
| `limit`        | Items shown per page.                                                                                                                                                        | `number`                                             | `true`   |
| `sort`         | The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys).                 | `string`                                             | `true`   |
| `owned_by_you` | When supplied, only deals owned by you are returned. However, `filter_id` takes precedence over `owned_by_you` when both are supplied.                                       | `0`, `1`                                             | `true`   |

> `client.GetAllDeals` method returns;

| name              | description                           | type      | may not be present |
| ----------------- | ------------------------------------- | --------- | ------------------ |
| `success`         | If the response is successful or not. | `boolean` | `true`             |
| `data`            | The array of deals.                   | `array`   | `true`             |
| `additional_data` | The additional data of the list.      | `object`  | `true`             |
| `related_objects` | Related data of the call              | `object`  | `true`             |

[`data`](https://github.com/YarkinGulacti/pipedrive.ts/blob/master/src/lib/types/interface/Deal.interface.ts), [`additional_data`](https://github.com/YarkinGulacti/pipedrive.ts/blob/master/src/lib/types/response/GetAllDeals.response.ts) and [`related_objects`](https://github.com/YarkinGulacti/pipedrive.ts/blob/master/src/lib/types/response/GetAllDeals.response.ts) types can be found in their links.
