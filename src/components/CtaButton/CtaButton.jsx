import React from 'react';
import PropTypes from 'prop-types';
import icon from '../../assets/arrow-right.svg';
import Typography from '../Typography';
import {
  Button,
  Icon,
} from './styles';

function CtaButton({
  text,
}) {
  return (
    <Button>
      <Typography
        type="button"
        color="secondary"
        weight="bold"
      >
        {text}
      </Typography>
      <Icon src={icon} />
    </Button>
  );
}

CtaButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CtaButton;
