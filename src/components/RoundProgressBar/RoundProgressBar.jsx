import React from 'react';
import PropTypes from 'prop-types';

function RoundProgressBar({
  size,
  value,
  max,
  strokeWidth,
  stroke,
}) {
  const radius = (size - strokeWidth) / 2;
  const insideRadius = ((size - 20) - 1) / 2;
  const viewBox = `0 0 ${size} ${size}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * value) / max;
  const percentage = ((value / max) * 100).toFixed();
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
    >
      <circle
        fill="none"
        stroke="#CCCCCC"
        cx={size / 2}
        cy={size / 2}
        r={insideRadius}
        strokeWidth="1px"
      />
      <circle
        fill="none"
        stroke={stroke}
        strokeLinecap="square"
        strokeLinejoin="square"
        strokeDasharray={dashArray}
        strokeDashoffset={dashOffset}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text
        x="50%"
        y="50%"
        dy="5px"
        dx="20px"
        textAnchor="end"
        dominantBaseline="middle"
        fill={stroke}
        style={
          {
            fontSize: '47px',
            fontWeight: 'bold',
            lineHeight: '56px',
            fontFamily: '"DM Sans", sans-serif',
            letterSpacing: '-2.82px',
          }
        }
      >
        {`${percentage}`}
      </text>
      <text
        x="50%"
        y="50%"
        dy="5px"
        dx="20px"
        textAnchor="start"
        dominantBaseline="auto"
        fill={stroke}
        style={
          {
            fontSize: '27px',
            fontWeight: 'bold',
            lineHeight: '28px',
            fontFamily: '"DM Sans", sans-serif',
            letterSpacing: '-0.81px',
          }
        }
      >
        %
      </text>
    </svg>
  );
}

RoundProgressBar.propTypes = {
  size: PropTypes.number,
  value: PropTypes.number,
  max: PropTypes.number,
  strokeWidth: PropTypes.number,
  stroke: PropTypes.string,
};

RoundProgressBar.defaultProps = {
  size: 200,
  value: 25,
  max: 100,
  strokeWidth: 10,
  stroke: 'black',
};

// Referenced Pen: https://codepen.io/naturalclar/pen/GONgVO

export default RoundProgressBar;
