import React, { useEffect, useState } from 'react';
import Hero from '../../Hero'
import { FormContainer } from './styles';
import Alternative from '../../Alternative';

export default function Step9({ nextStep, previousStep }: { nextStep: any, previousStep: any }) {
  const [selected, setSelected] = useState("");

  const options = [
    "Narra o filme todo",
    "Indecisa ",
    "Já tem uma lista de filmes pronta",
    "Dorme no meio do filme",
    "Fica dando spoilers",
    "Corre pra acompanhar todos os atores nas redes sociais",
    "Só fica no celular",
    "Nenhuma das alternativas",
  ];

  const handleSubmit = () => {
    localStorage.setItem('@teste-vocacional:movie_question', selected);
    nextStep();
  };

  return (
    <Hero title="" onClick={() => handleSubmit()} percentage="35" previousStep={previousStep} subtitle="Quem é você quando vai assistir um filme?" imageSize="small">
      <FormContainer>
        {options.map((item, index) => (
          <Alternative selected={item === selected} onClick={() => { setSelected(item) }} key="index" number={index + 1} text={item} />
        ))}
      </FormContainer>
    </Hero>
  )
}
