import { useRouter } from 'next/router';
import { PrismaClient } from '@prisma/client';
import Comments from '../../components/Comments';

const prisma = new PrismaClient();

export default function Post({ post, comments }) {
  const router = useRouter();
  const { slug } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Comments comments={comments} />
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await prisma.post.findMany();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  console.log('Fetching post for slug:', params.slug);
  
  const post = await prisma.post.findUnique({
    where: { slug: params.slug },
    include: {
      comments: {
        orderBy: { createdAt: 'asc' },
      },
    },
  });

  console.log('Fetched post:', post);

  if (!post) {
    console.log('Post not found, returning notFound');
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      comments: post.comments,
    },
  };
}
