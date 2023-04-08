import './index.css';
import Navbar from './Navigation/Navbar.js'
import Example from './Example/Example'
import Stepper from './Stepper/Stepper.js'
import Clock from './Clock/Clock.js'
import './App.css';
function App() {
  return (
    <div>
      <Navbar />
      < Example />
      <br></br>
      <Stepper/>
      <br></br>
      <Clock/>
    </div>
  );
}

export default App;