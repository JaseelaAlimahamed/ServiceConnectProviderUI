import { Routes, Route } from 'react-router-dom'
import ProviderRoutes from '../src/routes/ProviderRoutes'



function App() {
  

  return (
    <>
   
    <Routes>
      <Route path="/*" element={<ProviderRoutes/>} />
    </Routes>
    </>
  );
}

export default App;
