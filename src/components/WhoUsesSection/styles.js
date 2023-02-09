import styled from 'styled-components';

const WhoUsesSectionArea = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: start / end;
  grid-row: start / end;
`;

const TitleArea = styled.div`
  align-self: center;
  margin-bottom: 40px;
`;

const CardsArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardImage = styled.img`
  max-width: 320px;
  margin-bottom: 32px;
`;

export {
  // eslint-disable-next-line import/prefer-default-export
  WhoUsesSectionArea,
  TitleArea,
  CardsArea,
  CardImage,
};
