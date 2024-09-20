import { Routes, Route } from 'react-router-dom'
import ProviderRoutes from '../src/routes/ProviderRoutes'
// import'./App.css';
function App() {

  return (
   <>

    <Routes>
      <Route path='/*' element={<ProviderRoutes/>}/>
    </Routes>

    </>

  );
}

export default App;
