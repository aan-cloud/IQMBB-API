import { Hono } from "hono";
import scheduleService from "@/services/scheduleServices";
import { scheduleValidationSchema } from "@/validation/scheduleValidation";
import { zValidator } from "@hono/zod-validator";

const scheduleRoutes = new Hono();
const service = new scheduleService();

scheduleRoutes.get("/", async (c) => {
  const data = await service.getAllSchedule();
  return c.json({
    message: "succes",
    data: data,
  });
});

scheduleRoutes.get("/:id", async (c) => {
  const id = parseInt(c.req.param("id"));
  const data = await service.getScheduleById(id);
  return c.json({
    message: "succes",
    data: data,
  });
});

scheduleRoutes.post(
  "/",
  zValidator("json", scheduleValidationSchema),
  async (c) => {
    const data: any = c.req.valid("json");
    const postedData = await service.postSchedule(data);

    return c.json({
      message: "succes",
      data: postedData,
    });
  },
);

scheduleRoutes.delete("/", async (c) => {
  const data = await service.deleteAllschedule();
  return c.json({
    message: "succes",
    data: data,
  });
});

scheduleRoutes.delete("/:id", async (c) => {
  const id = parseInt(c.req.param("id"));
  const data = await service.deletescheduleById(id);
  return c.json({
    message: "succes",
    data: data,
  });
});

scheduleRoutes.patch(
  "/:id",
  zValidator("json", scheduleValidationSchema),
  async (c) => {
    const id = parseInt(c.req.param("id"));
    const dataToUpdate = await c.req.json();
    const updatedData = await service.updatescheduleById(id, dataToUpdate);

    return c.json({
      message: "succes",
      data: updatedData,
    });
  },
);

export default scheduleRoutes;
