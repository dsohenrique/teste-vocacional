import React, { FC } from 'react';
import { Card, Icon, Title } from './styles';

interface ISelectionCard {
  icon: any;
  title: string;
}

export const SelectionCard: FC<ISelectionCard> = ({ icon, title }) => {
  return (
    <Card>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
    </Card>
  );
};
