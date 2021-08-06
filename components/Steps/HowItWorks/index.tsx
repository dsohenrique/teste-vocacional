import React from 'react';
import Hero from '../../Hero'
import { FormContainer } from './styles';

export default function HowItWorks({ previousStep }: { previousStep: any}) {
  return (
    <Hero title="" subtitle="Opa, será um prazer contar para você como elaboramos esse teste vocacional! Se liga:" imageSize="big">
        <FormContainer>
          <p>Aqui inserimos um texto explicativo sobre como elaboramos o teste vocacional, quais as suas vantagens e qual resultado esperamos para o aluno que o faz.</p>
          <br />
          <p>Teoria das inteligências múltiplas: </p>
          <p>Segundo a Teoria de Gardner, a vida humana atua em função de inteligências. O nosso cérebro tem a capacidade de desenvolver 8 tipos diferentes de potencialidades, moldadas de acordo com as vivências históricas e culturais.</p>
          <br />
          <p>O estudo revela que todos nós somos inteligentes múltiplos, porém existem aptidões que se destacam mais do que as outras e apontam para determinadas áreas. O que leva as pessoas a potencializar as capacidades são os incentivos educacionais e os trajetos que percorrem.</p>
          <br />
          <p>Sendo assim, as tendências profissionais estão ligadas às inteligências e servem de base para as escolhas. Geralmente, atrelamos a ideia de inteligência ao vasto conhecimento acadêmico. No entanto, cada sujeito tem habilidades individuais que independem de méritos escolares.</p>
        </FormContainer>
    </Hero>
  )
}
