import React, { useEffect, useState, useCallback } from 'react';
import Hero from '../../Hero'
import { FormContainer } from './styles';
import Alternative from '../../Alternative';

export default function Step6({ nextStep, previousStep }: { nextStep: any, previousStep: any }) {
  const resetWindowScrollPosition = useCallback(() => window?.scrollTo(0, 0), []);
  const [selected, setSelected] = useState("");

  const options = [
    "A que une todo mundo",
    "Estudiosa",
    "A que gosta de astrologia",
    "Gamer",
    "Engraçadinha",
    "A que conhece todo mundo",
    "A que adora pets",
    "Fitness",
    "Estilosa",
    "Nenhuma das alternativas",
  ];

  useEffect(() => {
    resetWindowScrollPosition();
  }, []);

  const handleSubmit = () => {
    localStorage.setItem('@teste-vocacional:kind_of_people', selected);
    nextStep();
  };

  return (
    <Hero title="" onClick={() => handleSubmit()} percentage="35" previousStep={previousStep} subtitle="Que pessoa você é do seu grupinho? " imageSize="small">
      <FormContainer>
        {options.map((item, index) => (
          <Alternative selected={item === selected} onClick={() => { setSelected(item) }} key="index" number={index + 1} text={item} />
        ))}
      </FormContainer>
    </Hero>
  )
}
