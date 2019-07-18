import Layout from '../components/Layout'
import Link from 'next/link'

function getPosts() {
  return [
    { id: 'hello-next', title: 'Hello Next.js' },
    { id: 'learn-next', title: 'Learn Next.js is awesome' },
    { id: 'deploy-next', title: 'Deploy apps with ZEIT' },
  ]
}

const PostLink = ({ post }) => (
  <li>
    <Link href="/post/[id]" as={`/post/${post.id}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)

const Blog = () => (
  <Layout>
    <h1>My Styled Blog</h1>
    <ul>
      {getPosts().map(post => (
        <PostLink key={post.id} post={post} />
      ))}
    </ul>
    <style jsx>{`
      h1,
      a {
        font-family: 'Arial'
      }

      ul {
        padding: 0;
      }
    `}</style>
  </Layout>
)

export default Blog
