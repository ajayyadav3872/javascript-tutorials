// import logo from './logo.svg';
import './App.css';
import Person from './Components/Person';
import Name from './Components/Name';

function App() {
  return (
    <div className='App'>
      <Person name = "Ajay" Age="23"/>
      <Person name = "Vijay" Age="20"/>
      <Person name = "Friend"/>
    </div>
  )
}

export default App;
