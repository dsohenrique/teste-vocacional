import React, { useEffect, useState, useCallback } from 'react';
import Hero from '../../Hero'
import { FormContainer } from './styles';
import Alternative from '../../Alternative';

export default function Step10({ nextStep, previousStep }: { nextStep: any, previousStep: any }) {
  const resetWindowScrollPosition = useCallback(() => window?.scrollTo(0, 0), []);
  const [selected, setSelected] = useState("");

  const options = [
    "Gostava de pesquisar todo o conteúdo",
    "Era do time do cada um faz uma parte",
    "Adorava liderar o grupo",
    "Amava apresentar e arrasava",
    "Até gostava de apresentar mas ficava morrendo de ansiedade",
    "Apresentar? nem pensar! você morria de vergonha",
    "Procrastinação em pessoa! Deixava tudo pro último dia",
    "Era a pessoa que não fazia mas tinha sempre o nome no trabalho no final",
    "Nenhuma alternativas",
  ];

  useEffect(() => {
    if (localStorage.getItem('@teste-vocacional:movie_question')) {
      setSelected(localStorage.getItem('@teste-vocacional:movie_question') || "");
    }
    resetWindowScrollPosition();
  }, []);

  const handleSubmit = () => {
    localStorage.setItem('@teste-vocacional:movie_question', selected);
    nextStep();
  };

  return (
    <Hero title="" onClick={() => handleSubmit()} percentage="90" previousStep={previousStep} subtitle="Nos trabalhos da escola você:" imageSize="small">
      <FormContainer>
        {options.map((item, index) => (
          <Alternative selected={item === selected} onClick={() => { setSelected(item) }} key="index" number={index + 1} text={item} />
        ))}
      </FormContainer>
    </Hero>
  )
}
