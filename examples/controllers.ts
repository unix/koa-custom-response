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
}
