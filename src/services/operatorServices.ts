import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class operatorService {
    async getAllOperator () {
        return await prisma.operator.findMany({});
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