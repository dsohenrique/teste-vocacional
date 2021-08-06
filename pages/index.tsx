import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Header, { GlobalStyle } from '../components/Header'
import Step1 from '../components/Steps/Step1';
import Step2 from '../components/Steps/Step2';
import HowItWorks from '../components/Steps/HowItWorks';

export default function Home() {
  // Como salvar a pontuacao dele para o calculo final?
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(1);
    setTimeout(() => {
      setStep(2);
    }, 9000);
  }, []);

  const goToTestStep = () => {
    setStep(4);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const getComponentToRender = (stepSelected: number) => {
    switch (stepSelected) {
      case 1: return <Step1 />
      case 2: return <Step2 nextStep={nextStep} howItWorksStep={() => setStep(8)} />
      case 3: return <h1 style={{ color: 'white' }}>LERIGOU</h1>
      // How it works step
      case 8: return <HowItWorks goToTest={goToTestStep} previousStep={previousStep} />
      default: return null;
    }
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
      {getComponentToRender(step)}
    </>
  )
}
