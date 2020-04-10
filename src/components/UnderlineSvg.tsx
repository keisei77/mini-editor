import React from 'react';

interface UnderlineSvg {
  enabled: boolean;
}

const UnderlineSvg = (props: UnderlineSvg) => {
  const { enabled = false } = props;
  return (
    <svg
      fill={enabled ? '#00b4ff' : '#000'}
      className="icon"
      viewBox="0 0 1024 1024"
      width="20"
      height="20"
    >
      <path
        d="M812.714667 810.666667v64H213.333333v-64h599.381334zM379.370667 160v64H309.333333v279.616c0 103.829333 87.253333 188.949333 196.778667 191.914667l5.888 0.085333c112.256 0 202.666667-86.314667 202.666667-192V224H640v-64h208.704v64H778.666667v279.616c0 139.562667-116.117333 252.522667-260.010667 255.914667l-6.656 0.085333c-146.944 0-266.666667-114.282667-266.666667-256V224H170.666667v-64h208.704z"
        p-id="2572"
      ></path>
    </svg>
  );
};

export default UnderlineSvg;
