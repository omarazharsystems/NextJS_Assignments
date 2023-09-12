/* eslint-disable import/no-anonymous-default-export */
import { PrismaClient } from '@prisma/client';
import slugify from 'slugify'; // Import a slugify library

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const posts = await prisma.post.findMany({
        orderBy: { createdAt: 'desc' },
        include: {
          author: true, // Include the author information
          comments: true, // Include the comments associated with each post
        },
      });
      res.status(200).json(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    try {
      const { title, content, authorId } = req.body;

      // Generate a unique slug based on the post's title
      const slug = slugify(title, {
        lower: true,   // Convert to lowercase
        strict: true,  // Remove special characters
      });

      const post = await prisma.post.create({
        data: {
          title,
          content,
          authorId,
          slug, // Include the generated slug
        },
        include: {
          author: true, // Include the author information
          comments: true, // Include the comments associated with the post
        },
      });
      res.status(201).json(post);
    } catch (error) {
      console.error('Error creating a post:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).end();
  }
};
