import './Editer.css';
import { useState, useRef } from 'react';

const Editer = ({ onCreate }) => {
  const [content, setContent] = useState('');
  const contentRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    if (content === '') {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };
  const onKeyDown = (e) => {
    if (e.keyCode == 13) {
      onSubmit();
    }
  };
  return (
    <div className="Editer">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};
export default Editer;
