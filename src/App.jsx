import "./assets/css/output.css";
import { Sidebar } from "./components/Sidebar";
import { InitialSeciton } from './components/InitialSection';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <InitialSeciton />
    </div>
  )
}

export default App
