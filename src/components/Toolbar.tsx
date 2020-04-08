import React, { useReducer, Reducer } from 'react';
import Toggle from './Toggle';

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
      />
      <Toggle
        type="italic"
        label="斜体"
        enabled={state.italic}
        onClick={() => dispatch({ type: 'italic' })}
      />
      <Toggle
        type="underline"
        label="下划线"
        enabled={state.underline}
        onClick={() => dispatch({ type: 'underline' })}
      />
    </>
  );
};

export default Toolbar;
