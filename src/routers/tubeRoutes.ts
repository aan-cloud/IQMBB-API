import { Hono } from "hono";
import tubeService from "@/services/tubeServices";
import { tubeValidationSchema } from "@/validation/tubeValidation";
import { zValidator } from "@hono/zod-validator";

const tubeRoutes = new Hono();
const service = new tubeService();

tubeRoutes.get('/', async (c) => {
  const data = await service.getAlltube();
    return c.json({
      message: 'succes',
      data: data
    });
  });
  
  tubeRoutes.get("/:id", async (c) => {
    const id = c.req.param('id');
    const data = await service.getTubeById(id);
    return c.json({
      message: 'succes',
      data: data
    })
  });
  
  tubeRoutes.post('/', zValidator('json', tubeValidationSchema), async (c) => {
    const data = await c.req.valid('json');
    const postedData = await service.postTube(data);

    return c.json({
      message: 'succes',
      data: postedData
    });
  });
  
  tubeRoutes.delete("/", async (c) => {
    const data = await service.deleteAllTube();
    return c.json({
      message: 'succes',
      data: data
    });
  });
  
  tubeRoutes.delete("/:id", async (c) => {
    const id = c.req.param('id');
    const data = await service.deleteTubeById(id);
    return c.json({
      message: 'succes',
      data: data
    });
  });

  tubeRoutes.patch("/:id",zValidator('json', tubeValidationSchema), async (c) => {
    const id = c.req.param('id');
    const dataToUpdate = await c.req.json();
    const updatedData = await service.updateTubeById(id, dataToUpdate);

    return c.json({
      message: 'succes',
      data: updatedData
    });
  });

  export default tubeRoutes;