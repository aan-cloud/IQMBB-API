import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class tubeService {
  async getAlltube() {
    return await prisma.tube.findMany({});
  }

  async getTubeById(id: string) {
    return await prisma.tube.findUnique({
      where: {
        id: id,
      },
    });
  }

  async postTube(tube: { id: string; part: string; size: number }) {
    return await prisma.tube.create({
      data: {
        id: tube.id,
        part: tube.part,
        size: tube.size,
      },
    });
  }

  async deleteAllTube() {
    return await prisma.tube.deleteMany({});
  }

  async deleteTubeById(id: string) {
    return await prisma.tube.delete({
      where: {
        id: id,
      },
    });
  }

  async updateTubeById(
    id: string,
    tube: { id: string; part: string; size: number },
  ) {
    return await prisma.tube.update({
      where: {
        id: id,
      },
      data: {
        id: tube.id,
        part: tube.part,
        size: tube.size,
      },
    });
  }
}

export default tubeService;
