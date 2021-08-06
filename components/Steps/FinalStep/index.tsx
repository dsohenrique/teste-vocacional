import React, { FC } from 'react';
import TextBaloon from '../../TextBaloon';
import SelectionCard from '../../SelectionCard';
import {
  Valdisney,
  Beyoncelle,
  Justino,
  Logo,
  Advogado,
  Jornalista,
  Publicitario,
  Pedagogo,
} from './icons';
import Aptitude from '../../Aptitude';
import {
  Wrapper,
  Balloon,
  BalloonTitle,
  ProfileTitle,
  Description,
  ProfessionTitle,
  Professions,
  ProfessionDescription,
  Personalities,
  PersonalitiesList,
  Personality,
  YourAptitude,
  StyledApititudes,
} from './styles';

const FinalStep: FC = () => {
  const Aptitudes = [
    {
      percentage: '70',
      name: 'Perfil Intrapessoal',
      content:
        'Aqui inserimos um texto explicativo sobre o perfil de aderência do aluno, explicando as principais características desse perfil e quais as profissões que mais se dão bem nesse perfil, podemos falar também sobre celebridades que tem o mesmo perfil do resultado',
      professions: ['Advogado', 'Jornalista', 'Publicitário'],
    },
    {
      percentage: '70',
      name: 'Perfil Intrapessoal',
      content:
        'Aqui inserimos um texto explicativo sobre o perfil de aderência do aluno, explicando as principais características desse perfil e quais as profissões que mais se dão bem nesse perfil, podemos falar também sobre celebridades que tem o mesmo perfil do resultado',
      professions: ['Advogado', 'Jornalista', 'Publicitário'],
    },
    {
      percentage: '70',
      name: 'Perfil Intrapessoal',
      content:
        'Aqui inserimos um texto explicativo sobre o perfil de aderência do aluno, explicando as principais características desse perfil e quais as profissões que mais se dão bem nesse perfil, podemos falar também sobre celebridades que tem o mesmo perfil do resultado',
      professions: ['Advogado', 'Jornalista', 'Publicitário'],
    },
    {
      percentage: '70',
      name: 'Perfil Intrapessoal',
      content:
        'Aqui inserimos um texto explicativo sobre o perfil de aderência do aluno, explicando as principais características desse perfil e quais as profissões que mais se dão bem nesse perfil, podemos falar também sobre celebridades que tem o mesmo perfil do resultado',
      professions: ['Advogado', 'Jornalista', 'Publicitário'],
    },
    {
      percentage: '70',
      name: 'Perfil Intrapessoal',
      content:
        'Aqui inserimos um texto explicativo sobre o perfil de aderência do aluno, explicando as principais características desse perfil e quais as profissões que mais se dão bem nesse perfil, podemos falar também sobre celebridades que tem o mesmo perfil do resultado',
      professions: ['Advogado', 'Jornalista', 'Publicitário'],
    },
  ];
  return (
    <Wrapper>
      <Logo />
      <Balloon>
        <BalloonTitle>
          Você tem 80% de aderência com o perfil <b>Linguista!</b>
          <p> Se liga no que isso quer dizer:</p>
        </BalloonTitle>
      </Balloon>

      <ProfileTitle>Perfil Linguista</ProfileTitle>

      <Description>
        <p>
          Aqui inserimos um texto explicativo sobre o perfil de aderência do
          aluno, explicando as principais características desse perfil e quais
          as profissões que mais se dão bem nesse perfil, podemos falar também
          sobre celebridades que tem o mesmo perfil do resultado
        </p>
        <p>
          {' '}
          Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um
          leite divinis, qui tem lupuliz, matis, aguis e fermentis. Pra lá ,
          depois divoltis porris, paradis. Leite de capivaris, leite de mula
          manquis sem cabeça. Mé faiz elementum girarzis, nisi eros vermeio.
        </p>
        <p>
          Aenean aliquam molestie leo, vitae iaculis nisl. Quem num gosta di mé,
          boa gentis num é. Praesent malesuada urna nisi, quis volutpat erat
          hendrerit non.{' '}
        </p>
      </Description>

      <ProfessionTitle>
        Profissões que tem tudo a ver com esse perfil
      </ProfessionTitle>
      <ProfessionDescription>
        Aqui damos uma breve explicação sobre o porquê essas profissões tem tudo
        a ver com o perfil e um texto direcionando para o guia de carreiras do
        tipo ”Clique nos cards abaixo para saber tudo sobre a profissão e como é
        a jornada até se tornar um profissional”
      </ProfessionDescription>
      <Professions>
        <SelectionCard icon={Advogado()} title={'Advogado'} />
        <SelectionCard icon={Jornalista()} title={'Jornalista'} />
        <SelectionCard icon={Publicitario()} title={'Publicitários'} />
        <SelectionCard icon={Pedagogo()} title={'Pedagogo'} />
      </Professions>

      <Personalities>Personalidades que também são linguistas</Personalities>
      <PersonalitiesList>
        <Personality>
          <Valdisney />
          <span> Valdisneydersson </span>
        </Personality>
        <Personality>
          <Valdisney />
          <span> Beyoncelle </span>
        </Personality>
        <Personality>
          <Valdisney />
          <span> Justino Borges </span>
        </Personality>
      </PersonalitiesList>

      <YourAptitude>Suas outras aptidões</YourAptitude>
      <StyledApititudes>
        {Aptitudes.map(({ name, percentage, content, professions }, index) => (
          <Aptitude
            key={index}
            percentage={percentage}
            name={name}
            content={content}
            professions={professions}
          />
        ))}
      </StyledApititudes>
    </Wrapper>
  );
};

export default FinalStep;
