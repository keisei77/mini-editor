import React from 'react';
import classNames from 'classnames';
import './toggle.scss';
interface Toggle {
  type: string;
  src: any;
  label: string;
  enabled: boolean;
  onClick: () => void;
}

const Toggle = (props: Toggle) => {
  const { type, src, label, enabled, onClick } = props;
  return (
    <button
      title={label}
      onClick={onClick}
      className={classNames('rich-text-button', {
        'is-active': enabled,
      })}
    >
      <img src={src} alt={type} />
    </button>
  );
};

export default Toggle;
