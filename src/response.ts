// import { Context } from 'koa'

import * as Koa from 'koa'

const ok = res => (json = {}) => {
  res.status = 200
  res.body = json
}

const emptyContent = res => () => {
  res.status = 204
  res.body = null
}

const serverError = res => (json = {}) => {
  res.status = 500
  res.body = json
}

const notFound = res => (json = {}) => {
  res.status = 404
  res.body = json
}

const forbidden = res => (json = {}) => {
  res.status = 403
  res.body = json
}

const badRequest = res => (json = {}) => {
  res.status = 400
  res.body = json
}

const catchFunc = res => (err: any = {}) => {
  const isErrorStack = typeof err === 'object' && err.errors
  const error = isErrorStack ? err : { errors: err }
  res.status = 501
  res.body = error
}

export const easyResponse = () => async(ctx: Koa.Context, next) => {
  ctx.ok = ok(ctx.response)
  ctx.emptyContent = emptyContent(ctx.response)
  ctx.serverError = serverError(ctx)
  ctx.notFound = notFound(ctx)
  ctx.forbidden = forbidden(ctx)
  ctx.badRequest = badRequest(ctx)
  ctx.catch = catchFunc(ctx)
  await next()
}

