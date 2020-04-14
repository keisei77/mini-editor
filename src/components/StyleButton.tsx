import React from 'react';

interface StyleButton {
  active: any;
  style: any;
  label: any;
  onToggle: any;
}

function StyleButton(props: StyleButton) {
  const { active, style, label, onToggle } = props;
  let className = 'RichEditor-styleButton';
  if (active) {
    className += ' RichEditor-activeButton';
  }

  return (
    <span
      style={{
        margin: '0 10px',
        display: 'inline-block',
        border: '1px solid',
      }}
      className={className}
      onMouseDown={(e) => {
        e.preventDefault();
        onToggle(style);
      }}
    >
      {label}
    </span>
  );
}

export default StyleButton;
