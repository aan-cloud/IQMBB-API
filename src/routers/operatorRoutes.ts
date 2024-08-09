import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";

const operatorRoutes = new Hono();
const prisma = new PrismaClient();

operatorRoutes.get('/', async (c) => {
    const posts = await prisma.operator.findUnique({
        where: {
           id: 'p002'
        }
    });
    return c.json({
        message: 'succes',
        data:{...posts}
    });
});

operatorRoutes.get("/:id", (c) => {
    return c.json({
        message: 'succes',
        data: 'data'
    })
});

operatorRoutes.post('/', async (c) => {
    const post = await prisma.operator.create({
        data: {
            id: 'p005',
            name: 'aanibnu',
            addres: 'secapah',
            healty: true
        }
    });
    return c.json({
        message: 'succes',
        data: post
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