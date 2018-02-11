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
  
}
