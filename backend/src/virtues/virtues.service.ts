import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class VirtuesService {
  async findAll() {
    return prisma.virtue.findMany({ select: { id: true, slug: true, title: true, summary: true, images: true } });
  }

  async findBySlug(slug: string) {
    const v = await prisma.virtue.findUnique({ where: { slug } });
    if (!v) throw new NotFoundException('Virtude não encontrada');
    return v;
  }
}
