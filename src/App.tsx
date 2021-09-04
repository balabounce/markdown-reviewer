import React, {useState} from 'react';
import './App.css';
import Editor from './components/editor/editor.component';
import Previewer from './components/previewer/previewer.component';

function App() {
  const [windows, setWindowsToVanish] = useState('null');

  // const updateApp = (winName: string): void => {
  //     setWindowsToVanish(winName);
  // }

  return (
    <div className="App">
      <section>
        <div className="container">
          <Editor />
          <Previewer/>
        </div>
      </section>
    </div>
  );
}

export default App;
