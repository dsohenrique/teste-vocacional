import React, { useEffect, useState } from 'react';
import Hero from '../../Hero'
import ActionButton from '../../ActionButton';
import InputText from '../../InputText';
import { FormContainer } from './styles';

export default function Step3({ nextStep, previousStep }: { nextStep: any, previousStep: any }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    // Get answers from localStorage
    if (localStorage.getItem('@teste-vocacional:name')) {
      setName(localStorage.getItem('@teste-vocacional:name') || "");
    }
    if (localStorage.getItem('@teste-vocacional:email')) {
      setEmail(localStorage.getItem('@teste-vocacional:email') || "");
    }
    if (localStorage.getItem('@teste-vocacional:phone')) {
      setPhone(localStorage.getItem('@teste-vocacional:phone') || "");
    }
  }, []);

  const handleSubmit = () => {
    localStorage.setItem('@teste-vocacional:name', name);
    localStorage.setItem('@teste-vocacional:email', email);
    localStorage.setItem('@teste-vocacional:phone', phone);
    nextStep();
  }

  return (
    <Hero title="" percentage="10" previousStep={previousStep} subtitle="Antes de começar, me fala: como você gosta que te chamem e como eu posso te encontrar depois do teste?" imageSize="small">
      <FormContainer>
        <InputText placeholder="Nome" value={name} onChange={(e: { target: { value: any; }; }) => setName(e.target.value)} />
        <InputText placeholder="Email" value={email} onChange={(e: { target: { value: any; }; }) => setEmail(e.target.value)} />
        <InputText placeholder="Telefone" value={phone} onChange={(e: { target: { value: any; }; }) => setPhone(e.target.value)} />
        <ActionButton isDark={false} onClick={handleSubmit}>Continuar</ActionButton>
      </FormContainer>
    </Hero>
  )
}
