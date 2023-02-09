import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import { StyledButton } from './styles';

function Button({
  text,
  type,
}) {
  return (
    <StyledButton type={type}>
      <Typography
        as="span"
        type="button"
        weight="bold"
        color={type}
      >
        {text}
      </Typography>
    </StyledButton>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
