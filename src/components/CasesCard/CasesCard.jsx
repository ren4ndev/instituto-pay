import React from 'react';
import PropTypes from 'prop-types';
import {
  CardArea,
} from './styles';
import Typography from '../Typography';

function CasesCard({
  title,
  description,
  children,
}) {
  return (
    <CardArea>
      {children}
      <Typography
        as="h4"
        type="heading-01"
        weight="bold"
        spacing="-0.72px"
        color="secondary"
      >
        {title}
      </Typography>
      <Typography
        as="p"
        type="heading-02"
        weight="medium"
        color="grayscale-02"
      >
        {description}
      </Typography>
    </CardArea>
  );
}

CasesCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default CasesCard;
