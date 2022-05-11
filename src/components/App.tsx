import './App.css';
import data from '../personalData.json';
import Name from './Name';
import Biography from './Biography';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <Name name={data['First Name']} />
      <Biography biography={data['Short biography']} />
      <Contact contact={data['Public contact']} />
      <Footer copyright='HB' />
    </div>
  );
}

export default App;
