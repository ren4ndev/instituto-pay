import React from 'react';
import firstRowImage from '../../assets/celulardeitado.png';
import secondRowImage from '../../assets/celularnuvem.png';
import content from '../../locales/pt.json';
import ContentBox from '../ContentBox';
import CtaButton from '../CtaButton';
import AppStores from '../AppStores';
import {
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
} from './styles';

function DoubledSection() {
  return (
    <SectionContainer>
      <FirstRowBackground>
        <RoundedBorder />
      </FirstRowBackground>
      <FirstRowContent>
        <FirstRowImage src={firstRowImage} />
        <ContentBoxArea>
          <ContentBox
            number={content.app.number}
            title={content.app.title}
            subtitle={content.app.subtitle}
            description={content.app.description}
            type="primary"
          >
            <AppStores />
          </ContentBox>
        </ContentBoxArea>
      </FirstRowContent>
      <SecondRowContent>
        <ContentBox
          number={content.cloud.number}
          title={content.cloud.title}
          subtitle={content.cloud.subtitle}
          description={content.cloud.description}
          type="secondary"
        >
          <CtaButton text={content.cloud.button} />
        </ContentBox>
      </SecondRowContent>
      <SecondRowImage src={secondRowImage} />
      <DottedMargin />
      <DottedBackground />
    </SectionContainer>
  );
}

export default DoubledSection;
