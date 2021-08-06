import React, { FC, useState } from 'react';
import {
  Aptitude,
  Header,
  Percentage,
  Name,
  Content,
  Text,
  Professions,
  Profession,
} from './styles';

interface IAptitude {
  percentage: string;
  content: string;
  professions: string[];
  name: string;
}

const AptitudeComponent: FC<IAptitude> = ({
  percentage,
  content,
  professions,
  name,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Aptitude isOpen={isOpen}>
      <Header onClick={() => setIsOpen(!isOpen)}>
        <Percentage>{percentage}%</Percentage>
        <Name>{name}</Name>
        <svg
          width="24"
          height="13"
          viewBox="0 0 24 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.1161 0.782741C21.6043 0.294585 22.3957 0.294585 22.8839 0.782741C23.372 1.2709 23.372 2.06235 22.8839 2.55051L12.8839 12.5505C12.3957 13.0387 11.6043 13.0387 11.1161 12.5505L1.11611 2.55051C0.627958 2.06235 0.627958 1.2709 1.11611 0.782741C1.60427 0.294585 2.39573 0.294585 2.88388 0.782741L12 9.89886L21.1161 0.782741Z"
            fill="#666666"
          />
        </svg>
      </Header>
      <Content isOpen={isOpen}>
        <Text>{content}</Text>
        <Professions>
          {professions.map((profession, index) => (
            <Profession key={index}>{profession}</Profession>
          ))}
        </Professions>
      </Content>
    </Aptitude>
  );
};

export default AptitudeComponent;
