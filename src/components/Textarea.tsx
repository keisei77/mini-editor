import React, { useRef, useEffect } from 'react';
import './textarea.scss';
interface Textarea {
  content: string;
  changeHandler: (event: React.SyntheticEvent) => void;
}

const resetCaret = (el: HTMLElement) => {
  const tailNode = document.createTextNode('');
  el.appendChild(tailNode);

  const isTargetFocused = document.activeElement === el;

  if (tailNode !== null && tailNode.nodeValue !== null && isTargetFocused) {
    const selection = window.getSelection();

    if (selection) {
      const range = document.createRange();
      range.setStart(tailNode, tailNode.nodeValue.length);

      range.collapse(true);

      selection.removeAllRanges();
      selection.addRange(range);
    }

    if (el instanceof HTMLElement) el.focus();
  }
};

const Textarea = (props: Textarea) => {
  const { content, changeHandler } = props;
  const elRef = useRef<HTMLDivElement>(null);

  const isMount = !!elRef.current;
  useEffect(() => {
    if (!elRef.current) return;
    if (content !== elRef.current.innerHTML) {
      elRef.current.innerHTML = content;
    }
    resetCaret(elRef.current);
  }, [content, isMount]);

  return (
    <div
      id="textarea"
      contentEditable
      ref={elRef}
      onInput={(event) => changeHandler(event)}
      onBlur={(event) => changeHandler(event)}
      onKeyUp={(event) => changeHandler(event)}
      onKeyDown={(event) => changeHandler(event)}
    >
      {content}
    </div>
  );
};

export default Textarea;
