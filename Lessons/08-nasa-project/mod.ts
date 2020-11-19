import { Application } from 'https://deno.land/x/oak@v6.3.2/mod.ts'
import * as log from 'https://deno.land/std@0.78.0/log/mod.ts'

const app = new Application()
const PORT = 8000

app.use(async (ctx, next) => {
  console.log(`${ctx.request.method}::${ctx.request.url}`)
  await next()
})

app.use((ctx) => {
  ctx.response.body = `
  {...     {..           {.              {.. ..             {.
  {. {..   {..          {. ..          {..    {..          {. ..
  {.. {..  {..         {.  {..          {..               {.  {..
  {..  {.. {..        {..   {..           {..            {..   {..
  {..   {. {..       {...... {..             {..        {...... {..
  {..    {. ..      {..       {..      {..    {..      {..       {..
  {..      {..     {..         {..       {.. ..       {..         {..
                        Mission Control API`
})

const main = async () => log.debug(`Hello world.`)
app.listen({
  port: PORT,
})

if (import.meta.main) {
  await main()
}
