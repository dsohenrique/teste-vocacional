import React, { useEffect, useState, useCallback } from 'react';
import Hero from '../../Hero'
import { FormContainer } from './styles';
import SelectionCard from '../../SelectionCard';
import Select from '../../Select';
import CloseIcon from './closeIcon';
import CheckIcon from './checkIcon';

export default function Step4({ nextStep, previousStep }: { nextStep: any, previousStep: any }) {
  const resetWindowScrollPosition = useCallback(() => window?.scrollTo(0, 0), []);
  const [name, setName] = useState('');
  const [previousDecision, setPreviousDecision] = useState('');
  const [option, setOption] = useState('');
  const [professionSelect, setProfessionSelect] = useState('');
  
  useEffect(() => {
    resetWindowScrollPosition()
    if (localStorage.getItem('@teste-vocacional:current_career')) {
      setPreviousDecision(localStorage.getItem('@teste-vocacional:current_career') || "");
    }
    if (localStorage.getItem('@teste-vocacional:dream_course')) {
      setProfessionSelect(localStorage.getItem('@teste-vocacional:dream_course') || "");
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

  const secondHandleSubmit = () => {
    localStorage.setItem('@teste-vocacional:dream_course', professionSelect);
    nextStep();
  };

  const selectSubtitle = () => {
    switch (previousDecision) {
      case 'Estou em busca da minha primeira graduação': return `Muito bom ${name}, você deve estar bem ansioso com os seus próximos desafios! Conta pra mim, você já tem algum curso em mente?`;
      case 'Estou procurando uma pós graduação': return 'Excelente! Buscar mais conhecimento é sempre empolgante para a nossa carreira. Mas fiquei curioso, qual curso você fez na sua graduação?';
      case 'Estou fazendo uma transição de carreira':  return 'Que empolgante! Mudanças fazem parte das nossas vidas e são enriquecedoras. E me conta, qual profissão você exercia anteriormente?';
      default: return '';
    }
  }

  return (
    <Hero title="" onClick={() => secondHandleSubmit()} percentage="30" previousStep={previousStep} subtitle={selectSubtitle()} imageSize="small">
      <FormContainer>
        {previousDecision === 'Estou em busca da minha primeira graduação' && 
        <>
          <SelectionCard
            selected={option === 'Sim, já pensei em algum curso'} 
            icon={<CheckIcon />}
            onClick={() => firstHandleSubmit('Sim, já pensei em algum curso')}
            title="Sim, já pensei em algum curso"
          />
          <SelectionCard
            selected={option === 'Não, ainda não tenho idéia'}
            icon={<CloseIcon />}
            onClick={() => firstHandleSubmit('Não, ainda não tenho idéia')}
            title="Não, ainda não tenho idéia"
          />
        </>}
        {previousDecision === 'Estou procurando uma pós graduação' && 
        <>
          <Select
            value={professionSelect}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setProfessionSelect(e.target.value)}
            options={["Engenharia da Computacao", "Engenharia Civil", "Medicina", "Direito"]}
          />
        </>}
        {previousDecision === 'Estou fazendo uma transição de carreira' && 
        <>
          <Select
            value={professionSelect}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setProfessionSelect(e.target.value)}
            options={["Desenvolvedor de Software", "Profissional de Recursos Humano", "CEO do Descomplica", "Médico"]}
          />
        </>}
        {/* Validar aqui qual componente exibir a depender do step4 */}
        {option === 'Sim, já pensei em algum curso' && previousDecision === 'Estou em busca da minha primeira graduação' && (
          <Select
            value={professionSelect}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setProfessionSelect(e.target.value)}
            options={["Engenharia da Computacao", "Engenharia Civil", "Medicina", "Direito"]}
          />
        )}
        {option === 'Sim, já pensei em algum curso' && previousDecision === 'Estou procurando uma pós graduação' && (
          <></>
        )}
        {option === 'Sim, já pensei em algum curso' && previousDecision === 'Estou fazendo uma transição de carreira' && (
          <></>
        )}
      </FormContainer>
    </Hero>
  )
}
