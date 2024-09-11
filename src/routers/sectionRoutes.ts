import { Hono } from "hono";
import sectionService from "@/services/sectionServices";
import { zValidator } from "@hono/zod-validator";
import { sectionValidationSchema } from "@/schema/sectionValidation";

const sectionRoutes = new Hono();
const service = new sectionService();

sectionRoutes.get("/", async (c) => {
  const data = await service.getAllSection();

  return c.json({
    message: "succes",
    data: data,
  });
});

sectionRoutes.get("/:id", async (c) => {
  const id = c.req.param("id");
  const data = await service.deleteSectionById(id);
  return c.json({
    message: "succes",
    data: data,
  });
});

sectionRoutes.post(
  "/",
  zValidator("json", sectionValidationSchema),
  async (c) => {
    const data = c.req.valid("json");
    const postedData = await service.postSection(data);
    return c.json(
      {
        message: "succes",
        data: postedData,
      },
      200,
    );
  },
);

sectionRoutes.delete("/", async (c) => {
  const data = await service.deleteAllSection();
  return c.json({
    message: "succes",
    data: data,
  });
});

sectionRoutes.delete("/:id", async (c) => {
  const id = c.req.param("id");
  const data = await service.deleteSectionById(id);
  return c.json({
    message: "succes",
    data: data,
  });
});

sectionRoutes.patch(
  "/:id",
  zValidator("json", sectionValidationSchema),
  async (c) => {
    const id = c.req.param("id");
    const dataToUpdate = c.req.valid("json");
    const updatedData = await service.updateSectionById(id, dataToUpdate);

    return c.json({
      message: "succes",
      data: updatedData,
    });
  },
);

export default sectionRoutes;
