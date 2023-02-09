import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import {
  ContentBoxArea,
  TitleArea,
  SubtitleArea,
  DescriptionArea,
} from './styles';

function ContentBox({
  number,
  title,
  subtitle,
  description,
  type,
  children,
}) {
  return (
    <ContentBoxArea>
      <TitleArea>
        <Typography
          color={type}
          type="body-01"
          weight="bold"
        >
          {number}
        </Typography>
        <Typography
          as="h2"
          color={type}
          type="display-02"
          weight="bold"
          spacing="-1.71px"
        >
          {title}
        </Typography>
      </TitleArea>
      <SubtitleArea>
        <Typography
          as="h4"
          color={type}
          type="body-01"
          weight="bold"
        >
          {subtitle}
        </Typography>
      </SubtitleArea>
      <DescriptionArea>
        <Typography
          as="p"
          color={type === 'primary' ? type : 'grayscale-02'}
          type="body-01"
          weight="bold"
        >
          {description}
        </Typography>
        {children}
      </DescriptionArea>
    </ContentBoxArea>
  );
}

ContentBox.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ContentBox;
