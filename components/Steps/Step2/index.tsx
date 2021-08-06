import React from 'react';
import Hero from '../../Hero'
import ActionButton from '../../ActionButton';
import { FormContainer } from './styles';

export default function Step2({ nextStep, previousStep, howItWorksStep }: { nextStep: any, previousStep: any, howItWorksStep: any}) {
  return (
    <Hero title="" previousStep={previousStep} subtitle="Você está pronto para iniciar o teste vocacional mais bacanudo da internet? " imageSize="big">
        <FormContainer>
          <ActionButton isDark={false} onClick={() => nextStep()}>Bora lá!</ActionButton>
          <ActionButton isDark={true} onClick={() => howItWorksStep()}>Quero saber como funciona</ActionButton>
        </FormContainer>
    </Hero>
  )
}
