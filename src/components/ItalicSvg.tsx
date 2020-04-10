import React from 'react';

interface ItalicSvg {
  enabled: boolean;
}

const ItalicSvg = (props: ItalicSvg) => {
  const { enabled = false } = props;
  return (
    <svg
      fill={enabled ? '#00b4ff' : '#000'}
      className="icon"
      viewBox="0 0 1024 1024"
      width="20"
      height="20"
    >
      <path d="M725.333333 192v85.333333h-82.645333l-170.624 469.333334H554.666667v85.333333H298.666667v-85.333333h82.56l170.666666-469.333334H469.333333v-85.333333h256z"></path>
    </svg>
  );
};

export default ItalicSvg;
