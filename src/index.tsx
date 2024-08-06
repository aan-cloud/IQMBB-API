import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import Home from "./page"
import { json } from 'stream/consumers'

// Beberapa pertanyaan untuk mas ben
// 1. Apakah CRUD data bisa di handle menggunakan DBMS atau pakai logic di javaScript?
// Sebenarnya, kalau logicnya sederhana, tidak perlu JavaScript. Bisa buat transparent layer untuk DBMS.
// Misalnya: https://github.com/PostgREST/postgrest
// Tidak perlu buat backend sendiri. Tapi implementasi API sendiri akan selalu lebih ekspresif.
//
// 2. Business Logic itu apa dan implementasi nya seperti apa?
// Contoh: Tiering account di bank.
// Misalnya: Tier basic - Tier pro - Tier ultimate
// Untuk naik tier dari basic ke pro, perlu rata-rata rekening 2 juta.
// Implementasi hal ini memerlukan additional logic yang tidak cukup menggunakan DBMS saja.
//
// 3. Apakah untuk routing sebaik nya di buat folder terpisah saja? Jika iya berikan tutor nya
// Routing sebaiknya dipisah. Ada yang memisahkan berdasarkan kategori (routing/, controller/, model/).
// Ada juga yang memisahkan berdasarkan business domain (operator/, machines/, tubes/).
// Terserah software developer untuk memilih yang mana.
// Untuk Hono sendiri, sudah ada dokumentasinya: https://hono.dev/docs/guides/best-practices
//
// 4. Mengapa posgreSql fitur nya sangat banyak dan complex apakah itu semua akan kepakai di ranah junior?
// Tidak. PostgreSQL itu generic tool. Penggunanya banyak, dan setiap pengguna memiliki usecase masing-masing.
//
// 5. Jangan lupa ERD saya di berikan masukan, kritik, saran, dll. hehe
// ERD-nya mana?

const app = new Hono()

// operator
app.get('/', async (c) => {
  return await c.html(Home())
});

// Jangan lupa gunakan plurals ("operators")
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
// Gunakan plurals ("sections")
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
// Gunakan plurals ("machines")
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
// Gunakan plurals ("tubes")
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
