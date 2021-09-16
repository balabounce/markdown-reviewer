import React, {useState} from 'react';
import './App.css';
import Editor from './components/editor/editor.component';
import Previewer from './components/previewer/previewer.component';

function App() {
  const [windowsClosed, setWindowsToVanish] = useState('Neither');
  const [data, updateData] = useState('');

  const updateApp = (winName: string, text?: string): void => {
      setWindowsToVanish(winName);
      console.log(text);
      if(text !== undefined) {
        updateData(text);
      };
  }


  return (
    <div className="App">
      <section>
        <div className="container">
          {windowsClosed !== 'Editor' ? <Editor updateApp={updateApp} data={data}/> : null}
          {windowsClosed !== 'Previewer' ? <Previewer updateApp={updateApp} data={data}/> : null}
        </div>
      </section>
    </div>
  );
}

export default App;
