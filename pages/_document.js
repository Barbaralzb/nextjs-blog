import { Html, Head, Main, NextScript } from 'next/document'

// ctx -> context

export default function Document () {
  return (
    <>
      <Html lang='es' className='bg-white'>
        <Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    </>
  )
}
