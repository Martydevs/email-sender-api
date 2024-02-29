import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'

import { HomePage } from './pages/page'
import { NotFound } from './pages/404'

const app = new Hono()

app.use(prettyJSON())

app.get('/', (c) => {
  return c.html(<HomePage />, 200)
})

app.notFound((c) => {
  return c.html(<NotFound />, 404)
})

export default app
