import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class PracticesService {
  async startPractice(userId: number, type: string) {
    return { message: 'Prática iniciada', type, userId };
  }

  async completePractice(userId: number, type: string, duration: number, notes?: string) {
    const points = duration * 2; // 2 pontos por minuto
    const practice = await prisma.practice.create({
      data: { userId, type, duration, points, notes }
    });
    await prisma.user.update({
      where: { id: userId },
      data: { points: { increment: points } }
    });
    // Verificar badges
    await this.checkBadges(userId);
    return practice;
  }

  async getUserPractices(userId: number) {
    return prisma.practice.findMany({ where: { userId } });
  }

  private async checkBadges(userId: number) {
    const count = await prisma.practice.count({ where: { userId } });
    const badges = [
      { name: 'Primeira Prática', desc: 'Concluiu sua primeira prática', threshold: 1 },
      { name: 'Mestre Zen', desc: '10 meditações completadas', threshold: 10, type: 'meditation' }
    ];
    for (const b of badges) {
      const exists = await prisma.badge.findFirst({ where: { userId, name: b.name } });
      if (!exists) {
        let earned = false;
        if (b.type) {
          const typeCount = await prisma.practice.count({ where: { userId, type: b.type } });
          earned = typeCount >= b.threshold;
        } else {
          earned = count >= b.threshold;
        }
        if (earned) {
          await prisma.badge.create({ data: { userId, name: b.name, description: b.desc } });
        }
      }
    }
  }
}
