import Head from 'next/head'
import PostList from './components/PostList'
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Omar's Blog - Home</title>
        <meta name="description" content="Welcome to My Blog - A place to share and discover amazing content." />
        <meta name="keywords" content="blog, posts, content, Next.js, Prisma" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow">
        <PostList/>
      </main>

      <footer className="text-center py-4">
        <p>Omar Azhar's Blog (Emp ID: 32211 - Systems Limited) &copy; 2023</p>
      </footer>
  </div>
  )
}
