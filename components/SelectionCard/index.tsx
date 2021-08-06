import React, { FC, useState } from 'react';
import { Card, Icon, Title, MinorCard, MinorTitle } from './styles';

interface ISelectionCard {
  icon: any;
  title: string;
  onClick?: any;
  selected?: boolean;
}

const SelectionCard: FC<ISelectionCard> = ({
  icon,
  title,
  onClick,
  selected,
}) => {
  const hasIcon = icon && true;

  if (icon) {
    return (
      <Card onClick={onClick} selected={selected}>
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
