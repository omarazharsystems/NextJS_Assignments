import PropTypes from 'prop-types';
import React from 'react';
import { PrismaClient } from '@prisma/client';
import Comments from '../../components/Comments';

const prisma = new PrismaClient();

const Comment = ({ comments }) => {
  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const MemoizedComments = React.memo(Comment);

export default function Post({ post, comments }) {
  console.log('Post component received post:', post, comments);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <MemoizedComments comments={comments} />
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object,
  comments: PropTypes.array.isRequired,
};

export async function getServerSideProps({ params }) {
  console.log('Fetching post for slug:', params.slug);

  try {
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
  } catch (error) {
    console.log('Error fetching post:', error);
    return {
      props: {
        post: null,
        comments: [],
      },
    };
  }
}
