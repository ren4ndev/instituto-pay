import styled from 'styled-components';

const HeaderComponent = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  padding: 33px 260px;
  width: 100%;
`;

const Logo = styled.img`

`;

const MenuNav = styled.nav`
  display: flex;
  width: 456px;
`;

const MenuList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 100%;
`;

const MenuItem = styled.li`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export {
  HeaderComponent,
  Logo,
  MenuNav,
  MenuList,
  MenuItem,
};
