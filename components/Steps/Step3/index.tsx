import React from 'react';
import Hero from '../../Hero'
import ActionButton from '../../ActionButton';
import { FormContainer } from './styles';

export default function Step3({ nextStep, previousStep }: { nextStep: any, previousStep: any }) {
  return (
    <Hero title="" previousStep={previousStep} subtitle="Antes de começar, me fala: como você gosta que te chamem e como eu posso te encontrar depois do teste?" imageSize="big">
        <FormContainer>
          <ActionButton isDark={false} onClick={() => nextStep()}>Bora lá!</ActionButton>
        </FormContainer>
    </Hero>
  )
}
