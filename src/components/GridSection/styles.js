import styled from 'styled-components';

const SectionContainer = styled.section`
  background-color: ${({ theme, color }) => theme.colors[color]};
  column-gap: 16px;
  display: grid;
  grid-template-rows: [top-border] 60px [start] 1fr [end] 60px [bottom-border];
  grid-template-columns: [left-border] 260px [start col-1] 1fr [col-2] 1fr [col-3] 1fr [col-4] 1fr [col-5] 1fr [col-6] 1fr [col-7] 1fr [col-8] 1fr [col-9] 1fr [col-10] 1fr [col-11] 1fr [col-12] 1fr [end] 260px [right-border];
  min-height: fit-content;
  height: 100%;
  transition: all .4s ease;
  width: 100%;
`;

export default SectionContainer;
