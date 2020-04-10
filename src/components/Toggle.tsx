import React from 'react';
import classNames from 'classnames';
import './toggle.scss';
interface Toggle {
  type: string;
  children?: React.ReactNode;
  label: string;
  enabled: boolean;
  onClick: () => void;
}

const Toggle = (props: Toggle) => {
  const { children, label, enabled, onClick } = props;
  return (
    <button
      title={label}
      onClick={onClick}
      className={classNames('rich-text-button', {
        'is-active': enabled,
      })}
    >
      {children}
    </button>
  );
};

export default Toggle;
