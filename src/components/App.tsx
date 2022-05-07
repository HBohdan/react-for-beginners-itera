import './App.css';
import data from '../personalData.json';
import Name from './Name';
import Biography from './Biography';
import Contact from './Contact';

const App = () => {
  return (
    <div className="App">
      <Name name={data['First Name']} />
      <Biography biography={data['Short biography']} />
      <Contact contact={data['Public contact']} />
    </div>
  );
}

export default App;
