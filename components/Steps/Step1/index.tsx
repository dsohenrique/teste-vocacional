import { useEffect, useState } from 'react';
import Head from 'next/head'
import Header, { GlobalStyle } from '../../../components/Header'
import Hero from '../../../components/Hero'

export default function Step1() {
  // Como salvar a pontuacao dele para o calculo final?
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState<string>('Olá, eu sou o Descomplikator');
  const [subtitle, setSubtitle] = useState<string>('Prepare-se para descobrir grandes coisas sobre o seu futuro!');
  const [imageSize, setImageSize] = useState('big');

  return (
    <>
      <GlobalStyle />
      <Header />
      <Head>
        <title>Teste Vocacional</title>
        <meta name="description" content="O melhor teste de todos, agora em 1 minuto!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero title={title} subtitle={subtitle} imageSize={imageSize}>
        {/* Componentes aqui */}
      </Hero>
    </>
  )
}
