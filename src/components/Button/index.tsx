import styled from '@emotion/styled';
import React, { ButtonHTMLAttributes } from 'react';


const StyledButton = styled.button`
  background-color: #3d485f;
  color: #fff;
  padding: 10px 38px;
  border-radius: 16px;
  border: none;
  font-weight: 500;
  transition: 0.25s ease;
  cursor: pointer;

  &:hover {
    background-color: #333c4f;
  }
`;

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: Props) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
