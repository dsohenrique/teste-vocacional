import React, { useEffect, useState } from 'react';
import Hero from '../../Hero'
import { FormContainer } from './styles';
import SelectionCard from '../../SelectionCard';
import Select from '../../Select';
import CloseIcon from './closeIcon';
import CheckIcon from './checkIcon';

export default function Step4({ nextStep, previousStep }: { nextStep: any, previousStep: any }) {
  const [name, setName] = useState('');
  const [previousDecision, setPreviousDecision] = useState('');
  const [option, setOption] = useState('');
  const [professionSelect, setProfessionSelect] = useState('');
  
  useEffect(() => {
    if (localStorage.getItem('@teste-vocacional:current_career')) {
      setPreviousDecision(localStorage.getItem('@teste-vocacional:current_career') || "");
    }
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
    <Hero title="" percentage="25" previousStep={previousStep} subtitle={`Muito bom ${name}, você deve estar bem ansioso com os seus próximos desafios! Conta pra mim, você já tem algum curso em mente?`} imageSize="big">
      <FormContainer>
        <SelectionCard icon={<CheckIcon />} onClick={() => firstHandleSubmit('Sim, já pensei em algum curso')} title="Sim, já pensei em algum curso" />
        <SelectionCard icon={<CloseIcon />} onClick={() => firstHandleSubmit('Não, ainda não tenho idéia')} title="Não, ainda não tenho idéia" />
        {/* Validar aqui qual componente exibir a depender do step4 */}
        {option === 'Não, ainda não tenho idéia' && previousDecision === 'Estou em busca da minha primeira graduação' && (
          <Select value={professionSelect} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setProfessionSelect(e.target.value)} options={["Engenharia da Computacao", "Engenharia Civil", "Medicina", "Direito"]} />
        )}
        {option === 'Não, ainda não tenho idéia' && previousDecision === 'Estou procurando uma pós graduação' && (
          <></>
        )}
        {option === 'Não, ainda não tenho idéia' && previousDecision === 'Estou fazendo uma transição de carreira' && (
          <></>
        )}
      </FormContainer>
    </Hero>
  )
}
