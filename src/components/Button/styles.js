import styled from 'styled-components';

const StyledButton = styled.button`
  align-items: center;
  background-color: ${({ theme, type }) => theme.buttons[type].backgroundColor};
  border: ${({ theme, type }) => `3px solid ${theme.buttons[type].borderColor}`};
  display: flex;
  font-family: ${({ theme }) => theme.fonts.sans};
  height: 52px;
  justify-content: center;
  width: 200px;
`;

export {
  // eslint-disable-next-line import/prefer-default-export
  StyledButton,
};
