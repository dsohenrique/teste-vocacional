import React, { FC } from 'react';
import TextBaloon from '../../TextBaloon';
import SelectionCard from '../../SelectionCard';
import {
  Valdisney,
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
  Beyoncelle,
  Justino,
} from './styles';

const FinalStep: FC = () => {
  const Aptitudes = [
    {
      percentage: '60',
      name: 'Perfil Intrapessoal',
      content:
        'Ter o perfil Intrapessoal quer dizer que o autoconhecimento é um ponto muito forte seu. Isso quer dizer que você é capaz de entender suas próprias motivações, desejos e gostos e, com isso, aplicá-los a seu favor.',
      professions: ['Psicologia', 'Filosofia', 'Sociologia'],
    },
    {
      percentage: '70',
      name: 'Perfil Músical',
      content:
        'Aqui inserimos um texto explicativo sobre o perfil de aderência do aluno, explicando as principais características desse perfil e quais as profissões que mais se dão bem nesse perfil, podemos falar também sobre celebridades que tem o mesmo perfil do resultado',
      professions: ['Advogado', 'Jornalista', 'Publicitário'],
    },
    {
      percentage: '30',
      name: 'Perfil Intrapessoal',
      content:
        'Uau! A inteligência Musical manifesta-se por meio da habilidade com tudo que está relacionado ao som. Isso quer dizer que você tem pontos fortes para apreciar, compor ou reproduzir uma peça musical. ',
      professions: ['Produção Musical', 'Música', 'DJ'],
    },
    {
      percentage: '30',
      name: 'Perfil Lógico-Matemático',
      content:
        'Algumas estratégias educacionais eficientes para quem tem as suas características são aquelas que utilizam como forma de aprender métodos como resolução de problemas, classificações, tabelas e gráficos. ',
      professions: ['Estatística', 'Física', 'Informática'],
    },
    {
      percentage: '60',
      name: 'Perfil Interpessoal',
      content:
        'Uma pessoa com forte inteligência interpessoal é capaz de gerenciar as relações com mais sensibilidade facilmente, conquistar amigos com mais facilidade e lida bem inclusive com as pessoas mais difíceis.',
      professions: ['Jornalistas', 'Professores', 'Turismólogos'],
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
          Uau! Dá pra ver que você é uma pessoa que tem habilidades
          linguísticas! Isso quer dizer que é capaz de entender e transmitir
          facilmente as formas de linguagens, sejam elas escritas, orais,
          gestuais, corporais ou com outras formas de comunicação.
        </p>
        <p>
          {' '}
          Como a linguística é um tipo de inteligência universal, o ser humano
          consegue desenvolvê-la independente dos estímulos educacionais na
          sociedade onde vive. No entanto, quem apresenta essa inteligência,
          acaba tendo uma facilidade maior com a linguagem humana. manquis sem
          cabeça. Mé faiz elementum girarzis, nisi eros vermeio.
        </p>
        <p>
          Você tem facilidade em captar informações, convencer as pessoas,
          adaptar a linguagem em vários formatos, memorizar ideias e informações
          e pode ter sensibilidade para sons e ritmos.
        </p>
      </Description>

      <ProfessionTitle>
        Profissões que tem tudo a ver com esse perfil
      </ProfessionTitle>
      <ProfessionDescription>
        Quem tem esse tipo de perfil conta com capacidades mais afloradas para
        algumas profissões. Chegou a hora de conhecê-las!
      </ProfessionDescription>
      <Professions>
        <SelectionCard icon={Advogado()} title={'Artes Cênicas'} />
        <SelectionCard icon={Jornalista()} title={'Jornalismo'} />
        <SelectionCard icon={Publicitario()} title={'Publicidade'} />
        <SelectionCard icon={Pedagogo()} title={'Direito'} />
      </Professions>

      <Personalities>Personalidades que também são linguistas</Personalities>
      <PersonalitiesList>
        <Personality>
          <Beyoncelle src={'https://i.imgur.com/FE0lDkM.png'} />
          <span> Emma Watson</span>
        </Personality>
        <Personality>
          <Valdisney />
          <span> Marilyn Monroe</span>
        </Personality>
        <Personality>
          <Justino
            src={
              'https://cdn.discordapp.com/attachments/872823344221810699/873302421152096296/2018-10_ILUSTRA_71.png'
            }
          />
          <span> Renata Vasconcellos</span>
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
