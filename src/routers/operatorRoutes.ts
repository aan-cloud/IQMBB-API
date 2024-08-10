import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";
import { getAllOperators } from "@/controller/operatorController";

const operatorRoutes = new Hono();
const prisma = new PrismaClient();

// REVIEW: Refrain from using controller, because you will lose TypeScript benefit.
operatorRoutes.get('/', getAllOperators);

operatorRoutes.get("/:id", (c) => {
    return c.json({
        message: 'succes',
        data: 'data'
        // REVIEW: Setup formatter (prettier) to not miss semicolon.
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