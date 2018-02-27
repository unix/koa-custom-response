import * as Koa from 'koa'

export const ApiController = {
  
  async ok(ctx: Koa.Context): Promise<void> {
    const params = ctx.query
    ctx.ok(params)
  },
  
  async okWithMessage(ctx: Koa.Context): Promise<void> {
    const { message } = ctx.params
    ctx.ok(message)
  },
  
  async noContent(ctx: Koa.Context): Promise<void> {
    ctx.noContent()
  },
  
  async serverError(ctx: Koa.Context): Promise<void> {
    const params = ctx.query
    ctx.serverError(params)
  },
  
  async serverErrorWithMessage(ctx: Koa.Context): Promise<void> {
    const { message } = ctx.params
    ctx.serverError(message)
  },
  
  async notFound(ctx: Koa.Context): Promise<void> {
    const params = ctx.query
    ctx.notFound(params)
  },
  
  async notFoundWithMessage(ctx: Koa.Context): Promise<void> {
    const { message } = ctx.params
    ctx.notFound(message)
  },
  
  async forbidden(ctx: Koa.Context): Promise<void> {
    const params = ctx.query
    ctx.forbidden(params)
  },
  
  async forbiddenWithMessage(ctx: Koa.Context): Promise<void> {
    const { message } = ctx.params
    ctx.forbidden(message)
  },
  
  async badRequest(ctx: Koa.Context): Promise<void> {
    const params = ctx.query
    ctx.badRequest(params)
  },
  
  async badRequestWithMessage(ctx: Koa.Context): Promise<void> {
    const { message } = ctx.params
    ctx.badRequest(message)
  },
  
  async created(ctx: Koa.Context): Promise<void> {
    const params = ctx.query
    ctx.created(params)
  },
  
  async createdWithMessage(ctx: Koa.Context): Promise<void> {
    const { message } = ctx.params
    ctx.created(message)
  },
  
  async catch(ctx: Koa.Context): Promise<void> {
    const params = ctx.query
    try {
      const message: any = { b: 2 }
      console.log(message.a.b)
    } catch (e) {
      ctx.catch(e, params)
    }
  },
  
  async reply(ctx: Koa.Context): Promise<void> {
    ctx.reply(200, { code: 100 })
  },
  
  async replyWithMessage(ctx: Koa.Context): Promise<void> {
    const { message } = ctx.params
    ctx.reply(200, message)
  },
}
