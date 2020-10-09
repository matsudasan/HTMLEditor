import React from 'react';
import { RecoilRoot, } from 'recoil';
import './App.css';
import Playground from "./component/Playground"
import Editor from "./component/Editor"

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <div className="app">
        <Playground />
        <Editor />
      </div>
    </RecoilRoot>
  );
}

export default App;
