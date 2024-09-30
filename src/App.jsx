import { Routes, Route } from 'react-router-dom'

import ProfilePage from './pages/ProfilePage';

// import ProviderRoutes from './routes/ProviderRoutes';
// import'./App.css';
function App() {

  return (

  
 <Routes>
<Route path='/*' element={<ProfilePage/>}/>
</Routes> 


  );
}

export default App;

