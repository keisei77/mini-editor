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
            `<span style="font-weight: 700;">${selectedContent}</span>`
          );
          return { ...state, italic: !state.italic };
        case 'underline':
          currentContent = state.content.replace(
            selectedContent,
            `<span style="font-weight: 700;">${selectedContent}</span>`
          );
          return { ...state, underline: !state.underline };
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
      <div>简易富文本编辑器</div>
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
  );
};

export default Home;
