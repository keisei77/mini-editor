import React from 'react';
import Toggle from './Toggle';
import BoldSvg from './BoldSvg';
import ItalicSvg from './ItalicSvg';
import UnderlineSvg from './UnderlineSvg';

export type ToolbarAction =
  | { type: 'bold'; payload: string }
  | { type: 'italic'; payload: string }
  | { type: 'underline'; payload: string }
  | { type: 'change'; payload: string };

export type ToolbarState = {
  content: string;
  bold: boolean;
  italic: boolean;
  underline: boolean;
};

interface Toolbar {
  content: string;
  toolbarState: ToolbarState;
  toolbarDispatch: React.Dispatch<ToolbarAction>;
}

const Toolbar = (props: Toolbar) => {
  const { toolbarState, toolbarDispatch } = props;

  return (
    <>
      <Toggle
        type="bold"
        label="粗体"
        enabled={toolbarState.bold}
        onClick={() =>
          toolbarDispatch({ type: 'bold', payload: toolbarState.content })
        }
      >
        <BoldSvg enabled={toolbarState.bold} />
      </Toggle>
      <Toggle
        type="italic"
        label="斜体"
        enabled={toolbarState.italic}
        onClick={() =>
          toolbarDispatch({ type: 'italic', payload: toolbarState.content })
        }
      >
        <ItalicSvg enabled={toolbarState.italic} />
      </Toggle>

      <Toggle
        type="underline"
        label="下划线"
        enabled={toolbarState.underline}
        onClick={() =>
          toolbarDispatch({ type: 'underline', payload: toolbarState.content })
        }
      >
        <UnderlineSvg enabled={toolbarState.underline} />
      </Toggle>
    </>
  );
};

export default Toolbar;
