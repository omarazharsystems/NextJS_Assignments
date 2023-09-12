// pages/user/[user].js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function UserProfile({ user, posts }) {
  return (
    <div>
      <h1>User Profile: {user.name}</h1>
      <h2>Email: {user.email}</h2>
      <h2>Posts by {user.name}:</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/posts/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticPaths() {
  const users = await prisma.user.findMany();

  const paths = users.map((user) => ({
    params: { user: user.email }, // Use email as the parameter
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const user = await prisma.user.findUnique({
    where: { email: params.user }, // Use email to find the user
  });

  const posts = await prisma.post.findMany({
    where: { authorId: user.id },
  });

  return { props: { user, posts } };
}
