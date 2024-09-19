import { Routes, Route } from 'react-router-dom'
import ProviderRoutes from './routes/ProviderRoutes';
import ServiceRequestPage from './pages/ServiceRequestPage';


function App() {
  

  return (
    <>
   
    <Routes>
      {/* <Route path="/" element={<ProviderRoutes/>} /> */}
       <Route path="/" element={<h1>HI INDEX PAGE</h1>} />
      <Route path="/service-request" element={<ServiceRequestPage/>} /> 
    </Routes>
    </>
  );
}

export default App;
