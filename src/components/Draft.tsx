import React, { useState, useEffect, useCallback } from 'react';
import { Editor, RichUtils, EditorState } from 'draft-js';
import InlineStyleControls from './InlineStyleControls';
import 'draft-js/dist/Draft.css';

function DraftEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const editor = React.useRef(null);

  function focusEditor() {
    if (editor.current) {
      (editor as any).current.focus();
    }
  }

  useEffect(() => {
    focusEditor();
  }, []);

  const onChange = useCallback((editorState) => {
    return setEditorState(editorState);
  }, []);

  const toggleInlineStyle = useCallback(
    (inlineStyle) => {
      onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
    },
    [onChange, editorState]
  );

  return (
    <div style={{ padding: '24px' }} onClick={focusEditor}>
      <InlineStyleControls
        editorState={editorState}
        onToggle={toggleInlineStyle}
      />
      <Editor ref={editor} editorState={editorState} onChange={onChange} />
    </div>
  );
}

export default DraftEditor;
