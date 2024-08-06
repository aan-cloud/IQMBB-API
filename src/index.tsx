import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import Home from "./page"
import { json } from 'stream/consumers'

// Beberapa pertanyaan untuk mas ben
// 1. Apakah CRUD data bisa di handle menggunakan DBMS atau pakai logic di javaScript?
// 2. Business Logic itu apa dan implementasi nya seperti apa?
// 3. Apakah untuk routing sebaik nya di buat folder terpisah saja? Jika iya berikan tutor nya 
// 4. Mengapa posgreSql fitur nya sangat banyak dan complex apakah itu semua akan kepakai di ranah junior?
// 5. Jangan lupa ERD saya di berikan masukan, kritik, saran, dll. hehe

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
