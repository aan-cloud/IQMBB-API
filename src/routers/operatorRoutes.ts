import { Hono } from "hono";
import operatorService from "@/services/operatorServices";

const operatorRoutes = new Hono();
const services = new operatorService();

operatorRoutes.get('/', async(c) => {
    const data = await services.getAllOperator();
    console.log(data)
    c.json({
        message: 'success',
        data: data
    }, 200);
});

operatorRoutes.get("/:id", (c) => {
    return c.json({
        message: 'succes',
        data: 'data'
    })
});

operatorRoutes.post('/', async (c) => {
   const data = await c.req.json();
   const post = await services.postOperator(data); 

   return  c.json({
    message: 'succes',
    data: post
   }, 200)
});

operatorRoutes.delete("/", (c) => {
    return c.json({
        message: 'succes',
        data: 'data'
    });
});

operatorRoutes.delete("/:id", async (c) => {
    return c.json({
        message: 'succes',
        data: 'data'
    });
});

export default operatorRoutes;