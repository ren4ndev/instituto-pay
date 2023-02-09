import React from 'react';
import featuredImg from '../../assets/banner.png';
import content from '../../locales/pt.json';
import GridSection from '../GridSection';
import Button from '../Button';
import Typography from '../Typography/styles';
import {
  FeaturedSectionArea,
  FeaturedImage,
  FeaturedContent,
  TextArea,
} from './styles';

function FeaturedSection() {
  return (
    <FeaturedSectionArea>
      <GridSection>
        <FeaturedImage src={featuredImg} />
        <FeaturedContent>
          <TextArea>
            <Typography
              as="h1"
              type="display-01"
              color="primary"
              weight="bold"
              spacing="-2.56px"
            >
              {content.featured.title}
            </Typography>
          </TextArea>
          <Button
            type="primary"
            text={content.featured.button}
          />
        </FeaturedContent>
      </GridSection>
    </FeaturedSectionArea>
  );
}

export default FeaturedSection;
