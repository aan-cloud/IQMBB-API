import { Hono } from "hono";

const sectionRoutes = new Hono();

sectionRoutes.get('/', (c) => {
    return c.json({
      message: 'succes',
      data: 'data'
    });
  });
  
  sectionRoutes.get("/:id", (c) => {
    return c.json({
      message: 'succes',
      data: 'data'
    })
  });
  
  sectionRoutes.post('/', async (c) => {
    return c.json({
      message: 'succes',
      data: 'data'
    });
  });
  
  sectionRoutes.delete("/", (c) => {
    return c.json({
      message: 'succes',
      data: 'data'
    });
  });
  
  sectionRoutes.delete("/:id", async (c) => {
    return c.json({
      message: 'succes',
      data: 'data'
    });
  });

  export default sectionRoutes;