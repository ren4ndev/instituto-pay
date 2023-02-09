import styled from 'styled-components';
import SectionContainer from '../GridSection/styles';

const HomeSectionArea = styled.div`
  height: 500px;
`;

const GridSectionArea = styled(SectionContainer)`
  grid-template-rows: [top-border] 116px [start] 364px [end] 60px [bottom-border];
`;

const ContentArea = styled.div`
  grid-column: start / col-8;
  grid-row: start / end;
`;

const DottedMargin = styled.div`
  align-self: flex-end;
  background-image: ${({ theme }) => `radial-gradient(${theme.colors['grayscale-01']} 3px, transparent 3px)`};
  background-color: transparent;
  background-position: -11px -11px;
  background-size: 34px 34px;
  height: 335px;
  grid-column: left-border / start;
  grid-row: start / end;
  width: 145px;
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
  width: 556px;
`;

const Image = styled.img`
  align-self: flex-end;
  grid-column: start / end;
  grid-row: start / end;
  justify-self: flex-end;
  z-index: 2;
`;

export {
  HomeSectionArea,
  GridSectionArea,
  ContentArea,
  DottedBackground,
  DottedMargin,
  Image,
};
