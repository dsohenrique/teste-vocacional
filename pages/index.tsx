import Head from 'next/head'
import Header, { GlobalStyle } from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Head>
        <title>Teste Vocacional</title>
        <meta name="description" content="O melhor teste de todos, agora em 1 minuto!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero title="" subtitle="" imageSize="">
        {/* Components here */}
      </Hero>
    </>
  )
}
