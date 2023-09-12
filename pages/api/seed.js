// seed.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seed() {
  try {
    // Create users
    const user1 = await prisma.user.create({
      data: {
        name: 'John Doe',
        email: 'john@example.com',
      },
    });

    const user2 = await prisma.user.create({
      data: {
        name: 'Jane Smith',
        email: 'jane@example.com',
      },
    });

    // Create posts
    const post1 = await prisma.post.create({
      data: {
        title: 'Post 1',
        content: 'Content for Post 1',
        authorId: user1.id,
      },
    });

    const post2 = await prisma.post.create({
      data: {
        title: 'Post 2',
        content: 'Content for Post 2',
        authorId: user2.id,
      },
    });

    // Create comments
    await prisma.comment.createMany({
      data: [
        {
          content: 'Comment 1 for Post 1',
          postId: post1.id,
          authorId: user1.id,
        },
        {
          content: 'Comment 2 for Post 1',
          postId: post1.id,
          authorId: user2.id,
        },
        {
          content: 'Comment 1 for Post 2',
          postId: post2.id,
          authorId: user1.id,
        },
      ],
    });

    console.log('Data seeded successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
