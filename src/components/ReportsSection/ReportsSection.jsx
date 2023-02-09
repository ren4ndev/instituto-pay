import React from 'react';
import { ReportsSectionArea } from './styles';
import GridSection from '../GridSection';
import Graphic from '../Graphic';
import content from '../../locales/pt.json';

function ReportsSection() {
  return (
    <GridSection>
      <ReportsSectionArea>
        {content.reports.map((item) => (
          <Graphic
            key={item.title}
            title={item.title}
            description={item.description}
            percentage={item.percentage}
          />
        ))}
      </ReportsSectionArea>
    </GridSection>
  );
}

export default ReportsSection;
