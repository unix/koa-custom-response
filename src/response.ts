import * as Koa from 'koa'
import { HTTP_CODE } from './code'

const makeDefaultResponse = (data: object | string = {}): object =>
  typeof data === 'string' ? { message: data } : data

const ok = (ctx: Koa.Context) => (data?: object | string): void => {
  ctx.status = HTTP_CODE.OK
  ctx.body = makeDefaultResponse(data)
}

const noContent = (ctx: Koa.Context) => (): void => {
  ctx.status = HTTP_CODE.NO_CONTENT
  ctx.body = null
}

const serverError = (ctx: Koa.Context) => (data?: object | string): void => {
  ctx.status = HTTP_CODE.SERVER_ERROR
  ctx.body = makeDefaultResponse(data)
}

const notFound = (ctx: Koa.Context) => (data?: object | string): void => {
  ctx.status = HTTP_CODE.NOT_FOUND
  ctx.body = makeDefaultResponse(data)
}

const forbidden = (ctx: Koa.Context) => (data?: object | string): void => {
  ctx.status = HTTP_CODE.FORBIDDEN
  ctx.body = makeDefaultResponse(data)
}

const badRequest = (ctx: Koa.Context) => (data?: object | string): void => {
  ctx.status = HTTP_CODE.BAD_REQUEST
  ctx.body = makeDefaultResponse(data)
}

const created = (ctx: Koa.Context) => (data?: object | string): void => {
  ctx.status = HTTP_CODE.CREATED
  ctx.body = makeDefaultResponse(data)
}

const catchFunc = (ctx: Koa.Context) => (err: any | Error = {}, data?: object | string): void => {
  const isErrorStack = typeof err === 'object' && err instanceof Error
  const error = isErrorStack ? {
    errors: {
      name: err.name || null, message: err.message || null,
    },
  } : { errors: String(err) }
  const extra = makeDefaultResponse(data)
  ctx.status = 501
  ctx.body = Object.assign({}, error, extra)
}

const reply = (ctx: Koa.Context) => (code: number, data?: object | string): void => {
  ctx.status = code
  ctx.body = makeDefaultResponse(data)
}

export const KoaCustomResponse = () => async(ctx: Koa.Context, next) => {
  ctx.ok = ok(ctx)
  ctx.noContent = noContent(ctx)
  ctx.serverError = serverError(ctx)
  ctx.notFound = notFound(ctx)
  ctx.forbidden = forbidden(ctx)
  ctx.badRequest = badRequest(ctx)
  ctx.created = created(ctx)
  ctx.catch = catchFunc(ctx)
  ctx.reply = reply(ctx)
  await next()
}

