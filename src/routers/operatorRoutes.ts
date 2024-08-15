import { Hono } from "hono";
import operatorService from "@/services/operatorServices";
import { operatorValidationSchema } from "@/validation/operatorValidation";
import { zValidator } from "@hono/zod-validator";

const operatorRoutes = new Hono();
const services = new operatorService();

operatorRoutes.get("/", async (c) => {
  const data = await services.getAllOperator();
  return c.json(
    {
      message: "success",
      data: data,
    },
    200,
  );
});

operatorRoutes.get("/:id", async (c) => {
  const param = c.req.param("id");
  const data = await services.getOperatorById(param);
  return c.json({
    message: "succes",
    data: data,
  });
});

operatorRoutes.post(
  "/",
  zValidator("json", operatorValidationSchema),
  async (c) => {
    const data = c.req.valid("json");
    const post = await services.postOperator(data);

    return c.json(
      {
        message: "succes",
        data: post,
      },
      200,
    );
  },
);

operatorRoutes.delete("/", async (c) => {
  const data = await services.deleteAllOperator();
  return c.json({
    message: "succes",
    data: data,
  });
});

operatorRoutes.delete("/:id", async (c) => {
  const id = c.req.param("id");
  const data = await services.deleteOperatorById(id);
  return c.json({
    message: "succes",
    data: data,
  });
});

operatorRoutes.patch(
  "/:id",
  zValidator("json", operatorValidationSchema),
  async (c) => {
    const id = c.req.param("id");
    const updateData = c.req.valid("json");
    const data = await services.updateOperatorById(id, updateData);

    return c.json({
      message: "succes",
      data: data,
    });
  },
);

export default operatorRoutes;
