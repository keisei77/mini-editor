import React, { useReducer, Reducer } from 'react';
import Toggle from './Toggle';
import BoldSvg from './BoldSvg';
import ItalicSvg from './ItalicSvg';
import UnderlineSvg from './UnderlineSvg';

export type ToolbarAction =
  | { type: 'bold' }
  | { type: 'italic' }
  | { type: 'underline' };

export type ToolbarState = {
  bold: boolean;
  italic: boolean;
  underline: boolean;
};

const initialState: ToolbarState = {
  bold: false,
  italic: false,
  underline: false,
};

function reducer(state: ToolbarState, action: ToolbarAction) {
  switch (action.type) {
    case 'bold':
      return { ...state, bold: !state.bold };
    case 'italic':
      return { ...state, italic: !state.italic };
    case 'underline':
      return { ...state, underline: !state.underline };
  }
}

const Toolbar = () => {
  const [state, dispatch] = useReducer<Reducer<ToolbarState, ToolbarAction>>(
    reducer,
    initialState
  );

  return (
    <>
      <Toggle
        type="bold"
        label="粗体"
        enabled={state.bold}
        onClick={() => dispatch({ type: 'bold' })}
      >
        <BoldSvg enabled={state.bold} />
      </Toggle>
      <Toggle
        type="italic"
        label="斜体"
        enabled={state.italic}
        onClick={() => dispatch({ type: 'italic' })}
      >
        <ItalicSvg enabled={state.italic} />
      </Toggle>

      <Toggle
        type="underline"
        label="下划线"
        enabled={state.underline}
        onClick={() => dispatch({ type: 'underline' })}
      >
        <UnderlineSvg enabled={state.underline} />
      </Toggle>
    </>
  );
};

export default Toolbar;
