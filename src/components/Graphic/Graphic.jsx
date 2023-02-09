import React from 'react';
import PropTypes from 'prop-types';
import {
  GraphicArea,
  TextArea,
} from './styles';
import RoundProgressBar from '../RoundProgressBar';
import Typography from '../Typography';

function Graphic({
  title,
  description,
  percentage,
}) {
  return (
    <GraphicArea>
      <RoundProgressBar
        size={180}
        value={percentage}
        max={100}
        strokeWidth={7}
        stroke="#1A1A1A"
      />
      <TextArea>
        <Typography
          as="h6"
          type="heading-01"
          weight="bold"
          spacing="-0.72px"
          color="secondary"
        >
          {title}
        </Typography>
        <Typography
          as="h6"
          type="heading-02"
          color="grayscale-02"
        >
          {description}
        </Typography>
      </TextArea>
    </GraphicArea>
  );
}

Graphic.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Graphic;
