/* eslint-disable import/no-anonymous-default-export */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === 'GET') {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.status(200).json(posts);
  } else if (req.method === 'POST') {
    const { title, content, authorId } = req.body;
    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId,
      },
    });
    res.status(201).json(post);
  } else {
    res.status(405).end();
  }
};
