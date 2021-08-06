import React, { useEffect, useState } from 'react';
import Hero from '../../Hero'
import { FormContainer } from './styles';
import Alternative from '../../Alternative';

export default function Step8({ nextStep, previousStep }: { nextStep: any, previousStep: any }) {
  const [selected, setSelected] = useState("");

  const options = [
    "Gosto dos videos de desenhos",
    "Amo ver as dancinhas",
    "Prefiro os vídeos de maquiagem",
    "Sou a pessoa que tem ideias para os vídeos",
    "Sou a pessoa que copia e melhora os vídeos",
    "Nenhuma das alternativas",
  ];

  const handleSubmit = () => {
    localStorage.setItem('@teste-vocacional:tiktok_question', selected);
    nextStep();
  };

  return (
    <Hero title="" onClick={() => handleSubmit()} percentage="35" previousStep={previousStep} subtitle="Quem é você no TikTok?" imageSize="small">
      <FormContainer>
        {options.map((item, index) => (
          <Alternative selected={item === selected} onClick={() => { setSelected(item) }} key="index" number={index + 1} text={item} />
        ))}
      </FormContainer>
    </Hero>
  )
}
