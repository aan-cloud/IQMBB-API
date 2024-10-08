import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class scheduleService {
  async getAllSchedule() {
    return await prisma.schedule.findMany({});
  }

  async getScheduleById(id: number) {
    return await prisma.schedule.findUnique({
      where: {
        id: id,
      },
    });
  }

  async postSchedule(schedule: {
    id: number;
    operator: string;
    section: string;
    machine: string;
    tube: string;
    start: Date;
    end: Date;
  }) {
    return await prisma.schedule.create({
      data: {
        id: schedule.id,
        operator: schedule.operator,
        section: schedule.section,
        machine: schedule.machine,
        tube: schedule.tube,
        start: new Date(schedule.start),
        end: new Date(schedule.end),
      },
    });
  }

  async deleteAllschedule() {
    return await prisma.schedule.deleteMany({});
  }

  async deletescheduleById(id: number) {
    return await prisma.schedule.delete({
      where: {
        id: id,
      },
    });
  }

  async updatescheduleById(
    id: number,
    schedule: {
      id: number;
      operator: string;
      section: string;
      machine: string;
      tube: string;
      start: string;
      end: string;
    },
  ) {
    return await prisma.schedule.update({
      where: {
        id: id,
      },
      data: {
        id: schedule.id,
        operator: schedule.operator,
        section: schedule.section,
        machine: schedule.machine,
        tube: schedule.tube,
        start: schedule.start,
        end: schedule.end,
      },
    });
  }
}

export default scheduleService;
