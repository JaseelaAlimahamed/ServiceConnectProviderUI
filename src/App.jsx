import { Routes, Route } from 'react-router-dom'
import RegisteredServices from './pages/RegisteredServices';
import ButtonComponent from './components/reUsableComponents/ButtonComponent';
// import'./App.css';
function App() {


  return (
    
      <Routes>
        <Route path="/*" element={<RegisteredServices/>} />
        <Route path="/addservice" element={<ButtonComponent />} />
      </Routes>
    
  );
}

export default App;

