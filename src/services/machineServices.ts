import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class machineService {
    async getAllmachine() {
        return await prisma.machine.findMany({});
    }

    async getMachineById(id: string) {
        return await prisma.machine.findUnique({
            where: {
                id: id
            }
        });
    }

    async postMachine(machine: any) {
        return await prisma.machine.create({
            data: {
                id: machine.id,
                model: machine.name
            }
        });
    }

    async deleteAllMachine() {
        return await prisma.machine.deleteMany({});
    }

    async deleteMachineById(id: string) {
        return await prisma.machine.delete({
            where: {
                id: id
            }
        });
    }

    async updateMachineById(id: string, machine: any) {
        return prisma.machine.update({
            where: {
                id: id
            },
            data: {
                id: machine.id,
                model: machine.name,
            }
        });
    }
}

export default machineService;