import React from 'react';
import classNames from 'classnames';

interface Toggle {
  type: string;
  label: string;
  enabled: boolean;
  onClick: () => void;
}

const Toggle = (props: Toggle) => {
  const { type, label, enabled, onClick } = props;
  return (
    <button
      title={label}
      onClick={onClick}
      className={classNames({
        'is-active': enabled,
      })}
    >
      {type}
    </button>
  );
};

export default Toggle;
