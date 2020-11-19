# Oak

## Middleware

Middleware are just functions that look like this:

```js
app.use(async function (ctx, next) {
  /* Work with the context to respond to our API request.
  // This can be an anonymous or named function.
  // `ctx` object is key -- it holds all of the relevant data from the client
  // and all of the relevant data from the response.
  // Some of the data the request contains is: url, secure, method, body, headers
  // Some of the data the response contains is: redirect, type, status, body, headers
  // i.e., ctx.response.headers.(set OR get)
  // on the request, the data is read only, so ctx.request.headers.get (can't set headers on the request)
  // visually:
  /* --> request --> middelware1 app.use(ctx, next) --> next() --> middelware2 app.use(ctx, next) --> next() --> middleware3(Endpoint) app.use(ctx) --> return response --> middleware 2 return --> middleware1 return --> Response
})
```
