import { Routes, Route } from 'react-router-dom'

import DeclinePage from './pages/Services/DeclinePage';

// import ProviderRoutes from './routes/ProviderRoutes';
// import'./App.css';
function App() {

  return (

  
 <Routes>
<Route path='/*' element={<DeclinePage/>}/>
</Routes> 


  );
}

export default App;

