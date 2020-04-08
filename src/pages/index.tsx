import React from 'react';
import Textarea from '../components/Textarea';
import Toolbar from '../components/Toolbar';

const Home = () => {
  return (
    <div>
      <div>简易富文本编辑器</div>
      <Toolbar />
      <Textarea />
    </div>
  );
};

export default Home;
