import React from 'react';
import budgetImage from '../../assets/celularbanner.png';
import content from '../../locales/pt.json';
import ContentBox from '../ContentBox';
import CtaButton from '../CtaButton';
import {
  HomeSectionArea,
  GridSectionArea,
  ContentArea,
  DottedBackground,
  DottedMargin,
  Image,
} from './styles';

function HomeSection() {
  return (
    <HomeSectionArea>
      <GridSectionArea>
        <ContentArea>
          <ContentBox
            number={content.home.number}
            title={content.home.title}
            subtitle={content.home.subtitle}
            description={content.home.description}
            type="secondary"
          >
            <CtaButton text={content.home.button} />
          </ContentBox>
        </ContentArea>
        <DottedBackground />
        <DottedMargin />
        <Image src={budgetImage} />
      </GridSectionArea>
    </HomeSectionArea>
  );
}

export default HomeSection;
