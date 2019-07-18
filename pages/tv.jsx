import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'

const TV = props => (
  <Layout>
    <h1>Batman TV shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/show/[id]" as={`/show/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

TV.getInitialProps = async () => {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await response.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data.map(entry => entry.show)
  }
}

export default TV
