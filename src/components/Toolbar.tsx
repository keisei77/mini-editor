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
  content: string;
  bold: boolean;
  italic: boolean;
  underline: boolean;
};

function reducer(state: ToolbarState, action: ToolbarAction) {
  const currentSelection = window.getSelection();
  if (currentSelection) {
    const { anchorOffset, focusOffset } = currentSelection;

    switch (action.type) {
      case 'bold':
        const currentContent = state.content;
        return { ...state, bold: !state.bold };
      case 'italic':
        return { ...state, italic: !state.italic };
      case 'underline':
        return { ...state, underline: !state.underline };
    }
  } else {
    return state;
  }
}

interface Toolbar {
  content: string;
}

const Toolbar = (props: Toolbar) => {
  const { content } = props;

  const [state, dispatch] = useReducer<Reducer<ToolbarState, ToolbarAction>>(
    reducer,
    {
      content,
      bold: false,
      italic: false,
      underline: false,
    }
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
