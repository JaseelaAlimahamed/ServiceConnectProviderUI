import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/ProviderRoutes'; // Import your router configuration

function App() {
  // Only one RouterProvider should be rendered
  return <RouterProvider router={router} />;
}

export default App;
