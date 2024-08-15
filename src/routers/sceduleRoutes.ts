import { Hono } from "hono";
import sceduleService from "@/services/sceduleServices";
import { sceduleValidationSchema } from "@/validation/sceduleValidation";
import { zValidator } from "@hono/zod-validator";

const tubeRoutes = new Hono();
const service = new sceduleService();

tubeRoutes.get("/", async (c) => {
  const data = await service.getAllScedule();
  return c.json({
    message: "succes",
    data: data,
  });
});

tubeRoutes.get("/:id", async (c) => {
  const id = parseInt(c.req.param("id"));
  const data = await service.getSceduleById(id);
  return c.json({
    message: "succes",
    data: data,
  });
});

tubeRoutes.post("/", zValidator("json", sceduleValidationSchema), async (c) => {
  const data = c.req.valid("json");
  const postedData = await service.postScedule(data);

  return c.json({
    message: "succes",
    data: postedData,
  });
});

tubeRoutes.delete("/", async (c) => {
  const data = await service.deleteAllscedule();
  return c.json({
    message: "succes",
    data: data,
  });
});

tubeRoutes.delete("/:id", async (c) => {
  const id = parseInt(c.req.param("id"));
  const data = await service.deletesceduleById(id);
  return c.json({
    message: "succes",
    data: data,
  });
});

tubeRoutes.patch(
  "/:id",
  zValidator("json", sceduleValidationSchema),
  async (c) => {
    const id = parseInt(c.req.param("id"));
    const dataToUpdate = await c.req.json();
    const updatedData = await service.updatesceduleById(id, dataToUpdate);

    return c.json({
      message: "succes",
      data: updatedData,
    });
  },
);

export default tubeRoutes;
