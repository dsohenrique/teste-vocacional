import { useState } from 'react';
import Head from 'next/head'
import Header, { GlobalStyle } from '../components/Header'

export default function Home() {
  // Como salvar a pontuacao dele para o calculo final?
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const getComponentToRender = (stepSelected: number | undefined) => {
    // const index = componentsComposition.findIndex(item => item.step === stepSelected);
    // return componentsComposition[index];
    return <h1>Teste</h1>
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Head>
        <title>Teste Vocacional</title>
        <meta name="description" content="O melhor teste de todos, agora em 1 minuto!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {getComponentToRender()}
    </>
  )
}
