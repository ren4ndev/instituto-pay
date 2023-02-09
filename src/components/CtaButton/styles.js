import styled from 'styled-components';

const Button = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  font-family: ${({ theme }) => theme.fonts.sans};
  display: flex;
  height: 21px;
`;

const Icon = styled.img`
  margin-left: 8px;
`;

export {
  // eslint-disable-next-line import/prefer-default-export
  Button,
  Icon,
};
