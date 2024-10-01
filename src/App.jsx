
import { Routes, Route } from 'react-router-dom'
import ProviderRoutes from './routes/ProviderRoutes';

// import'./App.css';
function App() {

  return (
  
<div>

    <Routes>
      <Route path="/*" element={<ProviderRoutes />} />
    </Routes>
    </div>


  );
}

export default App;