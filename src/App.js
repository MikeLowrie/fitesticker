import SplitPane from 'react-split-pane';
import './App.css';

//https://www.dhiwise.com/post/getting-started-with-react-split-pane-a-step-by-step-tutorial
function App() {
  /*
  return (
    <div className="App">
      <SplitPane split="vertical" minSize={50} maxSize={1000} defaultSize={200}>
        <div style={{ background: "#ffa" }}>First</div>
        <SplitPane split="horizontal" minSize={200} defaultSize={200}>
          <div style={{ background: "#eee" }}>Second.................</div>
          <div style={{ background: "#eae" }}>Third</div>
        </SplitPane>
      </SplitPane>
    </div>
  );
  */
  return (
    <div className="App">
      <SplitPane split="vertical">
        <SplitPane split="horizontal" minSize={50} maxSize={1000} defaultSize={200}>
          <SplitPane split="horizontal">
            <div>Game one</div>
            <SplitPane split="horizontal">
              <div>Game two</div>
              <div>Game three</div>
            </SplitPane>
          </SplitPane>
        </SplitPane>
        <SplitPane split="vertical">
          <SplitPane split="horizontal">
            <div>Time one</div>
            <SplitPane split="horizontal">
              <div>Time two</div>
              <div>Time three</div>
            </SplitPane>
          </SplitPane>
        </SplitPane>
      </SplitPane>
    </div>
  );
}

export default App;
