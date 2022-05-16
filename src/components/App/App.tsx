import './App.css';
import data from '../../personalData.json';
import Name from '../Name/Name';
import Biography from '../Biography/Biography';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

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
