import React, { useEffect, useState } from 'react';
import Hero from '../../Hero'
import ActionButton from '../../ActionButton';
import { FormContainer } from './styles';
import SelectionCard from '../../SelectionCard';
import EyeIcon from './eyeIcon';
import CertifiedIcon from './certifiedIcon';
import XIcon from './xIcon';

export default function Step4({ nextStep, previousStep }: { nextStep: any, previousStep: any }) {
  const [name, setName] = useState('');

  useEffect(() => {
    if (localStorage.getItem('@teste-vocacional:name')) {
      setName(localStorage.getItem('@teste-vocacional:name') || "Aluno");
    }
  }, [])

  const handleSubmit = (selected: string) => {
    localStorage.setItem('@teste-vocacional:current_career', selected);
    nextStep();
  };

  return (
    <Hero title="" percentage="15" previousStep={previousStep} subtitle={`Perfeito, ${name}! Então vamos começar te conhecendo um pouco melhor. Qual é o seu momento atual de carreira?`} imageSize="small">
        <FormContainer>
          <SelectionCard icon={<EyeIcon />} onClick={() => handleSubmit('Estou em busca da minha primeira graduação')} title="Estou em busca da minha primeira graduação" />
          <SelectionCard icon={<CertifiedIcon />} onClick={() => handleSubmit('Estou procurando uma pós graduação')} title="Estou procurando uma pós graduação" />
          <SelectionCard icon={<XIcon />} onClick={() => handleSubmit('Estou fazendo uma transição de carreira')} title="Estou fazendo uma transição de carreira" />
        </FormContainer>
    </Hero>
  )
}
