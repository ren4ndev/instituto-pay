import styled from 'styled-components';

const GraphicArea = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  max-width: 160px;

  > h6 {
    margin-bottom: 16px;
  }
`;

export {
  GraphicArea,
  TextArea,
};
