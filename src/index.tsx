import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'
import { json } from 'stream/consumers'

const app = new Hono()

interface Users {
  id: number,
  name: string,
  addres: string,
  // height
  heigth: number,
  weight: number
}


let users: Users[] = [
  {
    // no need to use double quotes (") for object literal
    "id": 1,
    "name": 'farhan',
    "addres": 'sungai kunyit',
    "heigth": 160,
    "weight": 60
  },
  {
    "id": 2,
    "name": 'ibnu',
    "addres": 'parit banjar',
    "heigth": 160,
    "weight": 60
  },
  {
    "id": 3,
    "name": 'aini',
    "addres": 'malikian',
    "heigth": 100,
    "weight": 40
  }
]

app.get('/', (c) => {
  return c.text('Hello, Welcome to user information API')
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

    // be consistent in your API response structure
    return c.json({
      message: "received",
      dataReceived: data
    });
  } catch (err: any) {
    return c.json({ message: 'Error parsing JSON', error: err.message }, 400)
  }

});

app.delete("/users", (c) => {

  try {
    users = [];
    // be consistent in your API response structure
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
      deletedUser: userToDelete
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
