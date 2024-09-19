import { Routes, Route } from 'react-router-dom'
import ProviderRoutes from './routes/ProviderRoutes.jsx';
import Hello from './Hello.jsx'

// import'./App.css';
function App() {


  return (
    <Routes>
      <Route path="/*" element={<ProviderRoutes/>} />
      <Route path="/hello" element={ <Hello/>} />
      
    </Routes>
  );
}

export default App;
