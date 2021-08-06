import React, { FC } from 'react';
import { StyledActionButton } from './styles';

const ActionButton = ({ onClick, children, isDark = true }: { onClick: any, children: any, isDark?: boolean }) => {
  return (
    <StyledActionButton onClick={onClick} isDark={isDark}>
      {children}
    </StyledActionButton>
  );
};

export default ActionButton;
