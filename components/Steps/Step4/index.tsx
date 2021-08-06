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

  return (
    <Hero title="" percentage="15" previousStep={previousStep} subtitle={`Perfeito, ${name}! Então vamos começar te conhecendo um pouco melhor. Qual é o seu momento atual de carreira?`} imageSize="big">
        <FormContainer>
          <SelectionCard icon={<EyeIcon />} title="Estou em busca da minha primeira graduação" />
          <SelectionCard icon={<CertifiedIcon />} title="Estou procurando uma pós graduação" />
          <SelectionCard icon={<XIcon />} title="Estou fazendo uma transição de carreira" />
        </FormContainer>
        {/* <ActionButton isDark={false} onClick={nextStep}>Continuar</ActionButton> */}
    </Hero>
  )
}
