import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <Head>
        <title>Teste Vocacional</title>
        <meta name="description" content="O melhor teste de todos, agora em 1 minuto!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Teste Vocacional</h1>
      </main>
    </div>
  )
}
