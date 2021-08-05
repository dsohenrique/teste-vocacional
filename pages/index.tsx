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
      <Hero title="Olá, eu sou o Descomplikator" subtitle="Prepare-se para descobrir grandes coisas sobre o seu futuro!" imageSize="big">
        {/* Components here */}
      </Hero>
    </>
  )
}
