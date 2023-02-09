import styled from 'styled-components';

const ContentBoxArea = styled.div`
  display: grid;
  grid-template-columns: [start] 160px [middle] 320px [end];
  grid-template-rows: [start] auto [middle] auto [end];
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  max-width: 560px;
  width: ${({ width }) => width};
`;

const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: start / end;
  grid-row: start / middle;
`;

const SubtitleArea = styled.div`
  grid-column: start / middle;
  grid-row: middle / end;
  padding-top: 3px;
`;

const DescriptionArea = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: middle / end;
  grid-row: middle / end;

  > p {
    margin-bottom: 35px;
  }
`;

export {
  ContentBoxArea,
  TitleArea,
  SubtitleArea,
  DescriptionArea,
};
