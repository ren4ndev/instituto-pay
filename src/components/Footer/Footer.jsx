import React from 'react';
import logo from '../../assets/instituto_pay_white.png';
import icon from '../../assets/paper-plane.svg';
import content from '../../locales/pt.json';
import Typography from '../Typography';
import AppStores from '../AppStores';
import {
  SectionContainer,
  InstitutionalArea,
  Logo,
  LinksArea,
  LinksColumn,
  SocialMediaColumn,
  SocialMediaForm,
  EmailInput,
  SendButton,
  Icon,
  AppStoreArea,
  InfoArea,
} from './styles';

function Footer() {
  return (
    <SectionContainer>
      <InstitutionalArea>
        <Logo src={logo} />
      </InstitutionalArea>
      <LinksArea>
        {content.footer.columns.map((item) => (
          <LinksColumn>
            <Typography
              as="h6"
              color="secondary"
              type="heading-01"
              weight="bold"
              spacing="-0.72px"
            >
              {item.title}
            </Typography>
            {item.sublinks.map((subItem) => (
              <Typography
                color="grayscale-02"
                type="heading-02"
              >
                {subItem}
              </Typography>
            ))}
          </LinksColumn>
        ))}
        <SocialMediaColumn>
          <Typography
            as="h6"
            color="secondary"
            type="heading-01"
            weight="bold"
            spacing="-0.72px"
          >
            {content.footer.news.title}
          </Typography>
          <Typography
            color="grayscale-02"
            type="heading-02"
          >
            E-mail
          </Typography>
          <SocialMediaForm>
            <EmailInput placeholder="Digite aqui seu e-mail" />
            <SendButton>
              <Typography
                color="quarternary"
                type="button"
                weight="bold"
              >
                Enviar
              </Typography>
              <Icon src={icon} />
            </SendButton>
          </SocialMediaForm>
          <AppStoreArea>
            <Typography
              as="h6"
              color="secondary"
              type="heading-01"
              weight="bold"
              spacing="-0.72px"
            >
              {content.footer.news.cta}
            </Typography>
            <AppStores />
          </AppStoreArea>
        </SocialMediaColumn>
      </LinksArea>
      <InfoArea>
        <Typography
          color="grayscale-02"
          type="heading-02"
        >
          {content.footer.info.rights}
        </Typography>
        <Typography
          color="grayscale-02"
          type="heading-02"
        >
          {content.footer.info.title}
        </Typography>
      </InfoArea>
    </SectionContainer>
  );
}

export default Footer;
