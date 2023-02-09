import styled from 'styled-components';

const FeaturedSectionArea = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 860px;
`;

const FeaturedImage = styled.img`
  grid-column: left-border / right-border;
  grid-row: top-border / bottom-border;
  position: relative;
  width: 100%;
`;

const FeaturedContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-column: left-border / right-border;
  grid-row: top-border / bottom-border;
  justify-content: center;
  justify-self: center;
  width: 680px;
  z-index: 2;
`;

const TextArea = styled.div`
  margin-bottom: 25px;

  > h1 {
    text-align: center;
  }
`;

export {
  FeaturedSectionArea,
  FeaturedImage,
  FeaturedContent,
  TextArea,
};
