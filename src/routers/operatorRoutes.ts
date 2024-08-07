import { Hono } from "hono";

const operatorRoutes = new Hono();

operatorRoutes.get('/', (c) => {
    return c.json({
        message: 'succes',
        data: 'data'
    });
});

operatorRoutes.get("/:id", (c) => {
    return c.json({
        message: 'succes',
        data: 'data'
    })
});

operatorRoutes.post('/', async (c) => {
    return c.json({
        message: 'succes',
        data: 'data'
    });
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