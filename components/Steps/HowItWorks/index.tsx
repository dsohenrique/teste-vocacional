import React from 'react';
import Hero from '../../Hero'
import ActionButton from '../../ActionButton';
import { FormContainer, ButtonContainer } from './styles';

export default function HowItWorks({ goToTest, previousStep }: { goToTest: any, previousStep: any}) {
  return (
    <Hero title="" previousStep={previousStep} subtitle="Opa, será um prazer contar para você como elaboramos esse teste vocacional! Se liga:" imageSize="big">
      <FormContainer>
        <p>O nosso teste vocacional é um pouco diferente dos que você já viu ou fez por aí. A gente usa a teoria das inteligências múltiplas, de Gardner, como resultado, mas com umas perguntas beeem descontraídas e fora da curva. Por falar nisso, você conhece a teoria? Vamos falar um pouco sobre ela pra você entender melhor!</p>
        <br />
        <p>De acordo com a Teoria de Gardner, a vida humana atua em função de inteligências. O nosso cérebro tem capacidade de desenvolver 8 tipos diferentes de potencialidades, moldadas de acordo com as vivências históricas e culturais.</p>
        <br />
        <p>O estudo mostra que todos nós somos inteligentes múltiplos, mas existem aptidões que se destacam mais do que as outras e apontam para áreas específicas. Sendo assim, as tendências profissionais estão ligadas às inteligências e servem de base para a escolha.</p>
        <br />
        <p>Com base nisso, podemos te ajudar a tomar essa decisão tão importante! E aí, bora lá conhecer o seu perfil e as profissões que mais combinam com você?</p>
        <br />
        <ButtonContainer>
          <ActionButton onClick={goToTest} isDark={false}>
            Fazer o teste
          </ActionButton>
        </ButtonContainer>
        <br />
      </FormContainer>
    </Hero>
  )
}
