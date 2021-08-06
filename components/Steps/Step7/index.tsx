import React, { useEffect, useState } from 'react';
import Hero from '../../Hero'
import { FormContainer } from './styles';
import Alternative from '../../Alternative';

export default function Step7({ nextStep, previousStep }: { nextStep: any, previousStep: any }) {
  const [selected, setSelected] = useState("");

  const options = [
    "É a primeira pessoa a socorrer, afinal, se formou em Grey’s Anatomy",
    "Manja dos primeiros socorros, mas para por aí",
    "Da pane no sistema e não sabe o que fazer",
    "Tenta manter a calma e pensar como pode ajudar",
    "Nenhuma das alternativas",
  ];

  const handleSubmit = () => {
    localStorage.setItem('@teste-vocacional:problem_situation', selected);
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
