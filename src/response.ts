import * as Koa from 'koa'
import { HTTP_CODE } from './code'

const makeDefaultResponse = (data: object | string = {}): object =>
  typeof data === 'string' ? { message: data } : data

const ok = (ctx: Koa.Context) => (data: object | string): void => {
  ctx.status = HTTP_CODE.OK
  ctx.body = makeDefaultResponse(data)
}

const noContent = (ctx: Koa.Context) => (): void => {
  ctx.status = HTTP_CODE.NO_CONTENT
  ctx.body = null
}

const serverError = (ctx: Koa.Context) => (data: object | string): void => {
  ctx.status = HTTP_CODE.SERVER_ERROR
  ctx.body = makeDefaultResponse(data)
}

const notFound = (ctx: Koa.Context) => (data: object | string): void => {
  ctx.status = HTTP_CODE.NOT_FOUND
  ctx.body = makeDefaultResponse(data)
}

const forbidden = (ctx: Koa.Context) => (data: object | string): void => {
  ctx.status = HTTP_CODE.FORBIDDEN
  ctx.body = makeDefaultResponse(data)
}

const badRequest = (ctx: Koa.Context) => (json = {}): void => {
  ctx.status = HTTP_CODE.BAD_REQUEST
  ctx.body = json
}

const created = (ctx: Koa.Context) => (json = {}): void => {
  ctx.status = HTTP_CODE.CREATED
  ctx.body = json
}

const catchFunc = (ctx: Koa.Context) => (err: any = {}) => {
  const isErrorStack = typeof err === 'object' && err.errors
  const error = isErrorStack ? err : { errors: err }
  ctx.status = 501
  ctx.body = error
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
  await next()
}

