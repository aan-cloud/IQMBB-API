import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'
import Home from "./page"
import { json } from 'stream/consumers'

const app = new Hono()

// operator
app.get('/', async (c) => {
  return await c.html(Home())
});

app.get('/operator', (c) => {
  return c.json({
    message: 'succes',
    data: 'data'
  });
});

app.get("/operator/:id", (c) => {
  return c.json({
    message: 'succes',
    data: 'data'
  })
});

app.post('/operator', async (c) => {
  return c.json({
    message: 'succes',
    data: 'data'
  });
});

app.delete("/operator", (c) => {
  return c.json({
    message: 'succes',
    data: 'data'
  });
});

app.delete("/operator/:id", async (c) => {
  return c.json({
    message: 'succes',
    data: 'data'
  });
});

// section

app.get('/section', (c) => {
  return c.json({
    message: 'succes',
    data: 'data'
  });
});

app.get("/section/:id", (c) => {
  return c.json({
    message: 'succes',
    data: 'data'
  })
});

app.post('/section', async (c) => {
  return c.json({
    message: 'succes',
    data: 'data'
  });
});

app.delete("/section", (c) => {
  return c.json({
    message: 'succes',
    data: 'data'
  });
});

app.delete("/section/:id", async (c) => {
  return c.json({
    message: 'succes',
    data: 'data'
  });
});

// machine

app.get('/machine', (c) => {
  return c.json({
    message: 'succes',
    data: 'data'
  });
});

app.get("/machine/:id", (c) => {
  return c.json({
    message: 'succes',
    data: 'data'
  })
});

app.post('/machine', async (c) => {
  return c.json({
    message: 'succes',
    data: 'data'
  });
});

app.delete("/machine", (c) => {
  return c.json({
    message: 'succes',
    data: 'data'
  });
});

app.delete("/machine/:id", async (c) => {
  return c.json({
    message: 'succes',
    data: 'data'
  });
});

// tube

app.get('/tube', (c) => {
  return c.json({
    message: 'succes',
    data: 'data'
  });
});

app.get("/tube/:id", (c) => {
  return c.json({
    message: 'succes',
    data: 'data'
  })
});

app.post('/tube', async (c) => {
  return c.json({
    message: 'succes',
    data: 'data'
  });
});

app.delete("/tube", (c) => {
  return c.json({
    message: 'succes',
    data: 'data'
  });
});

app.delete("/tube/:id", async (c) => {
  return c.json({
    message: 'succes',
    data: 'data'
  });
});

const port: number = 3000;
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
