
import Layout from '../../components/layout'

export default function Post ({ data }) {
  return (
    <Layout>
      {data.title}
    </Layout>
  )
}

export async function getStaticPaths () {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    const paths = data.map((post) => {
      return {
        // es importante que sea string, ver si el valor es numero o string para hacer la tranformacion necesaria
        params: {
          id: `${post.id}`
        }
      }
    })
    return {
      paths,
      // -> fallback Midudev : Es lo que me permite hacer la pagina aunque el cliente no haya puesto el buen path/id (id por el ejemplo)
      fallback: false
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getStaticProps ({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}
