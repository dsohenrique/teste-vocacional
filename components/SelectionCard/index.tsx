import React, { FC } from 'react';
import { Card, Icon, Title, MinorCard, MinorTitle } from './styles';

interface ISelectionCard {
  icon: any;
  title: string;
}

const SelectionCard: FC<ISelectionCard> = ({ icon, title }) => {
  const hasIcon = icon && true;
  if (icon) {
    return (
      <Card>
        {icon && <Icon>{icon}</Icon>}
        <Title>{title}</Title>
      </Card>
    );
  }
  return (
    <MinorCard>
      <MinorTitle>{title}</MinorTitle>
    </MinorCard>
  );
};

export default SelectionCard;
