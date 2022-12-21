import './App.css';
import Message from './Message';

const App = () => {
  const a = 1;
  const b = 2;
  return (
    <div className="App">
      <h1>App Title</h1>
      <strong>We're working on it</strong>
      <Message message='Working on a React course'/>
      <Description/>
      <div>
        <p>Result: {a + b}</p>
      </div>
    </div>
  );
};

const Description = () => {
  return <div>This is the midudev bootcamp course</div>;
};

export default App;
