import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class sectionService {
    async getAllsection() {
        return await prisma.section.findMany({});
    }

    async getSectionById(id: string) {
        return await prisma.section.findUnique({
            where: {
                id: id
            }
        });
    }

    async postSection(section: any) {
        return await prisma.section.create({
            data: {
                id: section.id,
                name: section.name
            }
        });
    }

    async deleteAllSection() {
        return await prisma.section.deleteMany({});
    }

    async deleteSectionById(id: string) {
        return await prisma.section.delete({
            where: {
                id: id
            }
        });
    }

    async updateSectionById(id: string, section: any) {
        return prisma.section.update({
            where: {
                id: id
            },
            data: {
                id: section.id,
                name: section.name,
            }
        });
    }
}

export default sectionService;