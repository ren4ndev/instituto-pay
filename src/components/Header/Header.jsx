import React from 'react';
import {
  HeaderComponent,
  Logo,
  MenuNav,
  MenuList,
  MenuItem,
} from './styles';
import content from '../../locales/pt.json';
import Typography from '../Typography';
import logo from '../../assets/instituto_pay_logo.png';

function Header() {
  return (
    <HeaderComponent>
      <Logo src={logo} />
      <MenuNav>
        <MenuList>
          {content.header.menu.map((item) => (
            <MenuItem key={item.text}>
              <Typography
                type="caption-02"
                weight="bold"
                color="secondary"
                disabled={item.disabled}
              >
                {item.number}
              </Typography>
              <Typography
                type="body-02"
                weight="bold"
                color="secondary"
                disabled={item.disabled}
              >
                {item.text}
              </Typography>
            </MenuItem>
          ))}
        </MenuList>
      </MenuNav>
    </HeaderComponent>
  );
}

export default Header;
