import { Hono } from "hono";
import machineService from "@/services/machineServices";
import { machineValidationSchema } from "@/validation/machineValidation";
import { zValidator } from "@hono/zod-validator";

const machineRoutes = new Hono();
const service = new machineService();

machineRoutes.get('/', async (c) => {
  const data = await service.getAllmachine();

  return c.json({
      message: 'succes',
      data: data
    }, 200);
  });
  
  machineRoutes.get("/:id", async(c) => {
    const id = c.req.param('id');
    const data = await service.getMachineById(id);

    return c.json({
      message: 'succes',
      data: data
    });
  });
  
  machineRoutes.post('/', zValidator('json', machineValidationSchema), async (c) => {
    const data = c.req.valid('json');
    const postedData = await service.postMachine(data);

    return c.json({
      message: 'succes',
      data: postedData
    });
  });
  
  machineRoutes.delete("/", async (c) => {
    const data = await service.deleteAllMachine();

    return c.json({
      message: 'succes',
      data: data
    });
  });
  
  machineRoutes.delete("/:id", async (c) => {
    const id = c.req.param('id');
    const data = await service.deleteMachineById(id);
    return c.json({
      message: 'succes',
      data: data
    });
  });

  machineRoutes.patch("/:id",zValidator('json', machineValidationSchema), async (c) => {
    const id = c.req.param('id');
    const dataToUpdate = c.req.valid('json');
    const updatedData = await service.updateMachineById(id, dataToUpdate);

    return c.json({
      message: 'succes',
      data: updatedData
    });
  });

  export default machineRoutes;