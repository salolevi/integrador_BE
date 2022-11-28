import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import { PacienteForm } from './components/PacienteForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/crear-paciente" element={<PacienteForm />} />
      </Routes>
    </div>
  )
}

export default App
