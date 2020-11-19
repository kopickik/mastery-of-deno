import { Application } from 'https://deno.land/x/oak/mod.ts'

const app = new Application()
const PORT = 8000

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

const main = async () =>
  app.listen({
    port: PORT,
  })

if (import.meta.main) {
  await main()
}
