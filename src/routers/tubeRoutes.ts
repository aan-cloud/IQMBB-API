import { Hono } from "hono";


const tubeRoutes = new Hono();

tubeRoutes.get('/', (c) => {
    return c.json({
      message: 'succes',
      data: 'data'
    });
  });
  
  tubeRoutes.get("/:id", (c) => {
    return c.json({
      message: 'succes',
      data: 'data'
    })
  });
  
  tubeRoutes.post('/', async (c) => {
    return c.json({
      message: 'succes',
      data: 'data'
    });
  });
  
  tubeRoutes.delete("/", (c) => {
    return c.json({
      message: 'succes',
      data: 'data'
    });
  });
  
  tubeRoutes.delete("/:id", async (c) => {
    return c.json({
      message: 'succes',
      data: 'data'
    });
  });

  export default tubeRoutes;