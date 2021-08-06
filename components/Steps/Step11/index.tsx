import React, { useEffect, useState, useCallback } from 'react';
import Hero from '../../Hero'
import { FormContainer } from './styles';
import Alternative from '../../Alternative';

export default function Step11({ nextStep, previousStep }: { nextStep: any, previousStep: any }) {
  const resetWindowScrollPosition = useCallback(() => window?.scrollTo(0, 0), []);
  const [selected, setSelected] = useState("");

  const options = [
    "Confia na pessoa e nem confere o dinheiro porque sabe que conta não é a sua praia",
    "Confere rapidinho já que é bom em exatas e até gosta de contas",
    "Consegue contar rapidinho mas não se interessa muito por matemática",
    "Conta o dinheiro mas não é tão bom assim em exatas",
    "Nenhuma das alternativas",
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
    <Hero title="" onClick={() => handleSubmit()} percentage="95" previousStep={previousStep} subtitle="Quando você vai ao mercado e recebe o troco no caixa, sua primeira reação é:" imageSize="small">
      <FormContainer>
        {options.map((item, index) => (
          <Alternative selected={item === selected} onClick={() => { setSelected(item) }} key="index" number={index + 1} text={item} />
        ))}
      </FormContainer>
    </Hero>
  )
}
