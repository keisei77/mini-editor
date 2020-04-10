import React, { useCallback, useState } from 'react';
import Textarea from '../components/Textarea';
import Toolbar from '../components/Toolbar';
import './index.scss';

const Home = () => {
  const [content, setContent] = useState<string>('<div>Hello World!</div>');
  const changeHandler = useCallback((event: React.SyntheticEvent) => {
    setContent(event.currentTarget.innerHTML);
    console.log(event.target);
  }, []);

  return (
    <div className="home">
      <div>简易富文本编辑器</div>
      <Toolbar />
      <Textarea changeHandler={changeHandler} content={content} />
    </div>
  );
};

export default Home;
