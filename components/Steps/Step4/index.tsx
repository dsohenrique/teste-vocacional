import React, { useState } from 'react';
import Hero from '../../Hero'
import ActionButton from '../../ActionButton';
import InputText from '../../InputText';
import { FormContainer } from './styles';

export default function Step4({ nextStep, previousStep }: { nextStep: any, previousStep: any }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <Hero title="" previousStep={previousStep} subtitle="Perfeito, @Aluno! Então vamos começar te conhecendo um pouco melhor. Qual é o seu momento atual de carreira?" imageSize="big">
        <FormContainer>
          <InputText placeholder="Nome" value={name} onChange={(e: { target: { value: any; }; }) => setName(e.target.value)} />
          <InputText placeholder="Email" value={email} onChange={(e: { target: { value: any; }; }) => setEmail(e.target.value)} />
          <InputText placeholder="Telefone" value={phone} onChange={(e: { target: { value: any; }; }) => setPhone(e.target.value)} />
          <ActionButton isDark={false} onClick={nextStep}>Continuar</ActionButton>
        </FormContainer>
    </Hero>
  )
}
