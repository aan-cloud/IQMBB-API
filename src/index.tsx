import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'
import { json } from 'stream/consumers'

const app = new Hono()

interface Users {
  id: number,
  name: string,
  addres: string,
  height: number,
  weight: number
}


let users: Users[] = [
  {
    id: 1,
    name: 'farhan',
    addres: 'sungai kunyit',
    height: 160,
    weight: 60
  },
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
    return c.json({ message: 'user not found' }, 404)
  }

  return c.json(founder);
});

app.post('/users', async (c) => {

  try {
    const data = await c.req.json();
    users.push(data);

    return c.json({
      message: "received",
      data: data
    });
  } catch (err: any) {
    return c.json({ message: 'Error parsing JSON', error: err.message }, 400)
  }

});

app.delete("/users", (c) => {

  try {
    users = [];
    return c.json({
      message: "users deleted",
      data: users
    }, 200);
  } catch (error: any) {
    return c.json({ message: 'Error DELETE Users Data', error: error.message }, 400)
  }

});

app.delete("/users/:id", async (c) => {

  try {
    const userId = parseInt(c.req.param("id"), 10);
    const userToDelete = users.filter(user => user.id === userId);
    const userIndex = users.findIndex(user => user.id === userId);
    users.splice(userIndex, 1);

    return c.json({
      messsage: `sucsess delete user id: ${c.req.param("id"), 200}`,
      data: userToDelete
    });
  } catch (error: any) {
    return c.json({ message: 'Error DELETE Users Data', error: error.message }, 400)
  }

});


// basic auth
app.use('/admin/*',
  basicAuth({
    username: 'aan',
    password: 'mana saya tau',
  })
);

app.get('/admin', (c) => {
  return c.text('You are authorized!')
});

const port: number = 3000;
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
