import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create demo user
  const hashedPassword = await bcrypt.hash('demo123', 10);

  const user = await prisma.user.upsert({
    where: { email: 'demo@eden.com' },
    update: {},
    create: {
      email: 'demo@eden.com',
      name: 'Usuário Demo',
      password: hashedPassword,
      currentStage: 1,
      currentLevel: 1,
      totalXP: 0,
      streak: 0,
    },
  });

  console.log('✅ Usuário demo criado:', user.email);

  // Create practices
  const practices = [
    {
      title: 'Meditação Guiada',
      description: 'Meditação de 10 minutos para acalmar a mente',
      category: 'meditation',
      duration: 10,
      stage: 1,
      xpReward: 20,
      content: 'Sente-se confortavelmente, feche os olhos e respire profundamente...',
    },
    {
      title: 'Respiração Consciente',
      description: 'Exercício de respiração 4-7-8',
      category: 'breathing',
      duration: 5,
      stage: 1,
      xpReward: 15,
      content: 'Inspire por 4 segundos, segure por 7, expire por 8...',
    },
    {
      title: 'Diário de Gratidão',
      description: 'Escreva 3 coisas pelas quais você é grato hoje',
      category: 'journaling',
      duration: 10,
      stage: 1,
      xpReward: 25,
      content: 'Liste três coisas que aconteceram hoje e que você é grato...',
    },
    {
      title: 'Reflexão Diária',
      description: 'Momento de reflexão sobre o dia',
      category: 'journaling',
      duration: 15,
      stage: 2,
      xpReward: 30,
      content: 'Reflita sobre suas ações, pensamentos e emoções do dia...',
    },
  ];

  for (const practice of practices) {
    await prisma.practice.upsert({
      where: { id: practice.title },
      update: {},
      create: practice as any,
    });
  }

  console.log('✅ Práticas criadas:', practices.length);

  // Create initial progress
  await prisma.progress.create({
    data: {
      userId: user.id,
      stage: 1,
      level: 1,
      xp: 0,
      completed: false,
    },
  });

  console.log('✅ Progresso inicial criado');

  console.log('🎉 Seed concluído!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
