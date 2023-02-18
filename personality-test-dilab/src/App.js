import './App.css';
import QuestionComponent from './components/Questions.jsx';
import ContinueComponent from './components/Continue.jsx'

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="heading">Personality Test</h1>
      </header>

      <QuestionComponent question={"I am sensitive to others' emotions"} />
      <QuestionComponent question={'When engaged in projects, I want to get everything "just right"'} />
      <QuestionComponent question={"I am sensitive to others' emotions"} />
      <QuestionComponent question={"I stay calm under pressure"} />
      <QuestionComponent question={"I get stressed out easily"} />
      <ContinueComponent />

    </div>
  );
}

export default App;
