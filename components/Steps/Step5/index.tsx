import React, { useEffect, useState } from 'react';
import Hero from '../../Hero'
import ActionButton from '../../ActionButton';
import { FormContainer } from './styles';
import SelectionCard from '../../SelectionCard';
import CloseIcon from './closeIcon';
import CheckIcon from './checkIcon';

export default function Step4({ nextStep, previousStep }: { nextStep: any, previousStep: any }) {
  const [name, setName] = useState('');
  const [option, setOption] = useState('');
  
  useEffect(() => {
    if (localStorage.getItem('@teste-vocacional:name')) {
      setName(localStorage.getItem('@teste-vocacional:name') || "Aluno");
    }
  }, [])

  const firstHandleSubmit = (selected: string) => {
    localStorage.setItem('@teste-vocacional:has_dream_course', selected);
    setOption(selected);
    // nextStep();
  };

  const secondHandleSubmit = (selected: string) => {
    localStorage.setItem('@teste-vocacional:dream_course', selected);
    // nextStep();
  };

  return (
    <Hero title="" percentage="15" previousStep={previousStep} subtitle={`Muito bom ${name}, você deve estar bem ansioso com os seus próximos desafios! Conta pra mim, você já tem algum curso em mente?`} imageSize="big">
        <FormContainer>
          <SelectionCard icon={<CheckIcon />} onClick={() => firstHandleSubmit('Sim, já pensei em algum curso')} title="Sim, já pensei em algum curso" />
          <SelectionCard icon={<CloseIcon />} onClick={() => firstHandleSubmit('Não, ainda não tenho idéia')} title="Não, ainda não tenho idéia" />
          {/* {option === 'Não, ainda não tenho idéia' && (
            // Mostrar aqui o select de cursos
          )} */}
        </FormContainer>
    </Hero>
  )
}
