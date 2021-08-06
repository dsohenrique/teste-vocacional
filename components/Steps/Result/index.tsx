import React, { useEffect, useState, useCallback } from 'react';
import Hero from '../../Hero'
import { FormContainer } from './styles';
import ActionButton from '../../ActionButton';

export default function Step11({ nextStep, previousStep }: { nextStep: any, previousStep: any }) {
  const resetWindowScrollPosition = useCallback(() => window?.scrollTo(0, 0), []);

  return (
    <Hero title="" onClick={() => nextStep()} customButtonTooltip="Ver o meu resultado" percentage="100" previousStep={previousStep} subtitle="Hmmm... acho que já perguntei o bastante e tenho coisas super empolgantes pra te contar! Vamos lá?" imageSize="big">
      <FormContainer>
      </FormContainer>
    </Hero>
  )
}
