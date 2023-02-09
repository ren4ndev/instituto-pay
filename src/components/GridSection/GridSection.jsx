import React from 'react';

import SectionContainer from './styles';

// eslint-disable-next-line react/prop-types
function GridSection({ children, color }) {
  return (
    <SectionContainer color={color}>
      {children}
    </SectionContainer>
  );
}

export default GridSection;
