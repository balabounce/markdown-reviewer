import React, {useState} from 'react';
import './App.css';
import Editor from './components/editor/editor.component';
import Previewer from './components/previewer/previewer.component';

function App() {
  const [windowsClosed, setWindowsToVanish] = useState('Neither');

  const updateApp = (winName: string): void => {
      setWindowsToVanish(winName);
  }

  console.log(windowsClosed);

  return (
    <div className="App">
      <section>
        <div className="container">
          {windowsClosed !== 'Editor' ? <Editor updateApp={updateApp}/> : null}
          {windowsClosed !== 'Previewer' ? <Previewer updateApp={updateApp}/> : null}
        </div>
      </section>
    </div>
  );
}

export default App;
