import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const slug = 'humildade';
  await prisma.virtue.upsert({
    where: { slug },
    update: {},
    create: {
      slug,
      title: 'Humildade',
      summary: 'A Humildade é o inverso do orgulho. Aprenda a reconhecer e dominar o orgulho.',
      content: `# Humildade

A Humildade é quando a gente sabe que não somos melhores do que ninguém, entretanto, também, que somos bons no que fazemos. Não precisamos contar para todo mundo o quanto somos incríveis. A pessoa humilde é aquela que ajuda os outros sem esperar nada em troca e está sempre aberta a aprender.

## Por que a Humildade é Importante?

Imagine que você jogue futebol super bem. Ser humilde é jogar o melhor que puder, mas sem ficar falando o tempo todo que é o melhor do time. Ser humilde faz com que as pessoas gostem mais de estar ao seu lado, porque você não se acha superior.`,
      story: `Lucas era o melhor no time de basquete da escola. Ele marcava todos os pontos, e os amigos sempre elogiavam, mas um dia, um amigo novo entrou no time e não sabia jogar bem. Ao invés de dizer que ele era "o melhor" do time, Lucas decidiu ensinar o amigo a jogar melhor. Com o tempo, o amigo ficou bom também e eles formaram uma dupla incrível! Lucas percebeu que ensinar era mais legal do que se gabar.`,
      questions: [
        "Quando você é criticado, toma alguma advertência ou alguém não concorda com o que você está falando, você fica nervoso, ansioso ou triste?",
        "Você gostaria de ser famoso, ter autoridade sobre as pessoas?",
        "Gostaria que ninguém mandasse em você?",
        "Você busca fazer com que as pessoas te respeitem?",
        "Você acha que tendo status as pessoas vão te respeitar mais?",
        "Se você for humilde, acha que as outras pessoas vão te prejudicar ou te passar para trás?",
        "Ser humilde é demonstrar fraqueza ou ser inferior?",
        "Quem é um exemplo bom de humildade?",
        "O pobre pode ser orgulhoso e o rico pode ser humilde?",
        "Você concorda com a frase: quem quiser ser o primeiro, que sirva aos outros?"
      ],
      exercises: [
        { title: 'Diário do orgulho', description: 'Anote tudo que te deixa nervoso, com raiva e triste.' },
        { title: 'Mudança', description: 'A partir do diário, faça um plano de ação com novos comportamentos.' },
        { title: 'Meditação', description: 'Medite sobre os momentos em que tentou se mostrar.' },
        { title: 'Reflexão', description: 'Pergunte-se: "Como posso ser mais humilde em minhas interações diárias?" e "O que a humildade pode me ensinar em situações em que eu erro?"' },
        { title: 'Prática', description: 'Pratique aceitar críticas com gratidão, sem se defender imediatamente. Reconheça quando você erra e peça desculpas quando necessário. Permita que os outros errem com você.' },
        { title: 'Escrita', description: 'Escreva sobre um momento recente em que você praticou a humildade ou poderia ter praticado.' }
      ],
      affirmations: [
        "Eu sou a virtude em forma de humildade",
        "Eu não busco mais ter importância",
        "Eu não quero ser mais importante",
        "Eu domino meu orgulho",
        "A vaidade não me domina mais",
        "A arrogância não faz parte de mim",
        "Pois eu domino meu orgulho",
        "Eu não quero mais controlar as coisas e as pessoas",
        "Eu acolho as pessoas em seus defeitos e suas falhas",
        "Aceito os percalços da vida",
        "Eu domino meu orgulho",
        "Não busco o reconhecimento",
        "Não busco o aplauso",
        "Eu domino meu orgulho",
        "Eu não uso comunicação violenta",
        "Uso a brandura para falar e tomar minhas decisões",
        "Eu domino meu orgulho",
        "Não me interessa ser o primeiro",
        "Não me importa não ser o melhor",
        "Pois eu domino meu orgulho",
        "Eu uso o bom humor para as tragédias da minha vida",
        "O mau humor e o nervosismo não fazem mais parte da minha vida",
        "Eu domino meu orgulho",
        "A voracidade e a gula não fazem parte da minha vida",
        "A ira e a vingança não fazem parte da minha vida",
        "Eu domino meu orgulho",
        "A vergonha e a timidez não fazem parte de mim",
        "A preguiça e a procrastinação não fazem parte de mim",
        "Eu domino meu orgulho",
        "Amo e ajudo meu próximo",
        "Não julgo as pessoas que são diferentes que cometeram erros",
        "Pois eu domino meu orgulho",
        "Trato todas as pessoas com igualdade e fraternidade",
        "Não me sinto humilhado e nem exposto, nunca",
        "Eu domino meu orgulho",
        "Sou grato pela vida",
        "Eu domino meu orgulho"
      ],
      images: [
        { alt: 'Humildade - capa', src: '/assets/virtudes/humildade/capa.png' }
      ]
    }
  });
  console.log('Seed: virtude "humildade" criada/upserted');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
