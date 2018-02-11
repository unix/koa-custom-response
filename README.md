### koa-custom-response
standard and convenient custom responses.
focus on simplifying your code logic, reduce your controller. you just need a line of code to return the standard data and status code.

#### Usage

- install: `npm i --save koa-custom-response`

- import and load:

  ```typescript
  import * as CustomResponse from 'koa-custom-response'
  // or: const CustomResponse = require('koa-custom-response')

  // const app = new Koa()
  app.use(CustomResponse())
  ```

- use it in your controller:

  ```typescript
  async MyController(ctx) => {
    ctx.ok()
  }

  async MyController(ctx) => {
    ctx.badRequest()
  }

  async MyController(ctx) => {
    try {
      // ...
      ctx.ok({ hello: hello })
    } catch (e) { ctx.catch(e) }
  }
  ```

### API

| Method (ctx.{method_name}) | params | action |
| -------  | -----   | ---- |
| ok          | data: object or string      | set http status to 200, return json (default: `{}`) |
| created     | data: object or string      | set http status to 201, return json (default: `{}`) |
| noContent   | no params                    | set http status to 204, return null                 |
| serverError | data: object or string      | set http status to 500, return json (default: `{}`) |
| notFound    | data: object or string      | set http status to 404, return json (default: `{}`) |
| forbidden   | data: object or string      | set http status to 403, return json (default: `{}`) |
| badRequest  | data: object or string      | set http status to 400, return json (default: `{}`) |
| catch       | err: Error, data: object or string      | set http status to 501, return error |

if the parameter is a string, will return `{ message: str }`, like:

server: `ctx.notFound('not found anything')`

client response: `{ message: 'not found anything' }`

### Examples

