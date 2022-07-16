// import Layout from '../components/layout'
import 'bulma/css/bulma.css'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

export default function MyApp ({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  // Esto no lo tengo claro
  // const getLayout = Component.getLayout || ((page) => page)
  return (
    <>
      {/*       <Layout> */}
      <Component {...pageProps} />
      {/*  </Layout> */}
    </>
  )
}
