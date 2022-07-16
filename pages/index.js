import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Card from '../components/Card'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

// -> Esto es en el caso que sea una rernderizacion Sattic Generation
export async function getStaticProps () {
  const posts = getSortedPostsData()
  return posts
}

// -> Esto es en el caso que sea una Server-side Rendering
// export async function getServerSideProps (context) {
//   try {
//     const posts = getSortedPostsData()
//     return posts
//   } catch (error) {
//     console.log(error)
//   }
// }

export default function Home ({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='section'>
        <div className='container'>
          <h2 className='title is-2 flex justify-center'>Blog</h2>
          <div className='grid grid-cols-2 gap-x-6 gap-y-12'>
            {posts.map(({ id, title, body }) => (
              <div key={id}>
                <Link href={`/post/${id}`}>
                  <a>
                    <Card
                      title={title}
                      body={body}
                    />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
