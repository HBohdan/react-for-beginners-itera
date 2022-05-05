import './App.css';
import data from './personalData.json';

const App = () => {
  return (
    <div className="App">
      <h1>{data['First Name']}</h1>
      <p>{data['Short biography']}</p>
      <p>{data['Public contact']}</p>
    </div>
  );
}

export default App;
