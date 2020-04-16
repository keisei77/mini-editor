import React, { useReducer, Reducer } from 'react';
import Textarea from '../components/Textarea';
import Toolbar, { ToolbarState, ToolbarAction } from '../components/Toolbar';
import './index.scss';

const Home = () => {
  function reducer(state: ToolbarState, action: ToolbarAction) {
    const currentSelection = window.getSelection();
    if (currentSelection) {
      const selectedContent = currentSelection.toString();
      let currentContent = null;
      switch (action.type) {
        case 'bold':
          currentContent = state.content.replace(
            selectedContent,
            `<span style="font-weight: 700;">${selectedContent}</span>`
          );
          return { ...state, bold: !state.bold, content: currentContent };
        case 'italic':
          currentContent = state.content.replace(
            selectedContent,
            `<span style="font-style: italic;">${selectedContent}</span>`
          );
          return { ...state, italic: !state.italic, content: currentContent };
        case 'underline':
          currentContent = state.content.replace(
            selectedContent,
            `<span style="text-decoration: underline;">${selectedContent}</span>`
          );
          return {
            ...state,
            underline: !state.underline,
            content: currentContent,
          };
        case 'change':
          return { ...state, payload: action.payload };
      }
    } else if (action.type === 'change') {
      return { ...state, payload: action.payload };
    } else {
      return state;
    }
  }

  const [toolbarState, toolbarDispatch] = useReducer<
    Reducer<ToolbarState, ToolbarAction>
  >(reducer, {
    content: '<div>Hello World!</div>',
    bold: false,
    italic: false,
    underline: false,
  });

  return (
    <div className="home">
      <div style={{ paddingBottom: '8px' }}>简易富文本编辑器</div>
      <div style={{ border: '1px solid #cccccc', borderRadius: '4px' }}>
        <Toolbar
          toolbarState={toolbarState}
          toolbarDispatch={toolbarDispatch}
          content={toolbarState.content}
        />
        <Textarea
          changeHandler={(event) =>
            toolbarDispatch({
              type: 'change',
              payload: event.currentTarget.innerHTML,
            })
          }
          content={toolbarState.content}
        />
      </div>
    </div>
  );
};

export default Home;
