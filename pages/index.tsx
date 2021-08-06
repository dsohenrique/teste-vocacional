import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Header, { GlobalStyle } from '../components/Header'
import Step1 from '../components/Steps/Step1';
import Step2 from '../components/Steps/Step2';
import Step3 from '../components/Steps/Step3';
import Step4 from '../components/Steps/Step4';
import Step5 from '../components/Steps/Step5';
import Step6 from '../components/Steps/Step6';
import Step7 from '../components/Steps/Step7';
import Step8 from '../components/Steps/Step8';
import Step9 from '../components/Steps/Step9';
import HowItWorks from '../components/Steps/HowItWorks';

export default function Home() {
  // Como salvar a pontuacao dele para o calculo final?
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step === 0 || step === 1) {
      setStep(1);
      setTimeout(() => {
        setStep(2);
      }, 4500);
    }
  }, [step]);

  const goToTestStep = () => {
    setStep(3);
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
      case 2: return <Step2 nextStep={nextStep} previousStep={previousStep} howItWorksStep={() => setStep(50)} />
      case 3: return <Step3 nextStep={nextStep} previousStep={previousStep} />
      case 4: return <Step4 nextStep={nextStep} previousStep={previousStep} />
      case 5: return <Step5 nextStep={nextStep} previousStep={previousStep} />
      case 6: return <Step6 nextStep={nextStep} previousStep={previousStep} />
      case 7: return <Step7 nextStep={nextStep} previousStep={previousStep} />
      case 8: return <Step8 nextStep={nextStep} previousStep={previousStep} />
      case 9: return <Step9 nextStep={nextStep} previousStep={previousStep} />
      // How it works step
      case 50: return <HowItWorks goToTest={goToTestStep} previousStep={() => { setStep(2) }} />
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
