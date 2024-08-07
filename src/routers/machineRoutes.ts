import { Hono } from "hono";


const machineRoutes = new Hono();


machineRoutes.get('/', (c) => {
    return c.json({
      message: 'succes',
      data: 'data'
    });
  });
  
  machineRoutes.get("/:id", (c) => {
    return c.json({
      message: 'succes',
      data: 'data'
    })
  });
  
  machineRoutes.post('/', async (c) => {
    return c.json({
      message: 'succes',
      data: 'data'
    });
  });
  
  machineRoutes.delete("/", (c) => {
    return c.json({
      message: 'succes',
      data: 'data'
    });
  });
  
  machineRoutes.delete("/:id", async (c) => {
    return c.json({
      message: 'succes',
      data: 'data'
    });
  });

  export default machineRoutes;