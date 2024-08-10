import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class sceduleService {
    async getAllScedule() {
        return await prisma.scedule.findMany({});
    }

    async getSceduleById(id: string) {
        return await prisma.scedule.findUnique({
            where: {
                id: id
            }
        });
    }

    async postScedule(scedule: any) {
        return await prisma.scedule.create({
            data: {
                id: scedule.id,
                operator: scedule.operator,
                section: scedule.section,
                machine: scedule.machine,
                tube: scedule.tube,
                start: scedule.start,
                end: scedule.end
            }
        });
    }

    async deleteAllscedule() {
        return await prisma.scedule.deleteMany({});
    }

    async deletesceduleById(id: string) {
        return await prisma.scedule.delete({
            where: {
                id: id
            }
        });
    }

    async updatesceduleById(id: string, scedule: any) {
        return prisma.scedule.update({
            where: {
                id: id
            },
            data: {
                id: scedule.id,
                operator: scedule.operator,
                section: scedule.section,
                machine: scedule.machine,
                tube: scedule.tube,
                start: scedule.start,
                end: scedule.end
            }
        });
    }
}

export default sceduleService;