import { useEffect, useState } from 'react';
import Head from 'next/head'
import Header, { GlobalStyle } from '../components/Header'
import Hero from '../components/Hero'

const componentsComposition = [{
  id: 'intro',
  title: '',
  subtitle: '',
  toRender: null,
}, {
  id: 'alternative',
  title: null,
  subtitle: '',
  toRender: null,
}];

export default function Home() {
  // Como salvar a pontuacao dele para o calculo final?


  const [step, setStep] = useState(0);

  useEffect(() => {
    // Catch the new components and fields
  }, [step]);

  const nextStep = () => {

  };

  const previousStep = () => {

  };

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
      </Hero>
    </>
  )
}
