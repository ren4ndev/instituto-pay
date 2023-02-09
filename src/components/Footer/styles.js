import styled from 'styled-components';

const SectionContainer = styled.footer`
  background-color: ${({ theme, color }) => theme.colors[color]};
  display: grid;
  grid-template-rows: [row1-start] 140px [row1-end row2-start] 1fr [row2-end row3-start] 70px [row3-end];
  grid-template-columns: [left-border] 260px [start] 1fr [end] 260px [right-border];
  min-height: fit-content;
  transition: all .4s ease;
  width: 100%;
`;

const InstitutionalArea = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.tertiary};
  display: flex;
  grid-column: left-border / right-border;
  grid-row: row1-start / row1-end;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const Logo = styled.img``;

const LinksArea = styled.div`
  border-bottom: ${({ theme }) => `1px solid ${theme.colors['grayscale-01']}`};
  display: flex;
  grid-column: start / end;
  grid-row: row2-start / row2-end;
  justify-content: space-between;
  height: 100%;
  padding: 79px 0 44px;
  width: 100%;
`;

const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;

  > h6, span {
    margin-bottom: 16px;
  }
`;

const SocialMediaColumn = styled.div`
  display: flex;
  flex-direction: column;

  > h6 {
    margin-bottom: 14px;
  }

  > span {
    margin-bottom: 9px;
  }
`;

const SocialMediaForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
  width: 440px;
`;

const EmailInput = styled.input`
  background-color: transparent;
  border: ${({ theme }) => `1px solid ${theme.colors['grayscale-03']}`};
  display: flex;
  font-size: 16px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.sans};
  padding: 14px 20px;
  height: 50px;
  justify-content: center;
  width: 304px;
`;

const SendButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: ${({ theme }) => `2px solid ${theme.colors.quarternary}`};
  display: flex;
  font-family: ${({ theme }) => theme.fonts.sans};
  padding: 15px 24px;
  height: 50px;
  justify-content: center;
  width: 128px;

  > span {
    margin-right: 16px;
  }
`;

const Icon = styled.img`

`;

const AppStoreArea = styled.div`
  display: flex;
  flex-direction: column;

  > h6 {
    margin-bottom: 8px;
  }
`;

const InfoArea = styled.div`
  align-items: center;
  display: flex;
  grid-column: start / end;
  grid-row: row3-start / row3-end;
  height: 100%;
  justify-content: space-between;
  width: 100%;
`;

export {
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
};
