import { PrismaClient } from "@prisma/client";
import Joi from "joi";

const prisma = new PrismaClient();

const schema = Joi.object({
    id: Joi.string().min(3).max(5).required()
})

class operatorService {
    async getAllOperator () {
        const allOperator = await prisma.operator.findMany()
        return allOperator
    }

    async getOperatorById(id: string) {
        return await prisma.operator.findUnique({
            where: {
                id: id
            }
        });
    }

    async postOperator(operator: any) {
        return await prisma.operator.create({
            data: {
                id: operator.id,
                name: operator.name,
                addres: operator.addres,
                healty: operator.healty
            }
        });
    }

    async deleteAllOperator() {
        return await prisma.operator.deleteMany({});
    }

    async deleteOperatorById(id: string) {
        return await prisma.operator.delete({
            where: {
                id: id
            }
        });
    }

    async updateOperatorById(id: string, operator: any) {
        return prisma.operator.update({
            where: {
                id: id
            },
            data: {
                id: operator.id,
                name: operator.name,
                addres: operator.addres,
                healty: operator.healty
            }
        });
    }
}

export default operatorService;