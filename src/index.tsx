import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'

const app = new Hono()


const users = [
  {
    "id":1,
    "name": 'farhan',
    "addres": 'sungai kunyit',
    "heigth": 160,
    "weight": 60
  },
  {
    "id":2,
    "name": 'ibnu',
    "addres": 'parit banjar',
    "heigth": 160,
    "weight": 60
  },
  {
    "id":3,
    "name": 'aini',
    "addres": 'malikian',
    "heigth": 100,
    "weight": 40
  }
]

app.get('/', (c) => {
  return c.text('Halo kamu ada di aplikasi saya')
});

app.get('/users', (c) => {
  return c.json(users)
});

app.get("/users/:id", (c) => {
  const idReq = parseInt(c.req.param("id"), 10);
  const founder = users.find(user => user.id === idReq);

  if (!founder) {
    return c.json({message: 'user not found'}, 404)
  }

  return c.json(founder);
});

app.post('/users', async (c) => {

  try {
    const data = await  c.req.json();
    users.push(data);

    return c.json({
    message: "received",
    dataReceived: data
    });
  } catch (err: any) {
    return c.json({message: 'Error parsing JSON', error: err.message}, 400)
  }
  
});


// basic auth
app.use('/admin/*',
  basicAuth({
    username: 'admin',
    password: 'secret',
  })
);

app.get('/admin', (c) => {
  return c.text('You are authorized!')
})

const port: number = 3000;
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
