import fetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout'

const Show = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary}</p>
    <img src={props.show.image.medium} alt="Show image" />
  </Layout>
)

Show.getInitialProps = async context => {
  const { id } = context.query
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await response.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Show
