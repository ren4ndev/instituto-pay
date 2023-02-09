import styled from 'styled-components';

const SectionContainer = styled.section`
  background-color: ${({ theme, color }) => theme.colors[color]};
  display: grid;
  grid-template-rows: [top-border] 80px [start row1-start] 1fr [row1-end row2-start] 1fr [row1-end end] 80px [bottom-border];
  grid-template-columns: [left-border] 260px [start col-1] 1fr [col-2] 1fr [col-3] 1fr [col-4] 1fr [col-5] 1fr [col-6] 1fr [col-7] 1fr [col-8] 1fr [col-9] 1fr [col-10] 1fr [col-11] 1fr [col-12] 1fr [end] 260px [right-border];
  min-height: fit-content;
  height: 1320px;
  transition: all .4s ease;
  width: 100%;
`;

const FirstRowBackground = styled.div`
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 0 0 0 120px;
  display: flex;
  grid-column: start / right-border;
  grid-row: top-border / row1-end;
  justify-content: flex-start;
  justify-self: flex-end;
  width: 1420px;
`;

const RoundedBorder = styled.div`
  background-color: transparent;
  border-left: ${({ theme }) => `3px dashed ${theme.colors.primary}`};
  border-bottom: ${({ theme }) => `3px dashed ${theme.colors.primary}`};
  border-radius: 0 0 0 60px;
  height: 254px;
  margin: 70px;
  width: 581px;
`;

const FirstRowContent = styled.div`
  align-items: flex-start;
  display: flex;
  grid-column: start / end;
  grid-row: start / row1-end;
  justify-content: flex-start;
  width: 100%;
  z-index: 2;
`;

const FirstRowImage = styled.img`

`;

const ContentBoxArea = styled.div`
  margin-top: 107px;
`;

const SecondRowContent = styled.div`
  align-items: flex-start;
  display: flex;
  grid-column: start / end;
  grid-row: row2-start / end;
  justify-content: space-between;
  padding: 40px 0 0 120px;
  height: 536px;
  width: 100%;
`;

const SecondRowImage = styled.img`
  align-self: flex-end;
  grid-column: start / end;
  grid-row: start / end;
  justify-self: flex-end;
  margin: 0 120px 21px 0;
  z-index: 2;
`;

const DottedMargin = styled.div`
  align-self: flex-start;
  background-image: ${({ theme }) => `radial-gradient(${theme.colors['grayscale-01']} 3px, transparent 3px)`};
  background-color: transparent;
  background-position: -11px -11px;
  background-size: 34px 34px;
  height: 434px;
  grid-column: start/ start;
  grid-row: start / end;
  justify-self: flex-start;
  width: 137px;
`;

const DottedBackground = styled.div`
  align-self: flex-end;
  background-image: ${({ theme }) => `radial-gradient(${theme.colors['grayscale-01']} 3px, transparent 3px)`};
  background-color: transparent;
  background-position: -11px -11px;
  background-size: 34px 34px;
  height: 335px;
  grid-column: start / end;
  grid-row: start / end;
  justify-self: flex-end;
  margin: 0 120px 21px 0;
  width: 434px;
`;

export {
  SectionContainer,
  FirstRowBackground,
  RoundedBorder,
  FirstRowContent,
  FirstRowImage,
  ContentBoxArea,
  SecondRowContent,
  SecondRowImage,
  DottedMargin,
  DottedBackground,
};
